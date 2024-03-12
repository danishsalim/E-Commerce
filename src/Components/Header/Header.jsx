import React,{useContext, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import CartContext from '../store/CartContext';
import Heading from './Heading';
import "./Header.css"

const Header = () => {
  const {handleShow,total} = useContext(CartContext)
  const [flag,setFlag]=useState(true)
  const hideButton=()=>{
    setFlag(false)
  }
  const showButton=()=>{
    setFlag(true)
  }

  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" fixed="top"  style={{marginBottom:'3rem',width:'100',}} >
        <Container style={{width:'100',}} >
          <Nav  style={{width:"100vw",marginLeft:'40%',display:'flex',justifyContent:'center'}}>
            <NavLink to="/Home" onClick={hideButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>Home</NavLink>
            end
            <NavLink to="/" onClick={showButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>Store</NavLink>
            end
            <NavLink to="/About" onClick={hideButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>About</NavLink>
            end
            <NavLink to="/Contact" onClick={hideButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>Contact</NavLink>
            
           {flag && <Button style={{marginLeft:'auto',}} className={flag?"":'hidden'} onClick={handleShow}> cart {total>0?total:''}</Button> }
          </Nav>
        </Container>
      </Navbar>
      <Heading /> 
    </>
  )
}

export default Header