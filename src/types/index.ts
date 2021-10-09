
export type DCAPosition = {
  positionId: string
  tokenIn: Token
  tokenOut: Token
  balanceIn: string
  balanceOut: string
  amountDCA: string
  intervalDCA: string
  lastDCA: string
  maxSlippage: string
}

export type Token = {
  name: string
  ticker: string
  address: string
  imageUri: string
}

export type PositionTx = {
  action: string
  timestamp: string
  txHash: string
}