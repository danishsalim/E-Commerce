import { useState } from 'react';
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [show, setShow] = useState(false);
    const [items,setItems] = useState([]);
    const [total,setTotal] =useState(0)
  

    const addItemTOCart = (newItem)=>{
        if(items.length==0)
          {
            setItems((prev)=>[...prev,newItem])
          }
        else{
          let flag=false
            const updatedItems = items.map((item)=>{
                if(item.id==newItem.id)
                {
                  flag=true
                  return {...item,quantity:parseInt(item['quantity'])+1}
                }
                return item
              })
          flag==true?setItems(updatedItems):setItems((prev)=>[...prev,newItem])
        }

      setTotal((prev)=>prev+1)
    }

    const handleClose = () => {
      setShow(false) 
    };
    const handleShow = () => {
      setShow(true) 
    };


    const cartContext={
      handleShow:handleShow,
      handleClose:handleClose,
      show:show,
      addItemTOCart:addItemTOCart,
      cartElements:items,
      total:total,
    }
    
  return (
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider