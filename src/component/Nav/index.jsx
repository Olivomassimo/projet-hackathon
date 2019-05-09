import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
const NavWild = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand tref="#home">Wilder</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink activeClassName="selected" exact to='/' href="#home">Home</NavLink>
                <NavLink activeClassName="selected" to='/time' href="#time">Time</NavLink>
                <NavLink activeClassName="selected" to='/sine-up' href="#sine-up">Sine-up</NavLink>
            </Nav>
        </Navbar>

    );
}
export default NavWild;