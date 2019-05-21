import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';


const AddExpensePage = (props)=>(  //bring props in from connect, it has dispatch
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={ (expense) => {
                props.dispatch(startAddExpense(expense)); //send the expense object in
                props.history.push('/');  //Redirect to dashboard page
            }}
        />
    </div>
);

export default connect()(AddExpensePage) ;
