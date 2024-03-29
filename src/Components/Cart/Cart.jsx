import React from 'react'
import { useState ,useContext} from 'react';
import {Table,Modal,Button} from 'react-bootstrap'
import CartContext from '../store/CartContext';
import "./Cart.css"
    
    
const Cart = () => {
    const {show,handleShow,handleClose,cartElements,setCartElements,setTotal} = useContext(CartContext);
    // const [totalAmount,setTotalAmount] = useState(0)
    let totalAmount = 0;
    cartElements.map((item)=>{
      totalAmount+=parseInt(item.price)*parseInt(item.quantity)
    })
    const removeItemsFromCart=(id)=>{
      let updatedCart=cartElements.filter((item)=>item.id!==id)
      setCartElements(updatedCart)
    }
    const purchaseHandler=()=>{
      console.log('your order has been placed . Thankyou!!!')
      setCartElements([])
      handleClose()
      setTotal(0)
    }
  return (
    <div >
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Table>
            <thead>
                <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            {
                cartElements.map((item)=>(
                <tr key={Math.random(10)}>
                    <td><img src={item['imageUrl']} alt='img1' width='70px'/> {item['title'].slice(0,6)} </td>
                    <td>${item['price']}</td>
                <td style={{textAlign:'center'}}>{item['quantity']}</td> 
                <td><Button variant="danger" size="sm" onClick={()=>removeItemsFromCart(item.id)}>Remove</Button></td>
                </tr>
                ))
            }
            <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>${totalAmount}</td>
            </tr>
            </tbody>
            </Table>
        </Modal.Body>
  
          <Button onClick={purchaseHandler}>Purchase</Button>
      </Modal>
    </div>
  )
}

export default Cart