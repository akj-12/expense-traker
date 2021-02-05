import React from "react";
import Card from "./components/Cards/Card";

import "./app.css";
import Main from "./components/Main.js/Main";

const App = () => {
  return (
    <div
      className="ui three column grid middle aligned stackable"
      style={{ marginTop: "100px " }}
    >
      <div className="column">
        <Card title="INCOME" />
      </div>
      <div className="column">
        <Main />
      </div>
      <div className="column">
        <Card title="EXPENSE" />
      </div>
    </div>
  );
};

export default App;
