import Card1 from "../UI/Card";
import {Row,Col, Button} from "react-bootstrap";

const productsArr = [
    {
    id:1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]

const Main = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1>Music</h1>
        <Row xs={1} md={2} className="g-4 " style={{marginLeft:'5%'}} > 
            {
                productsArr.map((item,idx)=>(
                    <Col key={idx} className='d-flex flex-column justify-content-center align-items-center'>
                        <h3 >Album {idx+1}</h3>
                        <Card1  img={item.imageUrl} title={item.title} price={item.price} id={item.id} />
                    </Col>
                    ))
            }
        </Row>
        <Button>see the cart</Button>
    </div>
  )
}

export default Main