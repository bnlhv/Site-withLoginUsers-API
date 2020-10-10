import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import { changeSiteName } from '../actions/actions'

const NavigationBar = ({ handlerLogout }) => {
    const siteState = useSelector(state => state.site.siteName);
    const isLoggedState = useSelector(state => state.login.isLogged);
    let loginLink = <Nav.Link href="/login">Login</Nav.Link>;
    if (isLoggedState){
        loginLink = <NavLink href="/login" onClick={()=>handlerLogout()}>Logout</NavLink>;
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{siteState}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                    <Nav.Link href="/user/1">User</Nav.Link>
                    {loginLink}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar