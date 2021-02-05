import React from "react";

const ExpenseList = () => {
  return (
    <div className="container">
      <div
        className=" gray scrolling content"
        style={{
          overflowY: "scroll",
          whiteSpace: "nowrap",
          maxHeight: "100px",
        }}
      >
        <div className="ui grid ">
          <div className="four column row">
            <div className=" left floated column ">
              <div className="ui list">
                <div className="item">
                  <i className="dollar icon green"></i>
                  <div className="content">
                    <div className="header">Deposits</div>
                    <div className="description">$100 - 20-3-18</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right floated column">
              <button className="ui circular google plus icon button">
                <i className="trash icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
