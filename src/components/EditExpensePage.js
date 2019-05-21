import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense,startRemoveExpense} from '../actions/expenses';


const EditExpensePage = (props)=>{   //props from HOC
    return (
        <div>
            <ExpenseForm 
            expense={props.expense} //sent from HOC
            onSubmit={(expense)=>{
                props.dispatch(startEditExpense(props.expense.id,expense));
                props.history.push('/');
            }} />
            <button onClick={()=>{
                props.dispatch(startRemoveExpense({id:props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
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

