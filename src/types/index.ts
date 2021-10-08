
export type DCAPosition = {
  positionId: string
  tokenIn: string
  tokenOut: string
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

export enum IntervalPeriod {
  Hour = 3600,
  Day = 86400,
  Week = 604800,
}