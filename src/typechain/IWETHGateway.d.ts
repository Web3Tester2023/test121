/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IWETHGatewayInterface extends ethers.utils.Interface {
  functions: {
    "borrowETH(address,uint256,uint256,uint16)": FunctionFragment;
    "depositETH(address,address,uint16)": FunctionFragment;
    "getWETHAddress()": FunctionFragment;
    "repayETH(address,uint256,uint256,address)": FunctionFragment;
    "withdrawETH(address,uint256,address)": FunctionFragment;
    "withdrawETHWithPermit(address,uint256,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrowETH",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWETHAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayETH",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETHWithPermit",
    values: [
      string,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(functionFragment: "borrowETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWETHAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETHWithPermit",
    data: BytesLike
  ): Result;

  events: {};
}

export class IWETHGateway extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IWETHGatewayInterface;

  functions: {
    borrowETH(
      pool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getWETHAddress(overrides?: CallOverrides): Promise<[string]>;

    repayETH(
      pool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawETH(
      pool: string,
      amount: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawETHWithPermit(
      pool: string,
      amount: BigNumberish,
      to: string,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  borrowETH(
    pool: string,
    amount: BigNumberish,
    interesRateMode: BigNumberish,
    referralCode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositETH(
    pool: string,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getWETHAddress(overrides?: CallOverrides): Promise<string>;

  repayETH(
    pool: string,
    amount: BigNumberish,
    rateMode: BigNumberish,
    onBehalfOf: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawETH(
    pool: string,
    amount: BigNumberish,
    onBehalfOf: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawETHWithPermit(
    pool: string,
    amount: BigNumberish,
    to: string,
    deadline: BigNumberish,
    permitV: BigNumberish,
    permitR: BytesLike,
    permitS: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    borrowETH(
      pool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getWETHAddress(overrides?: CallOverrides): Promise<string>;

    repayETH(
      pool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETH(
      pool: string,
      amount: BigNumberish,
      onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETHWithPermit(
      pool: string,
      amount: BigNumberish,
      to: string,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    borrowETH(
      pool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getWETHAddress(overrides?: CallOverrides): Promise<BigNumber>;

    repayETH(
      pool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawETH(
      pool: string,
      amount: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawETHWithPermit(
      pool: string,
      amount: BigNumberish,
      to: string,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrowETH(
      pool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getWETHAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayETH(
      pool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      pool: string,
      amount: BigNumberish,
      onBehalfOf: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawETHWithPermit(
      pool: string,
      amount: BigNumberish,
      to: string,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
