import React from "react";
import { Doughnut } from "react-chartjs-2";

const Card = ({ title }) => {
  const colorRibbon = title === "INCOME" ? "green" : "red";
  return (
    <div className="ui raised segment">
      <div className={`ui ${colorRibbon} ribbon label`}>
        <strong>{title}</strong>
      </div>
      <div className="ui card fluid ">
        <div className="content">
          <div className="header massive">Rs. 1600</div>
          <div className="ui divider"></div>
        </div>
        <div className="image">
          {/* <Doughnut data="" /> */}
          <img src="https://pixabay.com/get/gbd22df6fb514b52fc7fe9992f43fcfb3be162d62a1ee33208122d56660f4df5502d54a5096f7d322624a66aec2a2dd732efbcf7100716d3739eed57b6d3a47d2_640.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Card;
