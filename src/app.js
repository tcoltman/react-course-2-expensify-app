import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from  './store/configureStore';
import {startSetExpenses,startRemoveExpense} from './actions/expenses';
import {LoginPage} from  './components/LoginPage';
import {LoadingPage} from './components/LoadingPage'
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import database  from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

let hasRendered = false;
const renderApp =() => { //only reneder app, so check if rendered
    if (!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />,document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then (()=>{
            renderApp();
            if (history.location.pathname === '/'){
                history.push('/dashboard'); //redirect to dashboard only if on login page 
            }
        });

    } else
    {
        store.dispatch(logout())
        renderApp();
        history.push('/'); //redirect to root
    }
});
