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
import EagleMap from './Mapping';
import { SimpleMap } from './maps/SimpleMap';
import SidebarExample from './maps/SidebarExample';

 
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
      <Grid  stackable style={{
        //  marginTop: '2em',
        //  marginBottom: '8em',
         height: '85vh'
      }}>
        <Grid.Row>
          <Grid.Column width={12} style={{ paddingBottom: '0em', marginTop: '5em', height: '800px', width: '1600px' }}>
            <SimpleMap />
            {/* <SidebarExample /> */}
            {/* <div id='mapid' style={{
              height: '180px'
            }}>

            </div> */}
            {/* <Header as='h3' style={{ fontSize: '3em' }}>
              What We Do
            </Header> */}
          </Grid.Column>
          <Grid.Column width={3} style={{ paddingBottom: '0em', paddingTop: '8em', height: 'auto', marginRight: '3em' }}>
            {/* <Header as='h3' style={{ fontSize: '3em' }}>
              What We Do
            </Header> */}
            <Form unstackable onSubmit={this.handleSubmit}>
    <Form.Group>
      <Form.Input label='Email' placeholder='Email' name='email'/>
      <Form.Input label='Location' placeholder='Location' name='location'/>
      

    </Form.Group>
    {/* <Form.Group>
      <Topic />
      </Form.Group> */}
    <Form.Checkbox label='I agree to the Terms and Conditions*' />
    <Button type='submit'
    >Submit</Button>
  </Form>
            {/* <Connectitribe /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    {/* <CardGroupTest /> */}
    <div style={{ padding: '0em', backgroundColor: '#f3f5f9', marginTop: '8em', marginBottom: '5em', height: '30vh' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center' style={{ height: '40vh'  }}>
          <Grid.Column width={5} style={{ paddingBottom: '5em', paddingTop: '4em' }}>
            <Header as='h3' style={{ fontSize: '1.5em', paddingRight: '1em', paddingLeft: '1em' }}>
            Our approach is to work with each community where they are and as they are; we are agnostic to national and religious identity.
            </Header>
            <span style={{ fontSize: '1.1em' }}>
            We seek to create connections based on self-declared historic family (national) relationships and to embrace all people, creating an alliance with those who wish to connect to a common heritage.
            </span>
          </Grid.Column>
          <Grid.Column width={5} style={{ paddingBottom: '5em', paddingTop: '4em'}}>
            <Header as='h3' style={{ fontSize: '1.5em' }}>
            iTribe facilitates nations living side by creating a common space for people to share and connect. 
            </Header>
            <span style={{ fontSize: '1em' }}>
            Through building a socially driven digital platform with a focus in the areas of research, education, sustainability, advocacy, diplomacy and security for these ‘Lost Tribes’ communities, an opportunity to create a global voice arises.
            </span>
          </Grid.Column>
          <Grid.Column width={5} style={{ paddingBottom: '5em', paddingTop: '4em' }}>
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
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '8em',  marginBottom: '3em',  backgroundColor: '#314351', height: 'auto',
  }}>
          <Header as='h3' style={{ fontSize: '3em' }}>
              What We Do
            </Header>
            <div  style={{ fontSize: '1.5em', paddingBottom: '3em', marginBottom: '2em' }}>We are taking the first ever comprehensive head count since the days of the biblical census.</div>
          <Tab  sytle={{
            fontSize: '5em',
        
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
