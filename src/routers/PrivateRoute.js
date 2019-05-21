import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated, //Detructure authenticated
    component: Component, //Destructure component sent in from AppRouter and Name Component
    ...rest   //get a variable with all the rest of the pros excluding the 2 names above
}) => (
    <Route {...rest} //spread all rest props
    component={(props)=>( //conditioning for component
        isAuthenticated ? (
            <div>
                <Header />   {/*Move header here*/}
                <Component {...props} /> {/*Component passed in above with props*/}
            </div>
        ) : (
            <Redirect to="/" /> //Redirect if not logged in
        )
    )} />  
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //flip it to get true/false and not true/undefined
});

export default connect (mapStateToProps)(PrivateRoute);