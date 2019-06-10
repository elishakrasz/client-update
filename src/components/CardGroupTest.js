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

const pashtun = "../../Pashtun/testpash.jpg"


export const CardGroupTest = () => {
  return (
    <div>
      <div style={{ padding: '3em'
 }} vertical>
      <Grid celled='internally' stackable>
        <div>
          {/* <Grid.Column  width={4} /> */}
        <Grid.Column style={{ padding: '2em', paddingBottom: '3em', paddingTop: '2em', backgroundImage: `url(${pashtun})`, width: '100%',  }} width={16}> 
           
          <Card.Group >
          <Card style={{ marginRight: '1em', opacity: "0.8",  }}>
    <Card.Content
      style={{
      }}
    >
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
        <Icon size="big" name='map signs' />
    </Card.Content>
      <Card.Description>
      iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel. Our mapping will cover both individuals and communities that are currently looking towards Israel as part of their identity.
      </Card.Description>
    </Card.Content>
   
    {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
  </Card>
          <Card style={{ marginRight: '1em',opacity: "0.8",}}>
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
        <Icon size="big" name='lightbulb outline' />
    </Card.Content>
      <Card.Description style={{
        backgroundImage: 'url`{pashtun}`'
      }}>
      We're building an online curriculum to reconnect the historic familial relationship between recognized Israelites/Jews & historic Israelites. Develop platforms to raise awareness among Lost Tribes about their Israelite origin and build bonds of trust.
      </Card.Description>
    </Card.Content>
   
    {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
  </Card>
          <Card style={{ marginRight: '1em', opacity: "0.8"}}>
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
        <Icon size="big" name='users' />
    </Card.Content>
      <Card.Description>
      Harness the power of Israeli ingenuity to improve the quality of life of communities in need all over the world. With local partners we can facilitate connections for water purification, food security/agrotec, healthcare, welfare and much more…
      </Card.Description>
    </Card.Content>
   
    {/* <Image floated="right" src={pashtun} wrapped ui={false} /> */}
  </Card>

          </Card.Group>
          </Grid.Column>
         
        </div>
      </Grid>
    </div>
    </div>
  )
}
