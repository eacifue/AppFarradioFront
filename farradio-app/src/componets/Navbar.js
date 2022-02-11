import React, { Component } from 'react';
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Ventas from '../pages/ventas';
import Inventario from '../pages/inventario';

class NavegationBar extends Component(){
    render(){
    return(
        <Router>
            <div>
        <Navbar bg="dark" variant={'dark'} expand="lg">
            <Navbar.Brand>FarradioApp</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'> 
                    <Nav.Link as={Link} to={'./pages/inventario'}>Inventario</Nav.Link>
                    <Nav.Link as={Link} to={'./pages/ventas'}>Ventas</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        <div>
            <Routes>
                <Route path='/inventario' ><Inventario/></Route>
                <Route path='/ventas' ><Ventas/></Route>
            </Routes>


        </div>
        </Router>
    );
    }
}
export default NavegationBar;