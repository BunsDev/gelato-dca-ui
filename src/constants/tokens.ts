import { Token } from "../types";
import UsdcLogo from "../assets/usdc.png";
import EthLogo from "../assets/eth.png";

export const tokenIns: Token[] = [
  {
    name: "Ether",
    ticker: "ETH",
    address: "aa",
    imageUri: EthLogo
  }
];

export const tokenOuts: Token[] = [
  {
    name: "USDC",
    ticker: "USDC",
    address: "aa",
    imageUri: UsdcLogo
  }
];