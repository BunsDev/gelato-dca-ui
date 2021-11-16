import { BigNumber, ContractTransaction, ethers } from 'ethers'
import { useState, useCallback, useEffect } from 'react'
import { DCA_CORE_ADDRESS } from '../constants/address';
import { DCAPosition } from '../types'
import { DCA } from '../types/eth/DCA';
import DCA_ABI from '../constants/abis/DCA.json';
import useEthereum from './useEthereum';

export function useDCA(
  position: DCAPosition | null,
) {
  const { ethAccount } = useEthereum();
  const [dcaCore, setDcaCore] = useState<DCA | null>(null);
  const [minSlippage, setMinSlippage] = useState<BigNumber>();

  useEffect(() => {
    if (!ethAccount) return;
    const core = (new ethers.Contract(DCA_CORE_ADDRESS, DCA_ABI, ethAccount)) as DCA;
    setDcaCore(core);
  }, [ethAccount])

  useEffect(() => {
    if (dcaCore === null) return;
    const fetchMinSlippage = async () => {
      const slippage  = await dcaCore.minSlippage();
      setMinSlippage(slippage)
    }

    fetchMinSlippage();
  }, [dcaCore])

  const createPositionAndDeposit = useCallback(async (
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumber,
    amountDCA: BigNumber,
    intervalDCA: BigNumber,
    maxSlippage?: BigNumber
  ) => {
    if (!dcaCore || !minSlippage || !tokenIn || !tokenOut || amountIn.lte(0) || amountDCA.lte(0) || intervalDCA.lte(60)) return;
    
    if (maxSlippage === undefined) {
      maxSlippage = minSlippage;
    } else {
      if (maxSlippage.lt(minSlippage)) return;
    }
    
    let tx: ContractTransaction;
    try {
      tx = await dcaCore.createPositionAndDeposit(tokenIn, tokenOut, amountIn, amountDCA, intervalDCA, maxSlippage);
    } catch (e) {
      return;
    }

    return tx;
  }, [dcaCore, minSlippage]);

  const deposit = useCallback(async (amount: BigNumber, useETH: boolean) => {
    if (!position || !dcaCore || amount.lte(0)) return;
    
    let tx: ContractTransaction;
    try {
      if (useETH) {
        tx = await dcaCore.depositETH(position.id, { value: amount })
      } else {
        tx = await dcaCore.deposit(position.id, amount)
      }
    } catch (e) {
      return;
    }

    return tx;
  }, [position, dcaCore]);

  const withdrawTokenIn = useCallback(async (amount: BigNumber) => {
    if (!position || !dcaCore || amount.lte(0)) return;
    
    let tx: ContractTransaction;
    try {
      tx = await dcaCore.withdrawTokenIn(position.id, amount)
    } catch (e) {
      return;
    }

    return tx;
  }, [position, dcaCore]);

  const withdrawTokenOut = useCallback(async () => {
    if (!position || !dcaCore) return;

    let tx: ContractTransaction;
    try {
      tx = await dcaCore.withdrawTokenOut(position.id)
    } catch (e) {
      return;
    }

    return tx;
  }, [position, dcaCore]);

  const exit = useCallback(async () => {
    if (!position || !dcaCore) return;

    let tx: ContractTransaction;
    try {
      tx = await dcaCore.exit(position.id)
    } catch (e) {
      return;
    }

    return tx;
  }, [position, dcaCore]);

  return { 
    createPositionAndDeposit,  
    deposit,
    withdrawTokenIn,
    withdrawTokenOut,
    exit
  }
}