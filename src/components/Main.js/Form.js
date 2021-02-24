import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ExpenseTrackerContext } from "../../context/context";
import DropDown from "../dropdown/DropDown";
import {
  incomeCategories,
  expenseCategories,
} from "../../constants/Categories";

const Form = () => {
  const type = [{ type: "Income" }, { type: "Expense" }];
  // const category = ["Business", "Salary"];

  // state for dropdown
  const [expenseType, setExpenseType] = useState(type[0].type);
  const selectedCategories =
    expenseType === "Income" ? incomeCategories : expenseCategories;

  const [categoryType, setCategoryType] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date("yyyy-MM-dd").toLocaleString());
  const { addTransaction } = useContext(ExpenseTrackerContext);

  // handler
  const onChangeAmountHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  const onChangeDateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const createTransaction = () => {
    const transaction = {
      expenseType,
      categoryType,
      amount: Number(amount),
      date,
      id: uuidv4(),
    };

    addTransaction(transaction);
    // setInitialState remains 1:12:55
  };
  return (
    <div className="ui form equal width">
      <div className="fields">
        {/* Type */}
        <div className="field">
          <DropDown
            items={type}
            selectedItem={expenseType}
            onChangeSelectedItem={setExpenseType}
            selectedTitle="Type"
          />
        </div>
        {/* Category */}
        <div className="field">
          <DropDown
            items={selectedCategories}
            selectedItem={categoryType}
            onChangeSelectedItem={setCategoryType}
            selectedTitle="Category"
          />
        </div>
      </div>
      <div className="fields">
        {/* amount */}
        <div className="field">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => onChangeAmountHandler(e)}
          />
        </div>
        {/* date */}
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => onChangeDateHandler(e)}
            value={date}
          />
        </div>
      </div>

      <div className="fields">
        <div className="field">
          <button
            className="ui primary basic button fluid"
            onClick={createTransaction}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
