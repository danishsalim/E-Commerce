import { useState ,useContext} from 'react';
import {Table,Modal,Button} from 'react-bootstrap'
import CartContext from '../store/CartContext';

const Modal1 = (props) => {
  const {show,handleShow,handleClose} = useContext(CartContext);
  return (
    <>
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
            <tr>
              <td>{props.imageUrl}</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
          </tr>
          </tbody>
        </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;