import React, { useContext, useEffect, useState } from 'react';
import ALert from './alert/ALert';
import ExpenseContext from './context/expenseContext';
const TransactionForm = () => {
    //We need the context to get access to some functions
    const expenseContext = useContext(ExpenseContext);
    //Get the method
    const {addExpense, current, clearCurrent, updateExpense} = expenseContext;
    useEffect(() => {
        if(current !== null){
            setExpense(current)
        }else{
            setExpense({
                text: '',
                amount: '',
                showAlert: null
            })
        }
    }, [expenseContext, current])
    const [expense, setExpense]  = useState({
        text: '',
        amount: '',
        showAlert: null
    });
    let {text, amount, showAlert} = expense;
    const amountNumber = amount;
    expense.amount = amountNumber;
    const onChange = (e) => {
        setExpense({...expense, [e.target.name]: [e.target.value]});
    }
    //Check if fields is empty
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '' || amount === '' ){
            setExpense({...expense, showAlert: !null})
        }
        else if (current === null){
            const newTransaction = {
                text: text,
                amount: +amountNumber
            }
            addExpense(newTransaction)
        }else{
            updateExpense({
                text: expense.text,
                amount: +expense.amount
            })
        }
    };
    const clearAll = () => {
        clearCurrent()
    }
    return (
        <form onSubmit={onSubmit}>
            <h2 style={{marginTop: '15px'}}>{current ? 'Edit Transaction': 'Add a new Transaction'}</h2>
            <ALert showAlert={showAlert}></ALert>
            <div className='form-control'>
                <label htmlFor="">Text</label>
                <br/>
                <input onChange={onChange} type="text" placeholder='Enter a Text' name='text' value={text}/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Amount</label>
                <p>(negative - expense, positve - income)</p>
                <input type="text" placeholder='Enter an Amount' name='amount' value={amount} onChange={onChange}/>
            </div>
            <div>
                <input type="submit" value={current ? 'Update Transaction': 'Add a new Transaction'} className='transaction-btn'/>
            </div>
            {current && (
                  <div>
                  <input type="submit" value='CLEAR'className='transaction-btn'  onClick={clearAll}/>
              </div>
            )}
        </form>
    )
}

export default TransactionForm;
