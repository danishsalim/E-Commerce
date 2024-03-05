import React from 'react'
import { useState ,useContext} from 'react';
import {Table,Modal,Button} from 'react-bootstrap'
import CartContext from '../store/CartContext';
import "./Cart.css"

const cartElements  = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 1,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity:5,
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity:2,
    }
    ]
    
    
const Cart = () => {
    const {show,handleShow,handleClose} = useContext(CartContext);
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
                <tr >
                    <td><img src={item['imageUrl']} alt='img1' width='70px'/> {item['title'].slice(0,6)} </td>
                    <td>${item['price']}</td>
                <td style={{textAlign:'center'}}>{item['quantity']}</td> 
                <td><Button variant="danger" size="sm">Remove</Button></td>
                </tr>
                ))
            }
            <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>$200</td>
            </tr>
            </tbody>
            </Table>
        </Modal.Body>
  
          <Button >Purchase</Button>
      </Modal>
    </div>
  )
}

export default Cart