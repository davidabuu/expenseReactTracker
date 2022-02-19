import { AUTH_ERROR, CLEAR_ERRORS, LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../types"



export default (state, action) => {
    switch(action.type){
    case LOAD_USER:
        return{
            ...state,
            isAuthenticated: true,      
            loading: false,
            user: action.payload
        }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        return{
            ...state,
        isAuthenticated: true,      
            ...action.payload,
            loading: false
        };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
        localStorage.removeItem('token')
        return{
            ...state,
            isAuthenticated: false,
            loading: false,
            token: null,
            user:null,
            error: action.payload
        }
    case CLEAR_ERRORS:
        return{
            ...state,
            error: null
        }
        default:
           return state
    }
}