import { useState,useContext } from 'react';
import CartContext from "./CartContext";
import AuthContext from './AuthContext';
import {useNavigate} from 'react-router-dom'
const productsArr = [
  {
  id:1,
  title: 'Colors',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  reviews:[
              {
                stars:5,
                comment:"Super product my bro liked it 😻"
              },
              {
                stars:3,
                comment:"Good Product"
              },
           ],
  },
  {
  id:2,
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  reviews:[
    {stars:3,
    comment:"average product"
    },
    {stars:3,
      comment:"not a Good Product"
    },
    {stars:1,
      comment:"worst"
    },
  ],
  },
  {
  id:3,
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  reviews:[
            {stars:5,
            comment:"Super product "
            },
            {stars:3,
              comment:"Good Product"
              },
          ],
  },
  {
  id:4,
  title: 'Blue Color',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  reviews:[
    {stars:5,
    comment:"liked it 😻"
    },
    {stars:4,
      comment:"Good Product"
    },
    {stars:4,
      comment:"nice Product"
    },
  ],
  }
  ]

const CartProvider = (props) => {
    const [show, setShow] = useState(false);
    const [items,setItems] = useState([]);
    const [total,setTotal] =useState(0)
    const {isLoggedIn} = useContext(AuthContext)
    const navigate=useNavigate()

    const addItemTOCart = (newItem)=>{
      if(!isLoggedIn)
      {
        navigate('/auth')
      }
      else
      {
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
    }

    const handleClose = () => {
      setShow(false) 
    };
    const handleShow = () => {
      if(!isLoggedIn)
      {
        navigate('/auth')
      }
      else
      {
        setShow(true) 
      }
    };


    const cartContext={
      handleShow:handleShow,
      handleClose:handleClose,
      show:show,
      addItemTOCart:addItemTOCart,
      cartElements:items,
      setCartElements:setItems,
      total:total,
      setTotal:setTotal,
      productsArr:productsArr,
    }
    
  return (
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider