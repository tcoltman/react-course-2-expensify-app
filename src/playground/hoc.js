//HOC component (HOC) that renders another component
//Reuse Code
//Rednder Hijacking
//Prop manipulation
//Abstarct state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => ( // props sent in to this HOC
        <div>
        { props.isAdmin && <p>This is private info!!!</p> } {/* check if message should be shown  */}
        <WrappedComponent {...props}/>  {/* spread props sent in from WrappedComponent HOC, passing to child  */}
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div> {/* User ternary operator  */}
        {!props.isAuthenticated ? <p>You are not authenticated! please login</p> : <WrappedComponent {...props}/>}
        </div>
    )
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

//Create new prop isAdmin which can be used to control if message is shown
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the detail" />,document.getElementById('app')); 
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the detail" />,document.getElementById('app')); 

