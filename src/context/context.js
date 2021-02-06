import React, { createContext, useReducer } from "react";

const initializeState = [];

export const ExpenseTrackerContext = createContext(initializeState);
export const Provider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ExpenseTrackerContext.Provider value={{ appName: "Expense Tracker" }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
