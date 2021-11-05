import React from "react";
import { WEB3_DATA_TYPE } from "../../../../constants";
import { Transaction, Action, DCAPosition } from "../../../../types";
import { formatDurationHumanize, formatToFixed, getEtherscanUrl } from "../../../../utils/misc";

interface TableTransactionsProps {
    transactions: Transaction[],
    position: DCAPosition
}

const TableTransactions: React.FC<TableTransactionsProps> = ({ transactions, position }) => {
    const now = Math.floor(Date.now() / 1000)

    const description = (transaction: Transaction) => {
      // TODO: REFACTOR
      const {tokenIn, tokenOut} = position;
      if (transaction.action === Action.CREATE_POSITION) {
        return `Open position`
      } else if (transaction.action === Action.UPDATE_POSITION) {
        return `Update position`
      } else if (transaction.action === Action.DEPOSIT) {
        return `Add ${formatToFixed(transaction.amountIn, tokenIn.decimals)} ${tokenIn.symbol}`
      } else if (transaction.action === Action.WITHDRAW_TOKEN_IN) {
        return `Withdraw ${formatToFixed(transaction.amountIn, tokenIn.decimals)} ${tokenIn.symbol}`
      } else if (transaction.action === Action.WITHDRAW_TOKEN_OUT) {
        return `Claim ${formatToFixed(transaction.amountOut, tokenOut.decimals)} ${tokenOut.symbol}`
      } else if (transaction.action === Action.EXECUTE_DCA) {
        return `DCA ${formatToFixed(transaction.amountOut, tokenOut.decimals)} ${tokenOut.symbol} 
        with ${formatToFixed(transaction.amountIn, tokenIn.decimals)} ${tokenIn.symbol}`
      }
    }
    
    const time = (timestamp: string) => {
      return formatDurationHumanize(now - parseInt(timestamp));
    }

    const txHash = (hash: string) => {
      return hash.substring(0, 10) + "..." + hash.substring(hash.length-4, hash.length)
    }

    return (
      <>
        <table className="table-auto w-full mt-3">
          <thead>
            <tr>
              <th className="text-left">Action</th>
              <th className="text-right">Time</th>
              <th className="text-right">Tx Hash</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => {
              return (
                <tr key={tx.id}>
                  <td>{description(tx)}</td>
                  <td className="text-right">{time(tx.timestamp)} ago</td>
                  <td className="text-right">
                    <a href={getEtherscanUrl(tx.hash, WEB3_DATA_TYPE.Tx)} className="underline" target="_blank" rel="noreferrer">
                      {txHash(tx.hash)}↗
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
};
 
export default TableTransactions;
