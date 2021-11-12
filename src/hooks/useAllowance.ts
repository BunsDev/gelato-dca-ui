import { BigNumber, constants } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import useEthereum from './useEthereum'
import { DEFAULT_REFRESH_INTERVAL } from '../constants';
import { approve as erc20Approve, getAllowance } from '../utils/web3';

export function useAllowance(token: string, spender: string) {
  const { accountAddress, ethAccount, injectedProvider } = useEthereum();
  const [allowance, setAllowance] = useState(BigNumber.from(0))
  const [allowanceIsLoading, setAllowanceIsLoading] = useState(true)
  const [refreshAllowanceCount, setRefreshAllowanceCount] = useState(0)
  const [approveIsLoading, setApproveIsLoading] = useState(false)

  const approve = useCallback(
    async (amount?: BigNumber) => {
      if (!ethAccount || !injectedProvider || !spender || !token) {
        return;
      }

      const approveAmount = amount ? amount : constants.MaxUint256;
    
      setApproveIsLoading(true);
      try {
        const tx = await erc20Approve(token, spender, approveAmount);
        await tx.wait();
        setApproveIsLoading(false);
      } catch (e) {
        setApproveIsLoading(false);
        return false;
      }
    },
    [ethAccount, injectedProvider, spender, token],
  )

  const refetchAllowance = useCallback(() => {
    setRefreshAllowanceCount(count => count + 1)
  }, [setRefreshAllowanceCount])

  useEffect(() => {
    async function updateBalances() {
      if (!ethAccount || !accountAddress) {
        return;
      }
      
      const allowance = await getAllowance(token, accountAddress, spender, ethAccount);
      
      setAllowanceIsLoading(false);
      setAllowance(allowance);
    }
    updateBalances()
    const interval = setInterval(updateBalances, DEFAULT_REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [ethAccount, token, accountAddress, refreshAllowanceCount, spender])

  return { approve, approveIsLoading, allowance, allowanceIsLoading, refetchAllowance }
}
