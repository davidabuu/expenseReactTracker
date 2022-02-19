import { useReducer } from "react";
import AuthContext from './authContext';
import axios from 'axios';
import authReducer from './authReducer';
import {
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOAD_USER,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../types';
import setAuthToken from "../../../utils/setAuthToken";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);
    //Load User
    const loadUser = async () => {
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
        try {
            const res = await axios.get('/api/auth')
            dispatch({type: LOAD_USER, payload: res.data})
        } catch (error) {
            dispatch({type: AUTH_ERROR})
        }
    }
    //Register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config)
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            loadUser();
        } catch (error) {
            dispatch({type: REGISTER_FAIL, payload: error.response.data.msg})
        }

    }
    //Login User
    const login = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/auth', formData, config)
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
        console.log(res.data)
        loadUser();
        } catch (error) {
            dispatch({type:LOGIN_FAIL, payload: error.response.data.msg})
        }
    }
       //Clear Errors
       const clearErrors = () => {
        dispatch({type: CLEAR_ERRORS})
    }
    //Log Out
    const logout = () => {
        dispatch({type: LOGOUT})
    }
    //Wrap the entire application within the provider
    return  (
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            register,
           clearErrors,
            loadUser,
            login,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthState;