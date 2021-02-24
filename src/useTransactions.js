import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/Categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionPerType = transactions.filter(
    (t) => t.expenseType === title
  );
  const incomeBalance = transactions
    .filter((t) => t.expenseType === "Income")
    .reduce((acc, currVal) => (acc += currVal.amount), 0);
  const expenseBalance = transactions
    .filter((t) => t.expenseType === "Expense")
    .reduce((acc, currVal) => (acc += currVal.amount), 0);

  const balance = incomeBalance - expenseBalance;

  const total = transactionPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.categoryType);
    if (category) {
      category.amount += t.amount;
    }
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);
  //   console.log(filteredCategories);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { total, chartData, balance };
};

export default useTransactions;
