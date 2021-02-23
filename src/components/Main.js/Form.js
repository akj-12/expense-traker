import React, { useState } from "react";
import DropDown from "../dropdown/DropDown";

const Form = () => {
  const type = ["Income", "Expense"];
  const category = ["Business", "Salary"];

  // state for dropdown
  const [expenseType, setExpenseType] = useState(type[0]);
  const [categoryType, setCategoryType] = useState(category[0]);
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
            items={category}
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
          <input type="number" placeholder="Enter amount" />
        </div>
        {/* date */}
        <div className="field">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>

      <div className="fields">
        <div className="field">
          <button
            className="ui primary basic button fluid"
            onClick={(e) => {
              console.log("Button clicked");
            }}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
