import { useEffect, useState } from "react";
import { Loader } from "../components/loader/Loader";
import { calcTransactionsTotalPoints } from "../services/calculations";
import { formatUsd } from "../services/currency";
import { getTransactions } from "../services/getTransactions";
import { groupBy } from "../utils/groupBy";

export const Scores = () => {
  const [inProgress, setProgressState] = useState(true);
  const [groupData, setGrouppedData] = useState([]);

  useEffect(() => {
    setProgressState(true);

    getTransactions()
      .then((data) => {
        setGrouppedData(Array.from(groupBy(data, (t) => t.user?.uniqueId)));
      })
      .finally(() => {
        setProgressState(false);
      });
  }, []);

  return (
    <>
      <h1>Users points</h1>

      {inProgress ? <Loader /> : null}
      {groupData.map((group) => {
        const [key, transactions] = group;
        return (
          <div key={key} className="user-transactions__card">
            <h2>User ({transactions[0].user?.fullName})</h2>
            <p>Points: {calcTransactionsTotalPoints(transactions)}</p>

            <h4>Transaction history</h4>
            <table>
              <thead>
                <tr>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.uniqueId}>
                    <td>{formatUsd(transaction.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
