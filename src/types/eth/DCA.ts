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
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type DCAExtraDataStruct = {
  swapAmountOutMin: BigNumberish;
  swapPath: string[];
};

export type DCAExtraDataStructOutput = [BigNumber, string[]] & {
  swapAmountOutMin: BigNumber;
  swapPath: string[];
};

export type PositionStruct = {
  id: BigNumberish;
  owner: string;
  tokenIn: string;
  tokenOut: string;
  balanceIn: BigNumberish;
  balanceOut: BigNumberish;
  amountDCA: BigNumberish;
  intervalDCA: BigNumberish;
  lastDCA: BigNumberish;
  maxSlippage: BigNumberish;
};

export type PositionStructOutput = [
  BigNumber,
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  id: BigNumber;
  owner: string;
  tokenIn: string;
  tokenOut: string;
  balanceIn: BigNumber;
  balanceOut: BigNumber;
  amountDCA: BigNumber;
  intervalDCA: BigNumber;
  lastDCA: BigNumber;
  maxSlippage: BigNumber;
};

export interface DCAInterface extends ethers.utils.Interface {
  functions: {
    "ETH_TOKEN()": FunctionFragment;
    "allowedTokenPairs(address,address)": FunctionFragment;
    "createPositionAndDeposit(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "depositETH(uint256)": FunctionFragment;
    "executeDCA(uint256,(uint256,address[]))": FunctionFragment;
    "executeDCAs(uint256[],(uint256,address[])[])": FunctionFragment;
    "executor()": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "getNextPositionId()": FunctionFragment;
    "getPositions(uint256[])": FunctionFragment;
    "getReadyPositionIds()": FunctionFragment;
    "minSlippage()": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "positions(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAllowedTokenPair(address,address,bool)": FunctionFragment;
    "setMinSlippage(uint256)": FunctionFragment;
    "setSystemPause(bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uniRouter()": FunctionFragment;
    "updatePosition(uint256,uint256,uint256)": FunctionFragment;
    "weth()": FunctionFragment;
    "withdrawTokenIn(uint256,uint256)": FunctionFragment;
    "withdrawTokenOut(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ETH_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowedTokenPairs",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createPositionAndDeposit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDCA",
    values: [BigNumberish, DCAExtraDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDCAs",
    values: [BigNumberish[], DCAExtraDataStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "executor", values?: undefined): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getNextPositionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPositions",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getReadyPositionIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minSlippage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowedTokenPair",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinSlippage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSystemPause",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "uniRouter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updatePosition",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawTokenIn",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokenOut",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ETH_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokenPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPositionAndDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeDCA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeDCAs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNextPositionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReadyPositionIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minSlippage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowedTokenPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinSlippage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSystemPause",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uniRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokenIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokenOut",
    data: BytesLike
  ): Result;

  events: {
    "AllowedTokenPairSet(address,address,bool)": EventFragment;
    "Deposit(uint256,uint256)": EventFragment;
    "ExecuteDCA(uint256)": EventFragment;
    "MinSlippageSet(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PausedSet(bool)": EventFragment;
    "PositionCreated(uint256,address,address,address,uint256,uint256,uint256)": EventFragment;
    "PositionUpdated(uint256,uint256,uint256)": EventFragment;
    "WithdrawTokenIn(uint256,uint256)": EventFragment;
    "WithdrawTokenOut(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllowedTokenPairSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteDCA"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinSlippageSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausedSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PositionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawTokenIn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawTokenOut"): EventFragment;
}

export type AllowedTokenPairSetEvent = TypedEvent<
  [string, string, boolean],
  { tokenIn: string; tokenOut: string; allowed: boolean }
>;

export type AllowedTokenPairSetEventFilter =
  TypedEventFilter<AllowedTokenPairSetEvent>;

export type DepositEvent = TypedEvent<
  [BigNumber, BigNumber],
  { positionId: BigNumber; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type ExecuteDCAEvent = TypedEvent<
  [BigNumber],
  { positionId: BigNumber }
>;

export type ExecuteDCAEventFilter = TypedEventFilter<ExecuteDCAEvent>;

export type MinSlippageSetEvent = TypedEvent<
  [BigNumber],
  { minSlippage: BigNumber }
>;

export type MinSlippageSetEventFilter = TypedEventFilter<MinSlippageSetEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedSetEvent = TypedEvent<[boolean], { paused: boolean }>;

export type PausedSetEventFilter = TypedEventFilter<PausedSetEvent>;

export type PositionCreatedEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber],
  {
    positionId: BigNumber;
    owner: string;
    tokenIn: string;
    tokenOut: string;
    amountDCA: BigNumber;
    intervalDCA: BigNumber;
    maxSlippage: BigNumber;
  }
>;

export type PositionCreatedEventFilter = TypedEventFilter<PositionCreatedEvent>;

export type PositionUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { positionId: BigNumber; amountDCA: BigNumber; intervalDCA: BigNumber }
>;

export type PositionUpdatedEventFilter = TypedEventFilter<PositionUpdatedEvent>;

export type WithdrawTokenInEvent = TypedEvent<
  [BigNumber, BigNumber],
  { positionId: BigNumber; amount: BigNumber }
>;

export type WithdrawTokenInEventFilter = TypedEventFilter<WithdrawTokenInEvent>;

export type WithdrawTokenOutEvent = TypedEvent<
  [BigNumber, BigNumber],
  { positionId: BigNumber; amount: BigNumber }
>;

export type WithdrawTokenOutEventFilter =
  TypedEventFilter<WithdrawTokenOutEvent>;

export interface DCA extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DCAInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETH_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    allowedTokenPairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    createPositionAndDeposit(
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositETH(
      _positionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeDCA(
      _positionId: BigNumberish,
      _extraData: DCAExtraDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeDCAs(
      _positionIds: BigNumberish[],
      _extraDatas: DCAExtraDataStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executor(overrides?: CallOverrides): Promise<[string]>;

    exit(
      _positionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNextPositionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPositions(
      positionIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[PositionStructOutput[]]>;

    getReadyPositionIds(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    minSlippage(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    positions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        owner: string;
        tokenIn: string;
        tokenOut: string;
        balanceIn: BigNumber;
        balanceOut: BigNumber;
        amountDCA: BigNumber;
        intervalDCA: BigNumber;
        lastDCA: BigNumber;
        maxSlippage: BigNumber;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowedTokenPair(
      _tokenIn: string,
      _tokenOut: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinSlippage(
      _minSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSystemPause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniRouter(overrides?: CallOverrides): Promise<[string]>;

    updatePosition(
      _positionId: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    withdrawTokenIn(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTokenOut(
      _positionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ETH_TOKEN(overrides?: CallOverrides): Promise<string>;

  allowedTokenPairs(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  createPositionAndDeposit(
    _tokenIn: string,
    _tokenOut: string,
    _amountIn: BigNumberish,
    _amountDCA: BigNumberish,
    _intervalDCA: BigNumberish,
    _maxSlippage: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _positionId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositETH(
    _positionId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeDCA(
    _positionId: BigNumberish,
    _extraData: DCAExtraDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeDCAs(
    _positionIds: BigNumberish[],
    _extraDatas: DCAExtraDataStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executor(overrides?: CallOverrides): Promise<string>;

  exit(
    _positionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNextPositionId(overrides?: CallOverrides): Promise<BigNumber>;

  getPositions(
    positionIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<PositionStructOutput[]>;

  getReadyPositionIds(overrides?: CallOverrides): Promise<BigNumber[]>;

  minSlippage(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  positions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: BigNumber;
      owner: string;
      tokenIn: string;
      tokenOut: string;
      balanceIn: BigNumber;
      balanceOut: BigNumber;
      amountDCA: BigNumber;
      intervalDCA: BigNumber;
      lastDCA: BigNumber;
      maxSlippage: BigNumber;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowedTokenPair(
    _tokenIn: string,
    _tokenOut: string,
    _allowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinSlippage(
    _minSlippage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSystemPause(
    _paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniRouter(overrides?: CallOverrides): Promise<string>;

  updatePosition(
    _positionId: BigNumberish,
    _amountDCA: BigNumberish,
    _intervalDCA: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  withdrawTokenIn(
    _positionId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTokenOut(
    _positionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETH_TOKEN(overrides?: CallOverrides): Promise<string>;

    allowedTokenPairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    createPositionAndDeposit(
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(
      _positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDCA(
      _positionId: BigNumberish,
      _extraData: DCAExtraDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDCAs(
      _positionIds: BigNumberish[],
      _extraDatas: DCAExtraDataStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    executor(overrides?: CallOverrides): Promise<string>;

    exit(_positionId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getNextPositionId(overrides?: CallOverrides): Promise<BigNumber>;

    getPositions(
      positionIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PositionStructOutput[]>;

    getReadyPositionIds(overrides?: CallOverrides): Promise<BigNumber[]>;

    minSlippage(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    positions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        owner: string;
        tokenIn: string;
        tokenOut: string;
        balanceIn: BigNumber;
        balanceOut: BigNumber;
        amountDCA: BigNumber;
        intervalDCA: BigNumber;
        lastDCA: BigNumber;
        maxSlippage: BigNumber;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAllowedTokenPair(
      _tokenIn: string,
      _tokenOut: string,
      _allowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinSlippage(
      _minSlippage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSystemPause(_paused: boolean, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniRouter(overrides?: CallOverrides): Promise<string>;

    updatePosition(
      _positionId: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    weth(overrides?: CallOverrides): Promise<string>;

    withdrawTokenIn(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokenOut(
      _positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AllowedTokenPairSet(address,address,bool)"(
      tokenIn?: string | null,
      tokenOut?: string | null,
      allowed?: boolean | null
    ): AllowedTokenPairSetEventFilter;
    AllowedTokenPairSet(
      tokenIn?: string | null,
      tokenOut?: string | null,
      allowed?: boolean | null
    ): AllowedTokenPairSetEventFilter;

    "Deposit(uint256,uint256)"(
      positionId?: BigNumberish | null,
      amount?: BigNumberish | null
    ): DepositEventFilter;
    Deposit(
      positionId?: BigNumberish | null,
      amount?: BigNumberish | null
    ): DepositEventFilter;

    "ExecuteDCA(uint256)"(
      positionId?: BigNumberish | null
    ): ExecuteDCAEventFilter;
    ExecuteDCA(positionId?: BigNumberish | null): ExecuteDCAEventFilter;

    "MinSlippageSet(uint256)"(
      minSlippage?: BigNumberish | null
    ): MinSlippageSetEventFilter;
    MinSlippageSet(
      minSlippage?: BigNumberish | null
    ): MinSlippageSetEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PausedSet(bool)"(paused?: boolean | null): PausedSetEventFilter;
    PausedSet(paused?: boolean | null): PausedSetEventFilter;

    "PositionCreated(uint256,address,address,address,uint256,uint256,uint256)"(
      positionId?: BigNumberish | null,
      owner?: string | null,
      tokenIn?: null,
      tokenOut?: null,
      amountDCA?: null,
      intervalDCA?: null,
      maxSlippage?: null
    ): PositionCreatedEventFilter;
    PositionCreated(
      positionId?: BigNumberish | null,
      owner?: string | null,
      tokenIn?: null,
      tokenOut?: null,
      amountDCA?: null,
      intervalDCA?: null,
      maxSlippage?: null
    ): PositionCreatedEventFilter;

    "PositionUpdated(uint256,uint256,uint256)"(
      positionId?: BigNumberish | null,
      amountDCA?: BigNumberish | null,
      intervalDCA?: BigNumberish | null
    ): PositionUpdatedEventFilter;
    PositionUpdated(
      positionId?: BigNumberish | null,
      amountDCA?: BigNumberish | null,
      intervalDCA?: BigNumberish | null
    ): PositionUpdatedEventFilter;

    "WithdrawTokenIn(uint256,uint256)"(
      positionId?: BigNumberish | null,
      amount?: BigNumberish | null
    ): WithdrawTokenInEventFilter;
    WithdrawTokenIn(
      positionId?: BigNumberish | null,
      amount?: BigNumberish | null
    ): WithdrawTokenInEventFilter;

    "WithdrawTokenOut(uint256,uint256)"(
      positionId?: BigNumberish | null,
      amount?: BigNumberish | null
    ): WithdrawTokenOutEventFilter;
    WithdrawTokenOut(
      positionId?: BigNumberish | null,
      amount?: BigNumberish | null
    ): WithdrawTokenOutEventFilter;
  };

  estimateGas: {
    ETH_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokenPairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPositionAndDeposit(
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositETH(
      _positionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeDCA(
      _positionId: BigNumberish,
      _extraData: DCAExtraDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeDCAs(
      _positionIds: BigNumberish[],
      _extraDatas: DCAExtraDataStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executor(overrides?: CallOverrides): Promise<BigNumber>;

    exit(
      _positionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNextPositionId(overrides?: CallOverrides): Promise<BigNumber>;

    getPositions(
      positionIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReadyPositionIds(overrides?: CallOverrides): Promise<BigNumber>;

    minSlippage(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    positions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowedTokenPair(
      _tokenIn: string,
      _tokenOut: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinSlippage(
      _minSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSystemPause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniRouter(overrides?: CallOverrides): Promise<BigNumber>;

    updatePosition(
      _positionId: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawTokenIn(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTokenOut(
      _positionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowedTokenPairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createPositionAndDeposit(
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositETH(
      _positionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeDCA(
      _positionId: BigNumberish,
      _extraData: DCAExtraDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeDCAs(
      _positionIds: BigNumberish[],
      _extraDatas: DCAExtraDataStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(
      _positionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNextPositionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPositions(
      positionIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReadyPositionIds(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minSlippage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowedTokenPair(
      _tokenIn: string,
      _tokenOut: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinSlippage(
      _minSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSystemPause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updatePosition(
      _positionId: BigNumberish,
      _amountDCA: BigNumberish,
      _intervalDCA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawTokenIn(
      _positionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokenOut(
      _positionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
