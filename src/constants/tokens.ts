// import { Token } from "../types";
import MaticLogo from "../assets/matic.png";
import UsdcLogo from "../assets/usdc.png";
import EthLogo from "../assets/eth.png";
import SushiLogo from "../assets/sushi.png";
import ManaLogo from "../assets/mana.png";
import AvaxLogo from "../assets/avax.png";
import CrvLogo from "../assets/crv.png";
import GrtLogo from "../assets/grt.png";
import BctLogo from "../assets/bct.png";
import WbtcLogo from "../assets/wbtc.png";
import LinkLogo from "../assets/link.png";
import AaveLogo from "../assets/aave.png";
import KlimaLogo from "../assets/klima.png";
import UnknownLogo from "../assets/unknown.png";

// export const tokenIns: Token[] = [
//   {
//     id: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
//     name: "Ether",
//     symbol: "ETH",
//     decimals: "18",
//     imageUri: EthLogo
//   }
// ];

// export const tokenOuts: Token[] = [
//   {
//     id: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
//     name: "USDC",
//     symbol: "USDC",
//     decimals: "18",
//     imageUri: UsdcLogo
//   }
// ];

export const MATIC_TOKEN = {
  id: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  name: "MATIC",
  symbol: "MATIC",
  decimals: "18",
  imageUri: MaticLogo
}

// TODO: USE JSON & EXTERNAL ASSET
export const TOKEN_LOGOS: {[key: string]: string} = {
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": MaticLogo,
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE": MaticLogo,
  "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619": EthLogo,
  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": UsdcLogo,
  "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a": SushiLogo,
  "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4": ManaLogo,
  "0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b": AvaxLogo,
  "0x172370d5cd63279efa6d502dab29171933a610af": CrvLogo,
  "0x5fe2b58c013d7601147dcdd68c143a77499f5531": GrtLogo,
  "0x2f800db0fdb5223b3c3f354886d907a671414a7f": BctLogo,
  "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6": WbtcLogo,
  "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39": LinkLogo,
  "0xd6df932a45c0f255f85145f286ea0b292b21c90b": AaveLogo,
  "0x4e78011ce80ee02d2c3e649fb657e45898257815": KlimaLogo,
}

export const TOKEN_LOGO_UNKNOWN = UnknownLogo;