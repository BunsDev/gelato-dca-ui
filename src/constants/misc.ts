export enum IntervalPeriod {
  Hour = 3600,
  Day = 86400,
  Week = 604800,
}

export const DEFAULT_REFRESH_INTERVAL = 10000;

export const TOOLTIP_DCA_INTERVAL = "Fixed interval between each DCA execution";
export const TOOLTIP_DCA_AMOUNT = "The amount of token to spend for each DCA";
export const TOOLTIP_DCA_LEFT = "How many DCA executions are left with current available fund";