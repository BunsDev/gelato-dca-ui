import { Token } from "../types";
import MaticLogo from "../assets/matic.png";
import UsdcLogo from "../assets/usdc.png";
import EthLogo from "../assets/eth.png";

export const tokenIns: Token[] = [
  {
    id: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    name: "Ether",
    symbol: "ETH",
    decimals: "18",
    imageUri: EthLogo
  }
];

export const tokenOuts: Token[] = [
  {
    id: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    name: "USDC",
    symbol: "USDC",
    decimals: "18",
    imageUri: UsdcLogo
  }
];

export const tokenLogos: {[key: string]: string} = {
  "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619": EthLogo,
  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": UsdcLogo,
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": MaticLogo,
}