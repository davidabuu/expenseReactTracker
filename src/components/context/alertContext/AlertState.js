import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CLEAR_ALERT, SET_ALERT } from '../types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
const AlertState = props => {
    const initialState = []
    //To dispatch some actions with types
    const [state, dispatch] = useReducer(alertReducer, initialState);

    //SET ALERT
    const setAlert = (msg, type) => {
        const id = uuidv4();
        dispatch({type: SET_ALERT, payload: {msg, type, id}})

        setTimeout(() => {
            dispatch({type: CLEAR_ALERT, payload: id})
        }, 3000)
    }

    return <AlertContext.Provider
    value={{
        alerts: state,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;