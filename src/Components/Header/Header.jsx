import React,{useContext, useState} from 'react'
import {NavLink,Route, Routes} from 'react-router-dom'
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import CartContext from '../store/CartContext';
import Heading from './Heading';
import "./Header.css"
import AuthContext from '../store/AuthContext';

const Header = () => {
  const authctx = useContext(AuthContext)
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
     <Navbar bg="dark" data-bs-theme="dark" fixed="top"  style={{marginBottom:'3rem',width:'100',height:'100px'}} >
        <Container style={{width:'100',}} >
          <Nav  style={{width:"100vw",display:'flex',justifyContent:'center'}}>
            <NavLink to="/" onClick={hideButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",}}>Home</NavLink>
            end
            <NavLink to={authctx.isLoggedIn?"/Products":"/Auth"} onClick={showButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",marginRight:'10px'}}>Store</NavLink>
            end
            <NavLink to="/About" onClick={hideButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",}}>About</NavLink>
            end
            <NavLink to="/Auth" onClick={hideButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",}}>{!authctx.isLoggedIn?'Login':'' }</NavLink>
            end
            <NavLink to="/Contact" onClick={hideButton} className={({ isActive}) => isActive ? "active" : ""} style={{color:"white",}}>Contact</NavLink>
            {authctx.isLoggedIn && <Button style={{marginLeft:'auto',}} onClick={authctx.logout}> Logout </Button> }
          </Nav>
          <Nav  style={{width:"100vw",display:'flex',justifyContent:'center'}}>
           {authctx.isLoggedIn && <Button style={{marginLeft:'auto',}}  onClick={handleShow}> cart {total>0?total:''}</Button> }
          </Nav>
        </Container>
      </Navbar>
      
     
      
    </>
  )
}

export default Header