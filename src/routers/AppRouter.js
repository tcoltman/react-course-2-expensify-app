import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from  '../components/LoginPage';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
    <div>
    <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}  />
        <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </Router>
)

export default AppRouter;
