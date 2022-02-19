import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../context/alertContext/alertContext';
import AuthContext from '../context/auth/authContext';
const Login = (props) => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext);
    const {login, error, isAuthenticated, clearErrors} = authContext;
    const {setAlert} = alertContext;
    const [user, setUser] = useState({
        email: '',
        password:'',
    });
    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/')
        }
        if(error){
            setAlert(error);
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])
    const {email, password} = user;
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === ''){
            setAlert('Please Enter All Fields', 'danger')
        }else{
            login({
                email,
                password
            })
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <div className='form-control'>
                <label htmlFor="">Email</label>
                <br/>
                <input onChange={onChange} type="email" placeholder='Enter your email' name='email' value={email}/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Password</label>
                <br/>
                <input onChange={onChange} type="password" placeholder='Enter Your Password' name='password' value={password}/>
            </div>
            <div>
                <input type="submit" value='Login' className='transaction-btn'/>
            </div>
        </form>
    )
}

export default Login;
