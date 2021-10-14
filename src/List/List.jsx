import React, { useContext } from "react";
import "./List.css";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../context/context";

function List() {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  console.log(transactions);
  const classes = useStyles();

  let subNetValue = function (items, prop, type) {
    var incomeValue = 0;
    var expenseValue = 0;
    items.forEach((b) => {
      if (b[type] === "Income") {
        incomeValue += b[prop];
      } else if (b[type] === "Expense") {
        expenseValue += b[prop];
      }
    });
    return incomeValue - expenseValue;
  };

  let netValue = subNetValue(transactions, "amount", "type");

  return (
    <div className="list_container">
      <div className="heading_wrapper">
        <h1>Net</h1>
        <h3>${netValue}</h3>
      </div>

      <div className="list_wrapper">
        <MUIList dense={false}>
          {transactions.map((transaction) => (
            <Slide
              direction="down"
              in
              mountOnEnter
              unmountOnExit
              key={transaction.id}
            >
              <ListItem style={{ marginBottom: "10px" }}>
                <ListItemAvatar>
                  <Avatar
                    className={
                      transaction.type === "Income"
                        ? classes.avatarIncome
                        : classes.avatarExpense
                    }
                  >
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={transaction.category}
                  secondary={`$${transaction.amount} - ${transaction.date}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          ))}
        </MUIList>
      </div>
    </div>
  );
}

export default List;
