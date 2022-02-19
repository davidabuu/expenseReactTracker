import React, {useContext, useEffect} from 'react'
import Expense from '../context/expense/Expense'
import IncomeandExpesne from '../../components/IncomeAndExpense';
import TransactionForm from '../../components/TransactionForm';
import ExpenseAmount from '../ExpenseAmount';
import AuthContext from '../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext)
    useEffect(() => {
      authContext.loadUser();
      console.log(authContext.loadUser())
      //eslint-diable-next-line
    }, [])
    return (
        <div className='grid'>
        <ExpenseAmount></ExpenseAmount>
        <IncomeandExpesne></IncomeandExpesne>
        <div className='expense-items'>
        <br></br>
        <br></br>
        <div style={{display:'inline-block'}}>
          <h2 style={{marginTop: '40px'}}>HISTORY</h2>
          <Expense></Expense>
        </div>
        </div>
        <TransactionForm></TransactionForm>
          </div>
    )
}

export default Home
