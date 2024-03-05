import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from '../store/CartContext';

const Card1 = (props) => {
  const {addItemTOCart} = useContext(CartContext)
  const data={
    title: props.title,
    price: props.price,
    imageUrl:props.img ,
    id:props.id,
    quantity: 1,
  }
  return (
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Text>
          $ {props.price}
          </Card.Text>
          <Button variant="primary" onClick={()=>addItemTOCart(data)}>ADD TO CART</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Card1