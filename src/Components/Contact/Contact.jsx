import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    // const [user,setUser] =useState()

    const storeData = async(user)=>{
       const response= await fetch('https://fir-todo-a76ca-default-rtdb.firebaseio.com/contact.json',{
            method:"POST",
            body:JSON.stringify(user),
            'Content-Type':'application/json'
        })
       const data= await response.json()
       console.log(data)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        let userDetail={
            name:form.validationCustom01.value,
            email:form.validationCustomUsername.value,
            phone:form.validationCustom03.value
        }
        console.log(userDetail)
        // setUser(user)
        setValidated(true);
        storeData(userDetail)
        form.reset()
      };
    
  return (
<Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Phone.</Form.Label>
          <Form.Control type="tel" pattern="[0-9]{11}" placeholder="phone"  />
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default Contact