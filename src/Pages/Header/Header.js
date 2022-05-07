import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png'
const Header = () => {
    return (
        <div className=''>
            <Navbar bg="dark" variant="dark">
                   <>
                    <Navbar.Brand className='px-5' href="#home">
                        <img src={logo} height = "30px" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='pe-3 text-white text-decoration-none' to="/home">Home</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/features">Features</Link>
                        <Link  className='pe-3 text-white text-decoration-none' to="/pricing">Pricing</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/details">Service Details</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/addService">Add </Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/manageServices">Manage</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/order">order</Link>
                    </Nav>
                   </>
            </Navbar>
        </div>
    );
};

export default Header;