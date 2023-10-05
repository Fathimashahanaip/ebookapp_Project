import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Naav.css'

function Naav() {
  return (
    <div>    
            <Navbar className='nna' variant="dark">
    <Container>
           <Nav className="me-auto">
       
        {/* <NavLink href="/">Home</NavLink> */}
        {/* <NavLink to="/">Home</NavLink> */}
        
        <Link to="/login" className='login'>
       
            Login
            </Link>
            <Link to="/adminreg" className='adreg'>Admin Registration</Link> 
      <Link to="/usreg" className='usreg'>User Registration</Link> 
      <Link to='/adminhome' className='adhome'>AdHome</Link>
      <Link to='/userhome' className='usview'>UserHome</Link>
       {/* <Link to ='/'> <Nav.Link href="#pricing">Products</Nav.Link></Link> */}
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Naav