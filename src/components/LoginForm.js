import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function LoginForm({ handleLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email,password);
    }

    return (
        <Form className="m-5 w-50 text-left">
            <h3>Login Page:</h3>
            {/* Email */}
            <Form.Group 
                controlId="formBasicEmail">
                <Form.Label>
                    Email address
                </Form.Label>
                <Form.Control 
                    name="email" 
                    type="email" 
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            {/* Password */}
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {/* Button */}
            <Button 
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}>
                    Submit
            </Button>
        </Form>
    )
}
