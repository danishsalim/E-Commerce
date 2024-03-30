import React, { useContext,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from '../store/CartContext';
import AuthContext from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const {addItemTOCart,setCartElements,setTotal} = useContext(CartContext)
  const {emailId} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    const cartItems= JSON.parse(localStorage.getItem("cart"+emailId) || "[]");
    setCartElements(cartItems)
    let total=0
    cartItems.map((item)=>{
      total+=item.quantity
    })
    setTotal(total)
  },[])

  const handleNavigation =()=>{
     navigate('/products/'+props.id)
  }
  const addToCartData={
    title: props.title,
    price: props.price,
    imageUrl:props.img ,
    id:props.id,
    quantity: 1,
  }
  const handleCartItem=async(addToCartData)=>{
    addItemTOCart(addToCartData)
    const response = await fetch("https://crudcrud.com/api/4e4d0d2d980c4e12978b4b402900d851/cart"+emailId,{
      method:'POST',
      body:JSON.stringify(addToCartData),
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    if(response.ok)
    {
      const data = await response.json()
      console.log(data)
    }
    else{
      const data = await response.json()
      let errorMessage='Authentication failed'
      if(data && data.error && data.error.message)
      {
        errorMessage=data.error.message
      }
      console.log(errorMessage)
    }
  }
  return (
    <div >
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={props.img} onClick={handleNavigation} />
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Text>
          $ {props.price}
          </Card.Text>
          <Button variant="primary" onClick={()=>handleCartItem(addToCartData)}>ADD TO CART</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product