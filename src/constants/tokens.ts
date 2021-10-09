import { Token } from "../types";
import UsdcLogo from "../assets/usdc.png";
import EthLogo from "../assets/eth.png";

export const tokenIns: Token[] = [
  {
    name: "Ether",
    ticker: "ETH",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    imageUri: EthLogo
  }
];

export const tokenOuts: Token[] = [
  {
    name: "USDC",
    ticker: "USDC",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    imageUri: UsdcLogo
  }
];