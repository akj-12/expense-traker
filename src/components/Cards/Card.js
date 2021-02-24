import React from "react";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";

const Card = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  const colorRibbon = title === "Income" ? "green" : "red";
  return (
    <div className="ui raised segment">
      <div className={`ui ${colorRibbon} ribbon label`}>
        <strong>{title}</strong>
      </div>
      <div className="ui card fluid ">
        <div className="content">
          <div className="header massive">Rs. {total}</div>
          <div className="ui divider"></div>
        </div>
        <div className="image">
          <Doughnut data={chartData} />
          {/* <img src={process.env.PUBLIC_URL + "chart.png"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
