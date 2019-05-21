import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated, //Detructure authenticated
    component: Component, //Destructure component sent in from AppRouter and Name Component
    ...rest   //get a variable with all the rest of the pros excluding the 2 names above
}) => (
    <Route {...rest} //spread all rest props
    component={(props)=>( //conditioning for component
        isAuthenticated ? (
            <Redirect to="/dashboard" /> //Redirect if logged in to dashboard
        ) : (
            <div>
            <Component {...props} /> {/*Component passed in above with props*/}
        </div>  
        )
    )} />  
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //flip it to get true/false and not true/undefined
});

export default connect (mapStateToProps)(PublicRoute);