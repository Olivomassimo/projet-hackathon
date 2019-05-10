import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import './index.css'

const NavWild = ({counter}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand tref="#home">The Team Sock</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink className="espace" activeClassName="selected" exact to='/' href="#home">Home</NavLink>
                <NavLink className="espace" activeClassName="selected" to='/student' href="#student">Student</NavLink>
                <NavLink className="espace" activeClassName="selected" to='/team' href="#time">Team <span>{(counter > 0 ? counter : '')}</span> </NavLink>
                <NavLink className="espace" activeClassName="selected" to='/sine-up' href="#sine-up">Sine-up</NavLink>
            </Nav>
        </Navbar>

    );
}
export default NavWild;