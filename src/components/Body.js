import React from 'react'
import {
    Grid,
    Segment,
    Header,
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
import Videos from './Videos';
import GlobeTest from './maps/GlobeTest';

const pashtun = "../../Pashtun/testpash.jpg"
const panes = [
  { menuItem: 'Mapping', render: () => <Tab.Pane border="none" attached={true}><Grid>
      <Grid.Row textAlign="left">
        <Grid.Column width={6}>
        <Icon color='blue' name='map outline' />
          <Header
            style={{
              paddingBottom: '1em'
            }}
          >Collecting Data to Build the Story</Header>
          <span style={{
           
          }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
        </Grid.Column>
        <Grid.Column width={6}>
        <Icon color='blue' name='map outline' />
          <Header
            style={{
              paddingBottom: '1em'
            }}
          >Collecting Data to Build the Story</Header>
          <span style={{
           
          }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="left">
        <Grid.Column width={6}>
        <Icon color='blue' name='map outline' />
          <Header
            style={{
              paddingBottom: '1em'
            }}
          >Collecting Data to Build the Story</Header>
          <span style={{
           
          }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
        </Grid.Column>
        <Grid.Column width={6}>
        <Icon color='blue' name='map outline' />
          <Header
            style={{
              paddingBottom: '1em'
            }}
          >Collecting Data to Build the Story</Header>
          <span style={{
           
          }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
        </Grid.Column>
      </Grid.Row>
    </Grid></Tab.Pane> },
  { menuItem: 'Education', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Socail Policy', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Diplomacy', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

export default () => {
  return (
      <div>
          <div style={{ padding: '0em' }} vertical>
      <Grid celled='internally' stackable>
      <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '3em', paddingTop: '12em' }}>
            <Header as='h3' style={{ fontSize: '4em' }}>
              Connecting the Lost Tribes
            </Header>
            <span style={{ fontSize: '1.5em' }}>iTribe is in the process of activating a unique and untapped network of tens of millions of Israel supporters whose members self-identify as being from the Lost Tribes of Israel</span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '0em', height: 'auto' }}>
            <GlobeTest />
            {/* <Header as='h3' style={{ fontSize: '3em' }}>
              Map
            </Header>
            That is what they all say about us */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '3em' }} vertical>
      <Grid celled='internally' stackable>
        <Grid.Row>
        <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} width={10} textAlign='center'> 
            <Header as='h3' style={{ paddingBottom: '1em', fontSize: '3em' }}>
              What We Do
            </Header>
          <Card.Group >
          <Card style={{ marginRight: '1em'}}>
    <Card.Content>
      <Card.Header style={{
        paddingTop: '1.5em',
        fontSize: '2em'
      }}>Mapping the Story</Card.Header>
      <Card.Meta>
        {/* <span className='date'>Joined in 2015</span> */}
      </Card.Meta>
       <Card.Content extra style={{
         paddingTop: '1em',
         paddingBottom: '1em'
       }}>
        <Icon name='map signs' />
    </Card.Content>
      <Card.Description>
      iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel. Our mapping will cover both individuals and communities that are currently looking towards Israel as part of their identity.
      </Card.Description>
    </Card.Content>
   
    {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
  </Card>
          <Card style={{ marginRight: '1em'}}>
    <Card.Content>
      <Card.Header style={{
        paddingTop: '1.5em',
        fontSize: '2em'
      }}>Education</Card.Header>
      <Card.Meta>
        {/* <span className='date'>Joined in 2015</span> */}
      </Card.Meta>
       <Card.Content extra style={{
         paddingTop: '1em',
         paddingBottom: '1em'
       }}>
        <Icon name='lightbulb outline' />
    </Card.Content>
      <Card.Description style={{
        backgroundImage: 'url`{pashtun}`'
      }}>
      We're building an online curriculum to reconnect the historic familial relationship between recognized Israelites/Jews & historic Israelites. Develop platforms to raise awareness among Lost Tribes about their Israelite origin and build bonds of trust.
      </Card.Description>
    </Card.Content>
   
    {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
  </Card>
          <Card style={{ marginRight: '1em'}}>
    <Card.Content>
      <Card.Header style={{
        paddingTop: '1.5em',
        fontSize: '2em'
      }}>Social Policy</Card.Header>
      <Card.Meta>
        {/* <span className='date'>Joined in 2015</span> */}
      </Card.Meta>
       <Card.Content extra style={{
         paddingTop: '1em',
         paddingBottom: '1em'
       }}>
        <Icon name='users' />
    </Card.Content>
      <Card.Description>
      Harness the power of Israeli ingenuity to improve the quality of life of communities in need all over the world. With local partners we can facilitate connections for water purification, food security/agrotec, healthcare, welfare and much more…
      </Card.Description>
    </Card.Content>
   
    {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
  </Card>

          </Card.Group>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '1em' }} width={5} textAlign='center'>
        
            <Header as='h3' style={{ fontSize: '3em' }} >
              Jewish Atlas
            </Header>

            {/* <Tab menu={{ borderless: true, secondary: true, vertical: true,pointing: true }} as="h3" panes={panes} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
        <Grid.Column width={3}/>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '8em',  marginBottom: '3em',height: 'auto' }}>
          <Header as='h3' style={{ fontSize: '3em' }}>
              What We Do
            </Header>
            <div  style={{ fontSize: '1.5em', paddingBottom: '2em' }}>We are taking the first ever comprehensive headcount since the days of the biblical census.</div>
          <Tab menu={{ secondary: true, pointing: true, vertical: true }} panes={panes} />
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
     <Segment style={{ padding: '5em' }} vertical>
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
    </Segment>
      </div>
  )
}
