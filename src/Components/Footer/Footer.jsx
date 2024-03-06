import React from 'react'
import "./Footer.css"
import img1 from "../../assets/images/facebook.png"
import img2 from "../../assets/images/youtubelogo.png"
const Footer = () => {
  return (
    <div className='d-flex justify-content-around align-items-center main'>
        <h1>
            The Generics
        </h1>
        <div>
            <img src={img1} alt="img1" width={50}/>
            <img src={img2} alt="img2" width={50}/>
        </div>
    </div>
  )
}

export default Footer