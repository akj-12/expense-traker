import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";

const ExpenseList = () => {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  // const transactions = [
  //   {
  //     id: 1,
  //     type: "Income",
  //     category: "income",
  //     amount: "2000",
  //     date: "12-13-1-2019",
  //   },
  //   {
  //     id: 2,
  //     type: "Income",
  //     category: "expense",
  //     amount: "200",
  //     date: "12-13-1-2019",
  //   },
  //   {
  //     id: 2,
  //     type: "Income",
  //     category: "income",
  //     amount: "240",
  //     date: "12-13-1-2019",
  //   },
  // ];
  console.log(transactions);
  return (
    <div className="container">
      <div
        className=" gray scrolling content"
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          maxHeight: "100px",
          // height: "90px",
        }}
      >
        <div className="ui grid ">
          {transactions.map((transaction, index) => (
            <div className="four column row" key={index}>
              <div className=" left floated column ">
                <div className="ui list">
                  <div className="item">
                    <i
                      className={`dollar icon large ${
                        transaction.expenseType === "Income" ? "green" : "red"
                      }`}
                    ></i>
                    <div className="content">
                      <div className="header">{transaction.expenseType}</div>
                      <div className="description">
                        ${transaction.amount} - {transaction.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right floated column">
                <button
                  className="ui circular google plus icon button"
                  onClick={() => {
                    deleteTransaction(transaction.id);
                  }}
                >
                  <i className="trash icon"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
