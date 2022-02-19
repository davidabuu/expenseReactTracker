import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../components/context/auth/authContext';
const Navbar = ({title}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, logout, user} = authContext;
    const onLogout = () => {
        logout();
    }
    const authLinks = (
        <Fragment>
            <li>
                Hello {user && user.name}
            </li>
            <li>
                <a href='' onClick={onLogout}>Logout</a>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
             <li>
                       <Link to='/register' style={{textDecoration: 'none'}}>Register</Link>
                   </li>
                   <li>
                       <Link to='/login' style={{textDecoration:'none'}}>Login</Link>
                   </li>
        </Fragment>
    )
    return (
        <Fragment>
            <div className='nav-container'>
               <h1>{title}</h1>
               <ul>
                   {isAuthenticated ? authLinks: guestLinks}
               </ul>
            </div>
        </Fragment>
    )
}
Navbar.defaultProps = {
    title: 'EXPENSE TRACKER'
}

export default Navbar;
