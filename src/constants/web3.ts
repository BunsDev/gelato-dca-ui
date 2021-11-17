import { ETHEREUM_CHAIN } from "../types";

export const INFURA_ID = process.env.REACT_APP_INFURA_ID!;

export enum WEB3_DATA_TYPE {
  Tx,
  Address,
}

export enum CHAIN_ID {
  MAINNET = 1,
  POLYGON = 137,
  // ROPSTEN = 3,
}

export const CHAIN_METADATA: {[key in CHAIN_ID]: ETHEREUM_CHAIN} = {
  [CHAIN_ID.MAINNET]: {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [],
    blockExplorerUrls: [],
  },
  [CHAIN_ID.POLYGON]: {
    chainId: "0x89",
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  // [CHAIN_ID.ROPSTEN]: {
  //   chainId: "0x3",
  //   chainName: "Ropsten",
  //   nativeCurrency: {
  //     name: "Ether",
  //     symbol: "ETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: [],
  //   blockExplorerUrls: [],
  // },
}