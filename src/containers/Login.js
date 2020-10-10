import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { loginSubmit } from '../actions/actions'
import { useHistory } from 'react-router-dom'

import LoginForm from '../components/LoginForm'

export default function Login() {    

    const state = useSelector(state => state.login.isLogged);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = (email, password) => {
        dispatch(loginSubmit(email, password));
        history.push('/');
    }

    useEffect(() => {
        if (state === true){
            history.push('/')
        }
    })

    return (
        <Container className="login-page">
            <LoginForm handleLogin={handleLogin} />  
        </Container>
    )
}
