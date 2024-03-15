import Carousel from 'react-bootstrap/Carousel';
import "./ImageGallery.css"

const ImageGallery= (props) => {
  const id = props.id
  return (
  
    <Carousel variant="dark" slide={false}>
      <Carousel.Item>
        <img src={"/prod"+id+"-1.webp"} alt={"prod"+id} />
      </Carousel.Item>
      <Carousel.Item>
      <img src={"/prod"+id+"-2.webp"} alt={"prod"+id} />
      </Carousel.Item>
      <Carousel.Item>
      <img src={"/prod"+id+"-3.webp"} alt={"prod"+id} />
      </Carousel.Item>
    </Carousel>

  );
}

export default ImageGallery;