import React, { useContext } from 'react';
import ExpenseContext from './context/expenseContext';
const ExpenseAmount = () => {
    const expenseContext = useContext(ExpenseContext)
    const {expense} = expenseContext;
    const amount = expense.map(transaction => transaction.amount);
    const totalAmount = amount.reduce((acc, curr)=> (acc += curr), 0).toFixed(2)
    return (
        <div style={inlineStyle}>
            <h1>Your Expenses</h1>
            <h2 style={{marginTop: '20px', fontSize: '30px'}}>Total Balance: <span>{totalAmount}</span></h2>
        </div>
    )
}
//Functional Style
const inlineStyle = {
    marginTop: '40px'
}

export default ExpenseAmount;
