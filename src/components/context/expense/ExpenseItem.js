import React, { useContext } from 'react';
import ExpenseContext from '../expenseContext';
const ExpenseItem = ({expenses}) => {
    const {text, amount, id} = expenses;
    const expenseContext = useContext(ExpenseContext);
    const {deleteExpense, clearCurrent, setCurrent} = expenseContext;
    const onDelete = () => {
        deleteExpense(id)
        clearCurrent()
    }
    return (
        <div>
            <div style={{fontSize: '20px'}} className='each-expense'>
                {text}<span style={{float: 'right'}}>Price:{`$${amount}`}</span>
                <div>
                    <input type="button" value="Edit" className='edit-btn' onClick={() => setCurrent(expenses)}/>
                </div>
                <div>
                    <input type="button" value="Delete" className='delete-btn' onClick={onDelete}/>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;
