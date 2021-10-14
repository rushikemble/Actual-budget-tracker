import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";
import "./SecondList.css";

function DonutChart() {
  const { transactions } = useContext(ExpenseTrackerContext);
  const [categoryType, setCategoryType] = useState("Income");

  const filteredCategory = transactions.filter(
    (transaction) => transaction.type === categoryType
  );

  const setdata = (filteredData) => {
    const labelData = [];
    const categorydata = [];
    filteredData.forEach((t) => {
      labelData.push(t.category);
      categorydata.push(t.amount);
    });
    return [labelData, categorydata];
  };

  const setfunData = setdata(filteredCategory);
  const labelFinalData = setfunData[0];
  const categoryFinalData = setfunData[1];

  const data = {
    labels: labelFinalData,
    datasets: [
      {
        label: "My First Dataset",
        data: categoryFinalData,
        backgroundColor: [
          "#d45087",
          "#f95d6a",
          "#ff7c43",
          "#ffa600",
          "#003f5c",
          "#2f4b7c",
          "#665191",
          "#a05195",
        ],
        hoverOffset: 4,
      },
    ],
  };

  //   console.log(categoryType);
  return (
    <div className="category-stats-container">
      <div className="category-select-form">
        <h4>Sort by: </h4>
        <select
          name="category-stats"
          id="category-stats"
          onChange={(e) => setCategoryType(e.target.value)}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <div className="category-stats-donut-container">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default DonutChart;
