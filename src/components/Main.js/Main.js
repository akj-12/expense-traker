import React from "react";
import ExpenseList from "./ExpenseList";
import Form from "./Form";
import useTransactions from "../../useTransactions";

function Main() {
  // const { total } = useTransactions(title);
  return (
    <div className="ui raised segment">
      <div className="ui blue ribbon label">EXPENSE TRACKER</div>
      <div>
        <div className="ui divider"></div>
        <div
          className="ui center aligned grid container"
          style={{ margin: "5px 0px" }}
        >
          <h3 className="ui header">TOTAL EXPENSE : Rs </h3>
          <span className="description  ui center aligned grid">
            <span> Try saying :</span>
            <span>Add Expense for $50 in Category Travel for Thrusday</span>
          </span>
        </div>
        <div className="ui divider"></div>
        <div className="ui container">
          <Form />
        </div>
        <div className="ui divider"></div>
        <div className="ui container">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}

export default Main;
