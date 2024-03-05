import { useState } from 'react';
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false) 
      console.log('fasle')
    };
    const handleShow = () => {
      setShow(true) 
      console.log('true')
    };
    const cartContext={
      handleShow:handleShow,
      handleClose:handleClose,
      show:show,
    }
  return (
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider