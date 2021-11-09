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

  useEffect(() => {
    const core = (new ethers.Contract(DCA_CORE_ADDRESS, DCA_ABI, ethAccount)) as DCA;
    setDcaCore(core);
  }, [ethAccount])

  const createPositionAndDeposit = useCallback(async (
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumber,
    amountDCA: BigNumber,
    intervalDCA: BigNumber,
    maxSlippage: BigNumber
  ) => {
    if (!position || !dcaCore) return;

    // TODO: validation

    setIsLoading(true);
    try {
      const tx = await dcaCore.createPositionAndDeposit(tokenIn, tokenOut, amountIn, amountDCA, intervalDCA, maxSlippage);
      await tx.wait()
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [position, dcaCore]);

  const deposit = useCallback(async (positionId: BigNumber, amount: BigNumber,  useETH: boolean) => {
    if (!position || !dcaCore) return;

    setIsLoading(true);
    try {
      if (useETH) {
        const tx = await dcaCore.deposit(positionId, amount)
        await tx.wait()
      } else {
        const tx = await dcaCore.depositETH(positionId, { value: amount })
        await tx.wait()
      }
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
    
  }, [position, dcaCore]);

  const withdrawTokenIn = useCallback(async (positionId: BigNumber, amount: BigNumber) => {
    if (!position || !dcaCore) return;
    
    setIsLoading(true);
    try {
      const tx = await dcaCore.withdrawTokenIn(positionId, amount)
      await tx.wait()
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [position, dcaCore]);

  const withdrawTokenOut = useCallback(async (positionId: BigNumber) => {
    if (!position || !dcaCore) return;

    try {
      const tx = await dcaCore.withdrawTokenOut(positionId)
      await tx.wait()
    } catch (e) {
      return false;
    } finally {
      setIsLoading(false);
    }
    
  }, [position, dcaCore]);

  const exit = useCallback(async (positionId: BigNumber) => {
    if (!position || !dcaCore) return;

    try {
      const tx = await dcaCore.exit(positionId)
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