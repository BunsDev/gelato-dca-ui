import { BigNumber, ContractTransaction, ethers } from 'ethers'
import ERC20_ABI from "../constants/abis/ERC20.json";
import { ERC20 } from '../types/eth';

export const getERC20Contract = (address: string, signerOrProvider?: ethers.Signer | ethers.providers.Provider): ERC20 => {
  return (new ethers.Contract(address, ERC20_ABI, signerOrProvider)) as ERC20;
};

export const getBalance = async (
  tokenAddress: string, 
  userAddress: string, 
  signerOrProvider?: ethers.Signer | ethers.providers.Provider
): Promise<BigNumber> => {
  const erc20 = getERC20Contract(tokenAddress, signerOrProvider);
  const balance = await erc20.balanceOf(userAddress);
  return balance;
};

export const getAllowance = async (
  tokenAddress: string, 
  ownerAddress: string, 
  spenderAddress: string, 
  signerOrProvider?: ethers.Signer | ethers.providers.Provider
): Promise<BigNumber> => {
  const erc20 = getERC20Contract(tokenAddress, signerOrProvider);
  const allowance = await erc20.allowance(ownerAddress, spenderAddress);
  return allowance;
};


export const approve = async (
  tokenAddress: string, 
  spenderAddress: string, 
  amount: BigNumber,
  signerOrProvider?: ethers.Signer | ethers.providers.Provider
): Promise<ContractTransaction> => {
  const erc20 = getERC20Contract(tokenAddress, signerOrProvider);
  const tx = await erc20.approve(spenderAddress, amount);
  return tx;
};