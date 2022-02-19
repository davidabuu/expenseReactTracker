import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer';
import{
ADD_EXPENSE,
SORT_EXPENSE_BY_PRICE,
FILTER_EXPESNE,
SET_CURRENT,
CLEAR_CURRENT,
DELETE_EXPENSE,
UPDATE_EXPENSE,
EXPENSE_ERROR,
GET_EXPENSE,
} from './types';

const ExpenseState = props => {
    const initialState = {
        expense: [
        ],
        current: null,
        error: null
    }
    //To dispatch some actions with types
    const [state, dispatch] = useReducer(expenseReducer, initialState);
    // GET EXPESNE
    const getExpense = async (expense) => {
        try {
            const res = await axios.get('/api/user-expenses')
            dispatch({type: GET_EXPENSE, payload: expense})
        } catch (error) {
            dispatch({type: EXPENSE_ERROR, payload: error})
        }
    }
    // ADD EXPENSE
    const addExpense = async (expense) => {
        // Headers since we are sending data
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/user-expenses', expense, config)
            dispatch({type: ADD_EXPENSE, payload: expense})
            console.log(res.data)
        } catch (error) {
            dispatch({type: EXPENSE_ERROR, payload: error.response.msg})
        }
    }
    //DELETE EXPENSE
    const deleteExpense = id => {
        dispatch({type: DELETE_EXPENSE, payload: id})
    }
    //UPDATE EXPENSE TEXT
    const updateExpense = expense => {
        dispatch({type: UPDATE_EXPENSE, payload: expense})
    }
    //SET CURRENT
    const setCurrent = (expense) => {
        dispatch({type:SET_CURRENT, payload: expense})
    }
    //CLEAR CURRENT
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }
    //FILTER EXPENSE
    //SORT BY PRICE


    return <ExpenseContext.Provider
    value={{
        expense:state.expense,
        current: state.current,
        error: state.error,
        getExpense,
        addExpense,
        updateExpense,
        deleteExpense,
        setCurrent,
        clearCurrent
    }}>
        {props.children}
    </ExpenseContext.Provider>
}

export default ExpenseState;