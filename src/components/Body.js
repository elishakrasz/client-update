import React from 'react'
import {
    Grid,
    Segment,
    Header,
    Image,
    Button,
    Divider,
    Container
  } from "semantic-ui-react";
import Videos from './Videos';

export default () => {
  return (
      <div>
          <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '8em', height: '30vh' }}>
            <Header as='h3' style={{ fontSize: '3em' }}>
              Tagline
            </Header>
            That is what they all say about us
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '8em', height: '30vh' }}>
            <Header as='h3' style={{ fontSize: '3em' }}>
              Map
            </Header>
            That is what they all say about us
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '5em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
              Some Things We Do
            </Header>
            
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
              ?Jewish Atlas
            </Header>
            
          </Grid.Column>
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
