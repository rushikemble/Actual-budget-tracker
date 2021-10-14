import React, { useContext, useEffect, useState } from "react";
import "./Form.css";
import { ExpenseTrackerContext } from "../context/context";
import { v4 as uuidv4 } from "uuid";
import { incomeCategories, expenseCategories } from "../Constants/categories";
import formatDate from "../utils/formatDate";
import { useSpeechContext } from "@speechly/react-client";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

function Form() {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext();
  const submitForm = (event) => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-"))
      return;
    const transactions = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    // event.preventDefault();
    addTransaction(transactions);

    setFormData(initialState);
    event.preventDefault();
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return submitForm();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value
          .slice(1)
          .toLowerCase()}`;

        switch (e.type) {
          case "amount":
            setFormData({ ...formData, amount: e.value });
            break;
          case "category":
            if (incomeCategories.map((ic) => ic.type).includes(category)) {
              setFormData({ ...formData, type: "Income", category });
            } else if (
              expenseCategories.map((ec) => ec.type).includes(category)
            ) {
              setFormData({ ...formData, type: "Expense", category });
            }
            break;
          case "date":
            setFormData({ ...formData, date: e.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type &&
        formData.date
      ) {
        submitForm();
      }
    }
  }, [segment]);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <div className="form_container">
      <div className="form_wrapper">
        <form onSubmit={submitForm}>
          <div className="submitButton_wrapper">
            <h1>Add Transaction</h1>
            <button type="submit">+</button>
          </div>
          <div className="forminput_wrapper">
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {selectedCategories.map((c) => (
                <option key={c.type} value={c.type}>
                  {c.type}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Amount"
              name="amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />

            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: formatDate(e.target.value) })
              }
            />
          </div>
        </form>
      </div>
      <div className="speech_wrapper">
        <h3>{segment && segment.words.map((w) => w.value).join(" ")}</h3>
      </div>
    </div>
  );
}

export default Form;
