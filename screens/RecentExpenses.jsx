import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import { useSelector, useDispatch } from "react-redux";
import { getDateMinusDays } from "../util/date";
import { useEffect, useState } from "react";
import { fetchExpenses } from "../util/http";
import { setExpenses } from "../store/expenses";

function RecentExpenses() {
  const { expenses } = useSelector((state) => state.expenses);
  const dispatch = useDispatch()

  useEffect(() => {
    async function getExpenses(){
      const expenses = await fetchExpenses()
      dispatch(setExpenses(expenses))
    }
    getExpenses()
  }, [])

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
