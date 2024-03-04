import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Card1 = (props) => {
  return (
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Text>
          $ {props.price}
          </Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Card1