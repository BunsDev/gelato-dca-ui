import { BigNumber, ethers } from 'ethers'
import { useState, useCallback, useEffect } from 'react'
import { DCA_CORE_ADDRESS } from '../constants/address';
import { DCAPosition } from '../types'
import { DCA } from '../types/eth/DCA';
import DCA_ABI from '../constants/abis/DCA.json';
import useEthereum from './useEthereum';

export function useDCA(
  position?: DCAPosition,
) {
  const { ethAccount } = useEthereum();
  const [isLoading, setIsLoading] = useState(false);
  const [dcaCore, setDcaCore] = useState<DCA>();
  const [minSlippage, setMinSlippage] = useState<BigNumber>();

  useEffect(() => {
    const fetchMinSlippage = async () => {
      const slippage  = await core.minSlippage();
      setMinSlippage(slippage)
    }

    const core = (new ethers.Contract(DCA_CORE_ADDRESS, DCA_ABI, ethAccount)) as DCA;
    setDcaCore(core);
    fetchMinSlippage();
  }, [ethAccount])

  const createPositionAndDeposit = useCallback(async (
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumber,
    amountDCA: BigNumber,
    intervalDCA: BigNumber,
    maxSlippage: BigNumber
  ) => {
    if (!dcaCore || !minSlippage || !tokenIn || !tokenOut || amountIn.lte(0) || amountDCA.lte(0) || intervalDCA.lte(60)) return;

    if (maxSlippage === null) {
      maxSlippage = minSlippage;
    } else {
      if (maxSlippage.lt(minSlippage)) return;
    }

    setIsLoading(true);
    try {
      const tx = await dcaCore.createPositionAndDeposit(tokenIn, tokenOut, amountIn, amountDCA, intervalDCA, maxSlippage);
      await tx.wait()
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [dcaCore, minSlippage]);

  const deposit = useCallback(async (amount: BigNumber,  useETH: boolean) => {
    if (!position || !dcaCore || amount.lte(0)) return;

    setIsLoading(true);
    try {
      if (useETH) {
        const tx = await dcaCore.deposit(position.id, amount)
        await tx.wait()
      } else {
        const tx = await dcaCore.depositETH(position.id, { value: amount })
        await tx.wait()
      }
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
    
  }, [position, dcaCore]);

  const withdrawTokenIn = useCallback(async (amount: BigNumber) => {
    if (!position || !dcaCore || amount.lte(0)) return;
    
    setIsLoading(true);
    try {
      const tx = await dcaCore.withdrawTokenIn(position.id, amount)
      await tx.wait()
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [position, dcaCore]);

  const withdrawTokenOut = useCallback(async () => {
    if (!position || !dcaCore) return;

    try {
      const tx = await dcaCore.withdrawTokenOut(position.id)
      await tx.wait()
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
    
  }, [position, dcaCore]);

  const exit = useCallback(async () => {
    if (!position || !dcaCore) return;

    try {
      const tx = await dcaCore.exit(position.id)
      await tx.wait()
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
    
  }, [position, dcaCore]);

  return { 
    createPositionAndDeposit,  
    deposit,
    withdrawTokenIn,
    withdrawTokenOut,
    exit,
    isLoading 
  }
}