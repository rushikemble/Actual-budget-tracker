import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
// import lossImg from "../graphLoss.png";
// import profitImg from "../graphProfit.png";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./Constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);

  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  return { filteredCategories, total };
};

export default useTransactions;
