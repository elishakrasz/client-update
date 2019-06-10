import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image } from 'semantic-ui-react'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const styles = {
    padding: '20px 0 20px 20px'
  }
  const land = "../../land.jpg"
  const image2 = "../../Igbo/Igbo Community of HaShem.jpg"
  const image3 = "../../Pashtun/testpash_update.jpg"
  const image4 = "../../Shinto/shinto.jpg"
  const image1 = "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
export default class MultiCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel
        style={styles}
        partialVisbile={true}
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      paritialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      paritialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
    <div><Image height="300px" width="600px" src={image1}/></div>
    <div><Image height="300px" width="600px" src={land}/></div>
  <div><Image
    height="300px"
  src={image2}/></div>
  <div><Image height="300px" width="600px" src={image3}/></div>
  <div><Image height="300px" width="600px" src={image4}/></div>
</Carousel>
      </div>
    )
  }
}
