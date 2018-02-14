import React from 'react';
import { connect } from 'react-redux';
import { getFilteredExpense } from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';

export const ExpenseSummary = props => (
  <div>
    <p>
      Total Amount: ₹{props.expensesFilterTotal} | Viewing{' '}
      {props.expensesFilterCount} of {props.expensesCount}{' '}
      {props.expensesCount > 1 ? 'expenses' : 'expense'}
    </p>
  </div>
);

const mapStateProp = state => {
  const filteredExpenses =
    getFilteredExpense(state.expenses, state.filters) || [];

  const filteredExpensesTotal = getExpensesTotal(filteredExpenses);

  return {
    expensesCount: state.expenses.length,
    expensesFilterCount: filteredExpenses.length,
    expensesFilterTotal: filteredExpensesTotal
  };
};

export default connect(mapStateProp)(ExpenseSummary);
