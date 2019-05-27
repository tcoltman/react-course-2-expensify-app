import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense,startRemoveExpense} from '../actions/expenses';


const EditExpensePage = (props)=>{   //props from HOC
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="container-container">
            <ExpenseForm 
            expense={props.expense} //sent from HOC
            onSubmit={(expense)=>{
                props.dispatch(startEditExpense(props.expense.id,expense));
                props.history.push('/');
            }} />
            <button className="button button__secondary" onClick={()=>{
                props.dispatch(startRemoveExpense({id:props.expense.id}));
                props.history.push('/');
            }}>Remove Expense</button>
            </div>  
        </div>
    );
}

const mapStateToProps = (state, props) => { //props that were sent to the higher order component
    return { //one new prop added 
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id 
        })
    } 
}

export default connect(mapStateToProps)(EditExpensePage) ;

