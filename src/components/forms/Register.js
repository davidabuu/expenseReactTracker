import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../context/alertContext/alertContext';
import AuthContext from '../context/auth/authContext';
const Register = (props) => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext);
    const { register, error, clearErrors, isAuthenticated} = authContext;
    const {setAlert} = alertContext;
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
    const [user, setUser] = useState({
        name:'',
        email: '',
        password:'',
        password2:''
    });
    const {name, email, password, password2} = user;
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '' || password2 === ''){
            setAlert('Please Enter all Fields', 'danger')
        }else if(password !== password2){
            setAlert('Password Do Not Match', 'danger')
        }else{
            register({
                name,
                email,
                password
            })
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>Account Register</h2>
            <div className='form-control'>
                <label htmlFor="">Name</label>
                <br/>
                <input onChange={onChange} type="text" placeholder='Enter Your name' name='name' value={name}/>
            </div>
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
            <div className='form-control'>
                <label htmlFor="">Confirm Password</label>
                <br/>
                <input onChange={onChange} type="password" placeholder='Enter Your Password' name='password2' value={password2}/>
            </div>
            <div>
                <input type="submit" value='Register' className='transaction-btn'/>
            </div>
        </form>
    )
}

export default Register;
