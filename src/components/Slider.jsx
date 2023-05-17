import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={600}
        className="d-block w-100"
        src="./img/Slide1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>У жизни есть вкус, а у вкуса есть имя!</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={600}
        className="d-block w-100"
        src="./img/Slide2.jpeg"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h3>Натуральный продукт может быть доступен каждому!</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={600}
        className="d-block w-100"
        src="./img/Slide3.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
      <h3>Пельмешек Всем!</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider