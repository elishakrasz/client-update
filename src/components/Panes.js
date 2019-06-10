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
export const panes = [
    { menuItem: 'Mapping', render: () => <Tab.Pane border="none" attached={true}><Grid>
        <Grid.Row textAlign="left">
          <Grid.Column width={6}>
          <Icon size="large" color='blue' name='map outline' />
            <Header
              style={{
                paddingBottom: ''
              }}
            >Collecting Data to Build the Story</Header>
            <span style={{
             
            }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
          </Grid.Column>
          <Grid.Column width={6}>
          <Icon size="large" color='blue' name='map outline' style={{
                paddingBottom: 'none'
              }} />
            <Header
              style={{
                paddingBottom: ''
              }}
            >Collecting Data to Build the Story</Header>
            <span style={{
             
            }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="left">
          <Grid.Column width={6}>
          <Icon size="large" color='blue' name='map outline' />
            <Header
              style={{
                paddingBottom: ''
              }}
            >Collecting Data to Build the Story</Header>
            <span style={{
            //  fontSize: '1.2em'
            }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
          </Grid.Column>
          <Grid.Column width={6}>
          <Icon color='blue' size="large" name='map outline' />
            <Header
              style={{
                paddingBottom: ''
              }}
            >Collecting Data to Build the Story</Header>
            <span style={{
            //  backgroundImage: `url(${pashtun})`
            }}>iTribe is creating a comprehensive database from across the globe of the multitudes of people who have had or are just discovering their desire to somehow join the phenomenon of Israel.</span>
          </Grid.Column>
        </Grid.Row>
      </Grid></Tab.Pane> },
    { menuItem: 'Education', render: () => <Tab.Pane attached={false}>
        <Grid>
        <Grid.Row textAlign="left">
          <Grid.Column width={6}>
          <Icon size="large" color='purple' name='shirtsinbulk' />
            <Header
              style={{
                paddingBottom: ''
              }}
            >Collecting Data to Build the Story</Header>
            <span style={{
             
            }}>Build an online curriculum to reconnect the historic familial relationship between recognized Israelites/Jews & historic Israelites.</span>
          </Grid.Column>
          <Grid.Column width={6}>
          <Icon size="large" color='purple' name='sticker mule' style={{
                paddingBottom: 'none'
              }} />
            <Header
              style={{
                paddingBottom: ''
              }}
            >Learning Origins</Header>
            <span style={{
             
            }}>Develop platforms to raise awareness among Lost Tribes about their Israelite origin and build bonds of trust.</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="left">
          <Grid.Column width={6}>
          <Icon size="large" color='purple' name='announcement' />
            <Header
              style={{
                paddingBottom: ''
              }}
            >Leadership & Cooperation</Header>
            <span style={{
             fontSize: '1em'
            }}>Establish a trusted board of local leaders in each Lost Tribe community, to be our partners; building long term, strategic relationships.
            </span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane> },
    { menuItem: 'Social Policy', render: () => <Tab.Pane attached={false}>
    <Grid>
    <Grid.Row textAlign="left">
      <Grid.Column width={6}>
      <Icon size="large" color='red' name='shirtsinbulk' />
        <Header
          style={{
            paddingBottom: ''
          }}
        >Collecting Data to Build the Story</Header>
        <span style={{
         
        }}>Build an online curriculum to reconnect the historic familial relationship between recognized Israelites/Jews & historic Israelites.</span>
      </Grid.Column>
      <Grid.Column width={6}>
      <Icon size="large" color='red' name='sticker mule' style={{
            paddingBottom: 'none'
          }} />
        <Header
          style={{
            paddingBottom: ''
          }}
        >Learning Origins</Header>
        <span style={{
         
        }}>Develop platforms to raise awareness among Lost Tribes about their Israelite origin and build bonds of trust.</span>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Grid.Column width={6}>
      <Icon size="large" color='red' name='announcement' />
        <Header
          style={{
            paddingBottom: ''
          }}
        >Leadership & Cooperation</Header>
        <span style={{
         fontSize: '1em'
        }}>Establish a trusted board of local leaders in each Lost Tribe community, to be our partners; building long term, strategic relationships.
        </span>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Tab.Pane> },
    { menuItem: 'Diplomacy', render: () => <Tab.Pane attached={false}>
    <Grid>
    <Grid.Row textAlign="left">
      <Grid.Column width={6}>
      <Icon size="large" color='green' name='shirtsinbulk' />
        <Header
          style={{
            paddingBottom: ''
          }}
        >Collecting Data to Build the Story</Header>
        <span style={{
         
        }}>Build an online curriculum to reconnect the historic familial relationship between recognized Israelites/Jews & historic Israelites.</span>
      </Grid.Column>
      <Grid.Column width={6}>
      <Icon size="large" color='green' name='sticker mule' style={{
            paddingBottom: 'none'
          }} />
        <Header
          style={{
            paddingBottom: ''
          }}
        >Learning Origins</Header>
        <span style={{
         
        }}>Develop platforms to raise awareness among Lost Tribes about their Israelite origin and build bonds of trust.</span>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Grid.Column width={6}>
      <Icon size="large" color='green' name='announcement' />
        <Header
          style={{
            paddingBottom: ''
          }}
        >Leadership & Cooperation</Header>
        <span style={{
         fontSize: '1em'
        }}>Establish a trusted board of local leaders in each Lost Tribe community, to be our partners; building long term, strategic relationships.
        </span>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Tab.Pane> }
  ]
  