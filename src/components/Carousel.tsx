'use client'
import { Carousel } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';

const CarouselComponent: React.FC = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => (document.querySelector('.carousel-control-next') as HTMLElement)?.click(),
    onSwipedRight: () => (document.querySelector('.carousel-control-prev') as HTMLElement)?.click(),
    trackMouse: true // Esto permite también el seguimiento del ratón
  });

  return (
    <div className="container py-10 mx-auto" {...handlers}>
      <Carousel interval={1000} wrap={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/court1.jpeg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/court2.JPG"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/court3.JPG"
            alt="Second slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
