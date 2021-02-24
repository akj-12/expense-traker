import React, { useState } from "react";
import Card from "./components/Cards/Card";

import "./app.css";
import Main from "./components/Main.js/Main";
import DropDown from "./components/dropdown/DropDown";

const App = () => {
  return (
    <div
      className="ui three column grid middle aligned stackable"
      style={{ marginTop: "100px " }}
    >
      <div className="column">
        <Card title="Income" />
      </div>
      <div className="column">
        <Main />
      </div>
      <div className="column">
        <Card title="Expense" />
      </div>
    </div>
  );
};

export default App;
