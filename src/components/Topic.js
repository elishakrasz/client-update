import { GoogleComponent } from 'react-google-location' 
import React, { Component } from 'react';

const API_KEY = 'AIzaSyAotIo5uA5FkDxthkE0DAyJq3B8PEtPPZo'  // how to get key - step are below

class Topic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  } 
}


export default Topic;