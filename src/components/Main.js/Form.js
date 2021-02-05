import React from "react";

const Form = () => {
  return (
    <div className="ui form equal width">
      <div className="fields">
        {/* Type */}
        <div className="field">
          <label htmlFor="type">Type</label>
          <select className="ui dropdown">
            <option value="">Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>
        {/* Category */}
        <div className="field">
          <label htmlFor="type">Category</label>
          <select className="ui dropdown">
            <option value="">Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
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
          <button className="ui primary button fluid">CREATE</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
