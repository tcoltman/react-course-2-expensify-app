import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {   props.expenses.map((expense)=>{
               return  <ExpenseListItem key={expense.id} {...expense}/>
            })
        }
    </div>
);

const MapStateToProps = (state)=>{   //the state is passed in
    return {
        expenses: selectExpenses(state.expenses,state.filters) //return anything from the state which can be access from props in above component

    }
};

//HOC connect, first bracket is for a function which returns an object of what we want to connect, second is the component to connect to
export default connect(MapStateToProps)(ExpenseList); 
