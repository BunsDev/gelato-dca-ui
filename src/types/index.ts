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

enum Action {
  CREATE_POSITION,
  UPDATE_POSITION,
  DEPOSIT,
  WITHDRAW_TOKEN_IN,
  WITHDRAW_TOKEN_OUT,
  EXECUTE_DCA
}