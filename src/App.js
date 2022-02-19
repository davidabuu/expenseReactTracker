import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Fragment, useContext, useEffect } from 'react';
import './App.css';
import ExpenseState from './components/context/ExpenseState';
import Navbar from './components/Navbar';
import Register from './components/forms/Register';
import Login from './components/forms/Login';
import AlertState from './components/context/alertContext/AlertState'
import Alerts from './components/formAlerts/Alerts';
import AuthState from './components/context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import Home from './components/page/Home';
import PrivateRoute from './components/routing/PrivateRoute';
if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <AuthState>
    <ExpenseState>
      <AlertState>
    <Router>
    <div className="grid">
      <div>
      <Navbar></Navbar>
      <Alerts></Alerts>
      <Switch>
      <PrivateRoute exact path='/' component={Home}></PrivateRoute>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
      </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </ExpenseState>
    </AuthState>
  );
}

export default App;
