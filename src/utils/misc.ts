import { ETHERSCAN_URL } from "../constants/endpoints";
import { WEB3_DATA_TYPE } from "../constants/web3";
import { format, formatDistance, fromUnixTime } from 'date-fns'
import { formatUnits } from "ethers/lib/utils";
import { tokenLogos } from "../constants/tokens";

export const getEtherscanUrl = (value: string, type: WEB3_DATA_TYPE): string => {
  const baseUrl = ETHERSCAN_URL;
  let suffix = "";
  if (type === WEB3_DATA_TYPE.Address) {
    suffix = "/address/";
  } else if (type === WEB3_DATA_TYPE.Tx) {
    suffix = "/tx/";
  } 

  const url = baseUrl + suffix + value;
  return url;
}

export const formatDurationHumanize = (duration: number): string => {
  return formatDistance(0, duration * 1000, { includeSeconds: true });
}

export const formatDate = (timestamp: number, pattern="Pp O"): string => {
  const date = fromUnixTime(timestamp)
  return format(date, pattern);
}

export const formatToFixed = (amount: string, decimals: string, roundDecimals?: number): string => {
  let num = Number(formatUnits(amount, decimals));
  if (roundDecimals) {
    return num.toFixed(roundDecimals)
  } else {
    if (num < 1 && num !== 0) {
      return parseFloat(num.toFixed(5)).toString()
    } else {
      return parseFloat(num.toFixed(2)).toString()
    }
  } 
}

export const getTokenUri = (address: string) => {
  return tokenLogos[address] || "";
}