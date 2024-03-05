import { createContext } from "react";

const CartContext = createContext({
     handleClose : () => {},
     handleShow :() => {},
     setShow:()=>{},
     show:'',
});

export default CartContext;