import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default function RoutePrivate({ path, component: Component, ...rest }) {
    
    const isLogged = useSelector(state => state.login.isLogged);
    console.log('private route = ', isLogged);
    
    return (
        <Route path={path} {...rest} render={ props => {
            if (isLogged) {
                return <Component {...props} {...rest} />
            } else{
                return <Redirect to="/login" />
            } 
        }}/>
    )
}
