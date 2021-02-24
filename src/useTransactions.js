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
  const total = transactionPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  console.log(total);
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  //   console.log(transactions, total, categories);
  //   console.log(transactionPerType);
  transactionPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.categoryType);
    // console.log(category);
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

  //   console.log(chartData);
  return { total, chartData };
};

export default useTransactions;
