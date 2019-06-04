import React from 'react'
import {
    Grid,
    Segment,
    Container,
    List,
    Header,
    Input,
    Button
  } from "semantic-ui-react";
  

export const FooterTest = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Grid divided inverted stackable style={{
            marginLeft: '8em'
        }}>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='About Us' />
              <List link inverted>
                <List.Item as='a'>Our Mission</List.Item>
                <List.Item as='a'>History</List.Item>
                <List.Item as='a'>What We Do</List.Item>
                <List.Item as='a'>Our Values</List.Item>
              </List>
              <Header inverted as='h4' content='-' />
              <List link inverted>
                <List.Item as='a'>The Founder(s)</List.Item>
                <List.Item as='a'>The Team</List.Item>
                <List.Item as='a'>Management</List.Item>
                <List.Item as='a'>Partners</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='Education' />
              <List link inverted>
                <List.Item as='a'>A Brief History of the Lost Tribes</List.Item>
                <List.Item as='a'>Lost Tribes of Israel Course</List.Item>
                <List.Item as='a'>The Jewish Atlas</List.Item>
              </List>
              <Header inverted as='h4' content='Links' />
              <List link inverted>
                <List.Item as='a'>The Founder(s)</List.Item>
                <List.Item as='a'>The Team</List.Item>
                <List.Item as='a'>Management</List.Item>
                <List.Item as='a'>Partners</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4} style={{
                 marginRight: '50px'
            }}> 
              <Header as='h3' inverted>
                Get Our Newsletter
              </Header>
             
                <Input action="submit" color='blue' placeholder='Email' fluid />
              
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='Community' />
              <List link inverted>
                <List.Item as='a'>Join the iTribe Community</List.Item>
                <List.Item as='a'>Create Your Personal Page</List.Item>
                <List.Item as='a'>Contact Rabbi Harry</List.Item>
                <List.Item as='a'>FAQ</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as='h4' content='The Latest' />
              <List link inverted>
                <List.Item as='a'>Newsletter</List.Item>
                <List.Item as='a'>Projects</List.Item>
                <List.Item as='a'>Updates on New Communities</List.Item>
                <List.Item as='a'>Events</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
            <Button positive fluid style={{
              marginTop: '25px'
            }}><h4>Donate</h4></Button>
          </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment>
  )
}
