import React, { Component } from 'react'
import {
    Grid,
    Segment,
    Header,
    Form,
    Item,
    Image,
    Button,
    Divider,
    Container,
    List,
    Card,
    Icon,
    Tab
  } from "semantic-ui-react";

  import { Map } from './maps/Map'

import ReactPlayer from 'react-player'
import Videos from './Videos';
import GlobeTest from './maps/GlobeTest';
import Globe from './maps/Globe'
import './Body.css'
import { panes } from './Panes'
import { CardGroupTest } from './CardGroupTest';
import { Connectitribe } from './ConnectItribe';
import MultiCarousel from './MultiCarousel';
import Geocode from 'react-geocode'
import Topic from './Topic';

 
const itribeCourse = "https://www.youtube.com/watch?v=I3zlHtFE8kw";

const backGroundVideo = {
  height: '100%',
width: '100%',
float: 'left',
top: '0',
padding: 'none',
position: 'fixed'
}



const pashtun = "../../Pashtun/testpash.jpg"

export default class Body extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   search: "",
    //   latitude: Infinity,
    //   longitude: Infinity
    // };
  }

  // constructor(props){
  //   super(props);
  //   this.state = { value: '',
  //    markers: [
  //     { markerOffset: -35, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
  //     { markerOffset: -35, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  //     { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  //     { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  //     { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.7110] },
  //     { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  //     { markerOffset: -35, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  //     { markerOffset: -35, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  //     { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.8520] },
  //     { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  //     { markerOffset: -35, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  //     { markerOffset: -35, name: "Tokyo", "coordinates": [139.6917,35.6895], "population": 37843000 },
  //     { markerOffset: -35, name: "Jakarta", "coordinates": [106.8650,-6.1751], "population": 30539000 },
  //     { markerOffset: -35, name: "Delhi", "coordinates": [77.1025,28.7041], "population": 24998000 },
  //     { markerOffset: -35, name: "Manila", "coordinates": [120.9842,14.5995], "population": 24123000 },
  //     { markerOffset: -35, name: "Seoul", "coordinates": [126.9780,37.5665], "population": 23480000 },
  //     { markerOffset: -35, name: "Shanghai", "coordinates": [121.4737,31.2304], "population": 23416000 },
  //     { markerOffset: -35, name: "Karachi", "coordinates": [67.0099,24.8615], "population": 22123000 },
  //     { markerOffset: -35, name: "Beijing", "coordinates": [116.4074,39.9042], "population": 21009000 },
  //     { markerOffset: -35, name: "New York", "coordinates": [-74.0059,40.7128], "population": 40630000 },
  //     { markerOffset: -35, name: "Guangzhou", "coordinates": [113.2644,23.1291], "population": 20597000 },
  //     { markerOffset: -35, name: "Sao Paulo", "coordinates": [-46.6333,-23.5505], "population": 20365000 },
  //     { markerOffset: -35, name: "Mexico City", "coordinates": [-99.1332,19.4326], "population": 20063000 },
  //     { markerOffset: -35, name: "Mumbai", "coordinates": [72.8777,19.0760], "population": 17712000 },
  //     { markerOffset: -35, name: "Osaka", "coordinates": [135.5022,34.6937], "population": 37444000 },
  //     { markerOffset: -35, name: "Moscow", "coordinates": [37.6173,55.7558], "population": 16170000 },
  //     { markerOffset: -35, name: "Dhaka", "coordinates": [90.4125,23.8103], "population": 15669000 },
  //     { markerOffset: -35, name: "Greater Cairo", "coordinates": [31.2357,30.0444], "population": 35600000 },
  //     { markerOffset: -35, name: "Los Angeles", "coordinates": [-118.2437,34.0522], "population": 15058000 },
  //     { markerOffset: -35, name: "Bangkok", "coordinates": [100.5018,13.7563], "population": 14998000 },
  //     { markerOffset: -35, name: "Kolkata", "coordinates": [88.3639,22.5726], "population": 14667000 },
  //     { markerOffset: -35, name: "Buenos Aires", "coordinates": [-58.3816,-34.6037], "population": 14122000 },
  //     { markerOffset: -35, name: "Tehran", "coordinates": [51.3890,35.6892], "population": 13532000 },
  //     { markerOffset: -35, name: "Istanbul", "coordinates": [28.9784,41.0082], "population": 43287000 },
  //     { markerOffset: -35, name: "Lagos", "coordinates": [3.3792,6.5244], "population": 13123000 },
  //     { markerOffset: -35, name: "Shenzhen", "coordinates": [114.0579,22.5431], "population": 12084000 },
  //     { markerOffset: -35, name: "Rio de Janeiro", "coordinates": [-43.1729,-22.9068], "population": 11727000 },
  //     { markerOffset: -35, name: "Kinshasa", "coordinates": [15.2663,-4.4419], "population": 11587000 },
  //     { markerOffset: -35, name: "Tianjin", "coordinates": [117.3616,39.3434], "population": 10920000 },
  //     { markerOffset: -35, name: "Paris", "coordinates": [2.3522,48.8566], "population": 30858000 },
  //     { markerOffset: -35, name: "Lima", "coordinates": [-77.0428,-12.0464], "population": 10750000 }
  //   ]
  // }

  
  
  handleSubmit = (e) => {

  }
  

  render() {
    return (
      <div>
          <div style={{ padding: '0em' }} vertical>
      <Grid celled='internally' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '0em', paddingTop: '8em' }}>
            <Header as='h3' style={{ fontSize: '4em' }}>
              Uniting the Lost Tribes of Israel
            </Header>
            <span style={{ fontSize: '1.6em', marginRight: '5em', marginLeft: '5em' }}>iTribe is activating a unique and untapped network of tens of millions of Israel supporters whose members self-identify as being from the Lost Tribes of Israel</span>
          </Grid.Column>
        </Grid.Row>
      
      </Grid>
    </div>
    <div style={{ padding: '0em' }} vertical>
      <Grid  stackable>
        <Grid.Row>
          <Grid.Column width={12} style={{ paddingBottom: '0em', paddingTop: '0em', height: 'auto' }}>
            <Map />
            {/* <Header as='h3' style={{ fontSize: '3em' }}>
              What We Do
            </Header> */}
          </Grid.Column>
          <Grid.Column width={4} style={{ paddingBottom: '0em', paddingTop: '8em', height: 'auto', paddingRight: '8em' }}>
            {/* <Header as='h3' style={{ fontSize: '3em' }}>
              What We Do
            </Header> */}
            <Form unstackable onSubmit={this.handleSubmit}>
    <Form.Group widths={2}>
      <Form.Input label='Email' placeholder='Email' name='email'/>
      <Form.Input label='Location' placeholder='Location' name='location'/>
      

    </Form.Group>
    <Form.Group>
      <Topic />
      </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'
    >Submit</Button>
  </Form>
            {/* <Connectitribe /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    {/* <CardGroupTest /> */}
    <div style={{ padding: '0em', backgroundColor: '#f3f5f9', marginTop: '8em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center' style={{ height: '30vh'  }}>
          <Grid.Column width={5} style={{ paddingBottom: '5em', paddingTop: '4em', marginBottom: '3em'}}>
            <Header as='h3' style={{ fontSize: '1.5em', paddingRight: '1em', paddingLeft: '1em' }}>
            Our approach is to work with each community where they are and as they are; we are agnostic to national and religious identity.
            </Header>
            <span style={{ fontSize: '1.1em' }}>
            We seek to create connections based on self-declared historic family (national) relationships and to embrace all people, creating an alliance with those who wish to connect to a common heritage.
            </span>
          </Grid.Column>
          <Grid.Column width={5} style={{ paddingBottom: '5em', paddingTop: '4em', marginBottom: '3em' }}>
            <Header as='h3' style={{ fontSize: '1.5em' }}>
            iTribe facilitates nations living side by creating a common space for people to share and connect. 
            </Header>
            <span style={{ fontSize: '1em' }}>
            Through building a socially driven digital platform with a focus in the areas of research, education, sustainability, advocacy, diplomacy and security for these ‘Lost Tribes’ communities, an opportunity to create a global voice arises.
            </span>
          </Grid.Column>
          <Grid.Column width={5} style={{ paddingBottom: '5em', paddingTop: '4em', marginBottom: '3em' }}>
            <Header as='h3' style={{ fontSize: '1.5em' }}>
             21st Century Opportunities. Mapping the Greater Disapora
            </Header>
            <span style={{ fontSize: '1em' }}>
            Unique and compelling Israel/Jewish impact social investment opportunity facing a massive and historically untapped market. Mapping the traditions and practices of halachic Jews all over the world as well self-identifying connected individuals and communities.
            </span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid columns='equal' stackable>
        <Grid.Row textAlign='center' style={{ height: 'auto' }}>
        <Grid.Column width={3}/>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '8em',  marginBottom: '3em',height: 'auto',
  }}>
          <Header as='h3' style={{ fontSize: '3em' }}>
              What We Do
            </Header>
            <div  style={{ fontSize: '1.5em', paddingBottom: '3em', marginBottom: '2em' }}>We are taking the first ever comprehensive head count since the days of the biblical census.</div>
          <Tab  sytle={{
            fontSize: '5em'
          }} menu={{ secondary: true, pointing: true, vertical: true }} panes={panes} />
          </Grid.Column>
          <Grid.Column width={3}/>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '8em',  marginBottom: '3em',height: '30vh' }}>
            <Header as='h3' style={{ fontSize: '3em' }}>
              Historical Graphic/Text
            </Header>
            Sharing the Story
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
     {/* <Segment style={{ padding: '5em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Igbo
            </Header>
            
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Pashtun
            </Header>
            
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Shinto
            </Header>
            
          </Grid.Column>
          
        </Grid.Row>
      </Grid>
    </Segment> */}
    <MultiCarousel />
      </div>
    )
  }
}
