import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from './ImageGallery'
import CartContext from '../store/CartContext'
import "./productDetail.css"
import { IoIosStar } from "react-icons/io";

const ProductDetail = () => {
    const param = useParams()
     const id = param.id
    const {productsArr} = useContext(CartContext)
    const handleStars=(count)=>{
        let stars=[]
        for(let i=0;i<count;i++)
        {
            stars.push(<IoIosStar />)
        }
        return <>{...stars}</>
    }

    // const stars = 
    //     productsArr.filter((prod)=>prod.id==id)[0]
    //     .reviews.stars.map((star)=>handleStars(star))
        

    const reviews = productsArr.filter((prod)=>prod.id==id)[0]
                    .reviews.map((review,idx)=>(
                      <ul key={idx}>
                        <li>{handleStars(review.stars)}</li>
                        <li>{review.comment}</li>
                      </ul>
                    ))                    
               
  return (
    <div className='contain'>  
        <ImageGallery  id={id}/>
        <span> <h1>Reviews</h1> {reviews}</span>    
    </div>
  )
}

export default ProductDetail





                            