import React, { useContext } from 'react';
import ExpenseContext from './context/expenseContext';
const IncomeAndExpense = () => {
    const expenseContext = useContext(ExpenseContext)
    const {expense} = expenseContext;
    const amount = expense.map(transaction => transaction.amount)
    const incomeExpense = amount.filter(trans => trans > 0)
    .reduce((acc, curr) => (acc += curr),0).toFixed(2)
    const expenseExpense = amount.filter(trans => trans < 0)
    .reduce((acc, curr) => (acc += curr),0).toFixed(2)
    return (
        <div className='expense-container'>
            <div className='income'>
                <h1>INCOME</h1>
                <h1 className='money-income'>${incomeExpense}</h1>
            </div>
            <div className='expense'>
                <h1>EXPENSE</h1>
                <h1 className='money-expense'>${Math.abs(expenseExpense)}</h1>
            </div>
        </div>
    )
};

export default IncomeAndExpense;
