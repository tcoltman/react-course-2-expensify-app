import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from  './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description:'Waterbill',amount:4500,createdAt:11}));
store.dispatch(addExpense({description:'Gasbill',amount:1000,createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:150000,createdAt:11}));

store.dispatch(setTextFilter('water'));


const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(VisibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx,document.getElementById('app'));
