import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://smartslider3.com/wp-content/uploads/2019/05/sliderimages-780x410.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://smartslider3.com/wp-content/uploads/2019/05/sliderimages-780x410.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6rHur2stoxGpJ5ee_Vn7B_0S37YlK4_X8bb__8Lm3dhHI58TDbzcOJosAyTzdWUAPN8&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;