import Carousel from 'react-bootstrap/Carousel';
import img from '../../../images/fumicon cover.jpg'

function Slider() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;