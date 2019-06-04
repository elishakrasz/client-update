import React, { Component } from 'react'
import Carousel from 'nuka-carousel';


export default class Videos extends Component {
  render() {
    return (
      <div>
         <Carousel>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" alt="one" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" alt="two" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" alt="three"/>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" alt="four"/>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" alt="five"/>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" alt="six"/>
      </Carousel>
      </div>
    )
  }
}
