import { ETHERSCAN_URL } from "../constants/endpoints";
import { WEB3_DATA_TYPE } from "../constants/web3";

export const getEtherscanUrl = (value: string, type: WEB3_DATA_TYPE) => {
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