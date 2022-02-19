import React, { useContext, Fragment, useEffect } from 'react';
import ExpenseContext from '../../context/expenseContext';
import ExpenseItem from './ExpenseItem';
const Expense = () => {
    const expenseContext = useContext(ExpenseContext);
    const {expense, getExpense} = expenseContext;
    useEffect(() => {
        getExpense(expense);
        //eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            {expense.map(exp => (
                <ExpenseItem key={exp._id} expenses={exp}></ExpenseItem>
            ))}
        </Fragment>
    )
}

export default Expense;
