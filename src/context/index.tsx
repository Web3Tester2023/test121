import { createContext, useEffect, useReducer } from 'react'
import { useAccount, useBalance, useNetwork } from 'wagmi'
import { fetchAPYs, fetchPriceFloors, getAssetPrice } from '../apis'
import { ASSET_PRICE_API_PARAMS } from '../utils'
import { Action, Actions } from './Action'
import reducer from './Reducer'
import initialState from './State'
import State from './StateModel'

// Context props
interface ProviderProps {
  children: React.ReactNode
}

// creating app context to support a redux structure
export const AppContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
])

/*
 * App Context Provider
 * Used to store certain values that can be used throughout the application in unrelated components
 */
export const AppContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { data: balanceData } = useBalance({
    addressOrName: address,
    watch: true,
  })

  /*
   * function to set the asset price for a selected asset
   */
  async function setAssetPrice(asset: string) {
    const { price } = await getAssetPrice(
      ASSET_PRICE_API_PARAMS[asset as keyof typeof ASSET_PRICE_API_PARAMS],
    )
    if (asset === 'ETH')
      dispatch({ type: Actions.STORE_ETH_PRICE, payload: price })
    // storing the asset price in context
    dispatch({ type: Actions.STORE_ASSET_PRICE, payload: price })
  }

  /*
   * effect to make initial api calls
   */
  useEffect(() => {
    initialAPICalls()
  }, [])

  /*
   * initial api calls to fetch price floors and apys for all supported assets
   */
  const initialAPICalls = async () => {
    const priceFloors = await fetchPriceFloors()
    dispatch({ type: Actions.STORE_PRICE_FLOORS, payload: priceFloors.result })
    const apys = await fetchAPYs()
    dispatch({ type: Actions.STORE_APYS, payload: apys.result })
  }

  /*
   * effect to call the set asset price function
   */
  useEffect(() => {
    setAssetPrice(state.selectedAsset.label)
  }, [state.selectedAsset])

  /*
   * effect to store the chain id in context
   */
  useEffect(() => {
    dispatch({ type: Actions.STORE_CHAIN_ID, payload: chain?.id })
  }, [chain])

  /*
   * effect to store the asset balance in context
   */
  useEffect(() => {
    dispatch({
      type: Actions.STORE_ASSET_BALANCE,
      payload: balanceData?.formatted,
    })
  }, [balanceData])

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}
