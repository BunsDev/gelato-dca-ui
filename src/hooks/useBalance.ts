import { BigNumber } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import useEthereum from './useEthereum'
import { DEFAULT_REFRESH_INTERVAL } from '../constants';
import { getBalance } from '../utils/web3';

export function useBalance(token: string, account: string) {
  const { ethAccount } = useEthereum();
  const [balance, setBalance] = useState(BigNumber.from(0))
  const [isLoading, setIsLoading] = useState(true)
  const [refreshAllowanceCount, setRefreshAllowanceCount] = useState(0)

  const refetchBalance = useCallback(() => {
    setRefreshAllowanceCount(count => count + 1)
  }, [setRefreshAllowanceCount])

  useEffect(() => {
    async function updateBalances() {
      if (!ethAccount || !account || token.length === 0) {
        return;
      }
      
      const balance = await getBalance(token, account, ethAccount);
      
      setIsLoading(false);
      setBalance(balance);
    }
    updateBalances()
    const interval = setInterval(updateBalances, DEFAULT_REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [ethAccount, token, refreshAllowanceCount, account])

  return { balance, isLoading, refetchBalance }
}
