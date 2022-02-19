import{
    ADD_EXPENSE,
    SORT_EXPENSE_BY_PRICE,
    FILTER_EXPESNE,
    DELETE_EXPENSE,
    UPDATE_EXPENSE,
    INCOME_EXPENSE,
    SET_CURRENT,
    CLEAR_CURRENT,
    EXPENSE_ERROR,
    GET_EXPENSE,
    } from './types';

export default(state, action) => {
    switch(action.type){
        case GET_EXPENSE:
            return{
                ...state,
                expense: action.payload,
                loading: false
            }
        case ADD_EXPENSE:
            return{
                ...state,
                expense: [...state.expense, action.payload],
                loading: false
            }
        case DELETE_EXPENSE:
            return{
                ...state,
                expense: state.expense.filter(exp => exp._id !== action.payload),
                loading: false
            }
        case UPDATE_EXPENSE:
            return{
                ...state,
                expense: state.expense.map(exp => exp.id === action.payload.id ? action.payload: exp),
                loading: false
            }
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
            }
        case EXPENSE_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}