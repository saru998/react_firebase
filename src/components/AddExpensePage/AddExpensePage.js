import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { startAddExpense } from '../../actions/expenses';
import Headers from '../Header/Header'


const AddExpensePage = (props) =>{
    return(
        <div>
            <Headers/>
            <h2>Add Expense</h2>

            <ExpenseForm
                onSubmit={(expense)=>{
                    props.dispatch(startAddExpense(expense));
                    props.history.push('/');     //When router is ready use it,every back press will go to /
                }}
            />
        </div>  
    ) 
}
// const mapDispatchToProps = (dispatch) =>{
//     startAddExpense:(expense)=>dispatch(startAddExpense(expense))
// };

//export default connect(undefined,mapDispatchToProps)(AddExpensePage);
export default connect()(AddExpensePage);