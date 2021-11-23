
import { GRAPH_URL } from "../constants"
import { DCAPosition, TokenPair } from "../types"

export async function getPositions(
  account: string,
  errorCallback: Function = () => {},
): Promise<DCAPosition[] | null> {
  const query = `
  {
    positions(
      where: {owner: "${account}"}, 
      orderDirection: desc,
      orderBy: id
    ) {
      id
      tokenIn {
        id
        symbol
        name
        decimals
      }
      tokenOut {
        id
        symbol
        name
        decimals
      }
      balanceIn
      balanceOut
      totalIn
      totalOut
      amountDCA
      intervalDCA
      lastDCA
      maxSlippage
      owner
    }
  }`
  try {
    const response = await postQuery(GRAPH_URL, query)
    return response.data.positions
  } catch (error) {
    errorCallback(error)
    return null
  }
}

export async function getPosition(
  positionId: string,
  errorCallback: Function = () => {},
): Promise<DCAPosition | null> {
  const query = `
  {
    position(id: "${positionId}") {
      id
      tokenIn {
        id
        symbol
        name
        decimals
      }
      tokenOut {
        id
        symbol
        name
        decimals
      }
      balanceIn
      balanceOut
      totalIn
      totalOut
      amountDCA
      intervalDCA
      lastDCA
      maxSlippage
      transactions {
        id
        hash
        action
        timestamp
        amountIn
        amountOut
      }
      owner
    }
  }`
  try {
    const response = await postQuery(GRAPH_URL, query)
    return response.data.position
  } catch (error) {
    errorCallback(error)
    return null
  }
}

export async function getTokenPairs(
  errorCallback: Function = () => {},
): Promise<TokenPair[] | null> {
  const query = `
  {
    tokenPairs(
      where: {allowed: true}
    ) {
      id
      token1 {
        id
        symbol
        name
        decimals
      }
      token2 {
        id
        symbol
        name
        decimals
      }
      allowed
    }
  }`
  try {
    const response = await postQuery(GRAPH_URL, query)
    return response.data.tokenPairs
  } catch (error) {
    errorCallback(error)
    return null
  }
}

const postQuery = async (endpoint: string, query: string) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  }
  const url = endpoint
  const response = await fetch(url, options)
  const data = await response.json()
  if (data.errors) {
    throw new Error(data.errors[0].message)
  } else {
    return data
  }
}
