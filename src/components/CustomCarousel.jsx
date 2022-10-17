import Carousel from "react-bootstrap/Carousel";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex">
          <img
            className="d-block w-25 h-25"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/09/06/24392_BB_B_OMP_09-06.jpg"
            alt="First slide"
          />
          <p>New book</p>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://img.thriftbooks.com/api/images/i/s/1B1CEBD6A00C7E5E262024994E26C0A3FE23B5F6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://img.thriftbooks.com/api/images/i/s/0CBBC23A154A9D29C44B0E36D8738C86252292A8.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
