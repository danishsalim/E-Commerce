import { useState, useRef,useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../store/AuthContext';
import CartContext from '../store/CartContext';
import  './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const  [isLoading,setIsLoading] = useState(false)
  const {addItemTOCart,cartElements,setCartElements,setTotal} = useContext(CartContext);
  const {login}=useContext(AuthContext)
  const emailInputRef= useRef();
  const passwordInputRef=useRef();
  const navigate = useNavigate();


  const handleAddCart=(data,email)=>{
    let arr=[]
    for(let i=0;i<data.length;i++)
    {
        if(arr.length==0)
        {
           arr.push(data[i])
        }
        else
        {
            let flag=false
              const updatedItems = arr.map((item)=>{
                  if(item.id==data[i].id)
                  {
                    flag=true
                    return {...item,quantity:parseInt(item['quantity'])+1}
                  }
                  return item
                })
            arr= flag==true?updatedItems:[...updatedItems,data[i]]
        }
    }
    setCartElements(arr)
    setTotal(data.length)
    localStorage.setItem("cart"+email,JSON.stringify(arr))
  }

  const handleGetCart=async(email)=>{
      const response= await fetch("https://crudcrud.com/api/4e4d0d2d980c4e12978b4b402900d851/cart"+email)
      if(response.ok)
      {
        const data = await response.json() 
        localStorage.setItem("data",JSON.stringify(data))
        console.log(data)
        handleAddCart(data,email)  
      }
      else{
        const data = await response.json()
        let errorMessage='Authentication failed'
        if(data && data.error && data.error.message)
        {
          errorMessage=data.error.message
        }
        console.log(errorMessage)
      }
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async(event) =>{
    event.preventDefault()
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    setIsLoading(true)
    let url;
    if(isLogin)
    {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNrpI1KIiXoB9wO_RqsMDXrnJt5qbK78o'
      
    }
    else {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNrpI1KIiXoB9wO_RqsMDXrnJt5qbK78o'
    }
    const response = await fetch(url,{
            method:'POST',
            body:JSON.stringify({
              email:enteredEmail,
              password:enteredPassword,
              returnSecureToken:true
            }),
            headers:{
              'Content-Type':'application/json'
            }
          })
    setIsLoading(false)
    if(response.ok)
    {
      const data = await response.json()
      let email=data.email.split("").filter((i)=>i!="@" && i!=".").join("")
      handleGetCart(email)
      login(data.idToken,email)
      navigate('/products')
    }
    else{
      const data = await response.json()
      let errorMessage='Authentication failed'
      if(data && data.error && data.error.message)
      {
        errorMessage=data.error.message
      }
      alert(errorMessage)
    }
      
  }
    

  return (
    <section className='auth'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className='control'>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        <div className='actions'>
          {!isLoading && <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request... </p>}
          <button
            type='button'
            className='toggle'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm
