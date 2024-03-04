import React from 'react'
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import Heading from './Heading';
const Header = () => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" fixed="top"  style={{marginBottom:'3rem',width:'100'}} >
        <Container style={{width:'100'}}>
          <Nav style={{width:"100vw",marginLeft:'40%',display:'flex',justifyContent:'center'}}>
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#store" style={{color:"white"}}>Store</Nav.Link>
            <Nav.Link href="#About" style={{color:"white"}}>About</Nav.Link>
            <Button style={{marginLeft:'auto',}}>cart</Button>
          </Nav>
        </Container>
      </Navbar>
         <Heading />
    </>
  )
}

export default Header