export interface ETHEREUM_CHAIN {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export type DCAPosition = {
  id: string
  tokenIn: Token
  tokenOut: Token
  balanceIn: string
  balanceOut: string
  totalIn: string
  totalOut: string
  amountDCA: string
  intervalDCA: string
  lastDCA: string
  maxSlippage: string
  transactions: Transaction[]
  owner: string
}

export type TokenPair = {
  id: string
  token1: Token
  token2: Token
  allowed: boolean
}

export type Token = {
  id: string
  symbol: string
  name: string
  decimals: string
  imageUri: string
}

export type PositionTx = {
  action: string
  timestamp: string
  txHash: string
}

export type Transaction = {
  id: string
  hash: string
  action: Action
  timestamp: string
  amountIn: string
  amountOut: string
}

export enum Action {
  CREATE_POSITION="CREATE_POSITION",
  UPDATE_POSITION="UPDATE_POSITION",
  DEPOSIT="DEPOSIT",
  WITHDRAW_TOKEN_IN="WITHDRAW_TOKEN_IN",
  WITHDRAW_TOKEN_OUT="WITHDRAW_TOKEN_OUT",
  EXECUTE_DCA="EXECUTE_DCA"
}