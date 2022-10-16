import { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import STYLES from '../../style/styles.json'
import { Sprite, Typography } from '..'
import { rem } from '../../utils'
import { AssetDropdownOptions, Option } from './SelectInterfaces'
import { AppContext } from '../../context'
import { Actions } from '../../context/Action'
import { useOutsideAlerter } from '../../hooks'

const AssetDetails = styled.div`
  position: relative;
`
const Picker = styled.div`
  background: ${STYLES.palette.colors.assetBackground};
  padding: ${rem(4)} ${rem(8)};
  border-radius: ${rem(100)};
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  cursor: pointer;
`
const Options = styled.div`
  min-width: ${rem(180)}
  max-width: ${rem(300)};
  padding: ${rem(16)};
  background: ${STYLES.palette.colors.black};
  position: absolute;
  max-height: ${rem(250)};
  overflow-y: scroll;
  z-index: 9;
  border-radius: ${rem(8)};
  top: ${rem(40)};
  left: 0;
`
const OptionComponent = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: ${rem(4)} ${rem(8)};
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  filter: brightness(60%);
  cursor: pointer;
  &:hover {
    filter: brightness(100%);
  }
`
const IconContainer = styled.div`
  background: ${STYLES.palette.colors.pickerIconBackground};
  padding: ${rem(2)} ${rem(8)};
  border-radius: 50%;
`
/*
 * Asset Dropdown
 * Used to select the asset the user wants to protect or withdraw
 */
const AssetDropdown = ({
  options,
  onChange,
  pickerStyle,
  optionsStyle,
  labelStyle,
  hidePickerIcon,
}: AssetDropdownOptions) => {
  // context
  const [state, dispatch] = useContext(AppContext)

  // state hooks
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>({
    icon: options[0].icon,
    label: options[0].label,
    pickerLabel: options[0].pickerLabel,
  })

  // hooks written to close the dropdown when clicked outside
  const dropdownRef = useRef(null)
  useOutsideAlerter(dropdownRef, () => setShowOptions(false))

  /*
   * function written to display the selected asset on the picker
   * return the asset to the parent component
   * store the asset in context
   */
  const handleClick = (val: Option) => {
    onChange && onChange(val.label)
    setShowOptions(false)
    // storing the selected asset in context
    dispatch({ type: Actions.STORE_SELECTED_ASSET, payload: val })
  }

  useEffect(() => {
    if (state.selectedAsset) {
    setSelectedOption({
      icon: options.filter((o) => o.label === state.selectedAsset.label)[0]
        .icon,
      label: options.filter((o) => o.label === state.selectedAsset.label)[0]
        .label,
      pickerLabel: options.filter(
        (o) => o.label === state.selectedAsset.label,
      )[0].pickerLabel,
    })
    }
  }, [state.selectedAsset])

  return (
    <AssetDetails ref={dropdownRef}>
      <Picker
        onClick={() => setShowOptions(!showOptions)}
        style={{ ...pickerStyle }}
      >
        {!hidePickerIcon && selectedOption.icon ? (
          <IconContainer>
          <Sprite
            id={selectedOption.icon}
            width={pickerStyle?.iconWidth || 25}
            height={pickerStyle?.iconHeight || 25}
          /></IconContainer>
        ) : null}
        <Typography
          fontFamily="semiBold"
          style={{ ...labelStyle, fontSize: rem(labelStyle?.fontSize || 24) }}
        >
          {selectedOption.pickerLabel || selectedOption.label}
        </Typography>
        <Sprite
          id="chevron-down"
          width={12}
          height={7}
          {...(showOptions
            ? { style: { transform: 'rotate(180deg)' } }
            : undefined)}
        />
      </Picker>
      {showOptions ? (
        <Options style={{ ...optionsStyle }}>
          {options.map((option, index) => (
            <OptionComponent
              key={`${index} - ${option.label}`}
              onClick={() => handleClick(option)}
            >
              {option.icon ? (
                <Sprite
                  id={option.icon}
                  height={optionsStyle?.iconHeight || 24}
                  width={optionsStyle?.iconWidth || 24}
                />
              ) : null}
              <Typography
                fontFamily="regular"
                style={{ fontSize: rem(optionsStyle?.fontSize || 18) }}
              >
                {option.label}
              </Typography>
            </OptionComponent>
          ))}
        </Options>
      ) : null}
    </AssetDetails>
  )
}

export default AssetDropdown
