import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';


const AddExpensePage = (props)=>(  //bring props in from connect, it has dispatch
    <div>
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title" >Add Expense</h1>
        </div>
    </div>
        <div className="content-container">
        <ExpenseForm 
            onSubmit={ (expense) => {
                props.dispatch(startAddExpense(expense)); //send the expense object in
                props.history.push('/');  //Redirect to dashboard page
            }}
        />
        </div>
    </div>
);

export default connect()(AddExpensePage) ;
