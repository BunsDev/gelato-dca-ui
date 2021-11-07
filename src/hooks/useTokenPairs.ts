import { useState, useCallback, useEffect } from 'react'
import { DEFAULT_REFRESH_INTERVAL } from '../constants'
import { TokenPair } from '../types'
import { getTokenPairs } from '../utils/graph'

export function useTokenPairs(): { tokenPairs: TokenPair[]; refetch: Function; isLoading: boolean } {
  const [tokenPairs, setTokenPairs] = useState<TokenPair[]>([])

  const [refreshCount, setRefreshCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const refetch = useCallback(() => {
    setRefreshCount(count => count + 1)
  }, [setRefreshCount])

  useEffect(() => {
    async function updateTokenPairs() {
      const pairs = await getTokenPairs()
      setIsLoading(false)
      if (pairs === null) return
      setTokenPairs(pairs)
    }
    updateTokenPairs()
    const interval = setInterval(updateTokenPairs, DEFAULT_REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [refreshCount])

  return { tokenPairs, isLoading, refetch }
}