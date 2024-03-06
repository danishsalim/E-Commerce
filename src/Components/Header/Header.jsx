import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import Heading from './Heading';
import CartContext from '../store/CartContext';
const Header = () => {
  const {handleShow,total} = useContext(CartContext)
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" fixed="top"  style={{marginBottom:'3rem',width:'100'}} >
        <Container style={{width:'100'}}>
          <Nav style={{width:"100vw",marginLeft:'40%',display:'flex',justifyContent:'center'}}>
            <NavLink to="/Home" className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>Home</NavLink>
            end
            <NavLink to="/" className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>Store</NavLink>
            end
            <NavLink to="/About" className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>About</NavLink>
            
            <Button style={{marginLeft:'auto',}} onClick={handleShow}> cart {total>0?total:''}</Button>
          </Nav>
        </Container>
      </Navbar>
         <Heading />
    </>
  )
}

export default Header