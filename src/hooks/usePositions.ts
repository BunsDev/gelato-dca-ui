import { useState, useCallback, useEffect } from 'react'
import { DEFAULT_REFRESH_INTERVAL } from '../constants'
import { DCAPosition } from '../types'
import { getPositions } from '../utils/graph'

export function usePositions(
  account: string,
): { positions: DCAPosition[]; refetch: Function; isLoading: boolean } {
  const [positions, setPositions] = useState<DCAPosition[]>([])

  const [refreshCount, setRefreshCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const refetch = useCallback(() => {
    setRefreshCount(count => count + 1)
  }, [setRefreshCount])

  useEffect(() => {
    async function updatePositions() {
      const positions = await getPositions(account)
      setIsLoading(false)
      if (positions === null) return
      setPositions(positions)
    }
    updatePositions()
    const interval = setInterval(updatePositions, DEFAULT_REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [account, refreshCount])

  return { positions, isLoading, refetch }
}