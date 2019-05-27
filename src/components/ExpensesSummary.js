import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';


const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'  ;
    const formatteExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
return (
    <div className="page-header">
    <div className="content-container">
        <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formatteExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
        </div>
    </div>
    </div>
);
};

const MapStateToProps = (state)=>{   //the state is passed in
    //console.log(state.filters);
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
       //return anything from the state which can be access from props in above component
    }
};

export default connect(MapStateToProps)(ExpensesSummary);