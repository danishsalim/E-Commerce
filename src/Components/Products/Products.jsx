import Product from "./Product";
import {Row,Col, Button} from "react-bootstrap";

const productsArr = [
    {
    id:1,
    title: 'Colors',
    price: 100,
    imageUrl: '/prod1-1.webp',
    reviews:["Super product my bro liked it 😻","Good product","Love it😍","Nice products 👍👍😊"]
    },
    {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: '/prod2-1.webp',
    reviews:["Super product my bro liked it 😻","Good product","Love it😍","Nice products 👍👍😊"]
    },
    {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: '/prod3-1.webp',
    reviews:["Super product my bro liked it 😻","Good product","Love it😍","Nice products 👍👍😊"]
    },
    {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: '/prod4-1.webp',
    reviews:["Super product my bro liked it 😻","Good product","Love it😍","Nice products 👍👍😊"]
    }
    ]

const Products = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1>Music</h1>
        <Row xs={1} md={2} className="g-4 " style={{marginLeft:'5%'}} > 
            {
                productsArr.map((item,idx)=>(
                    <Col key={idx} className='d-flex flex-column justify-content-center align-items-center'>
                        <h3 >Album {idx+1}</h3>
                        <Product  img={item.imageUrl} title={item.title} price={item.price} id={item.id} />
                    </Col>
                    ))
            }
        </Row>
        <Button>see the cart</Button>
    </div>
  )
}

export default Products