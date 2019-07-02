import React from "react";
import {
  Grid,
  Button,
  Divider,
  Menu,
  Dropdown,
  Image
} from "semantic-ui-react";

const logo = "../../itribe.png";
const harry = "http://www.netiv.net/wp-content/uploads/2017/06/Screen-Shot-2017-06-27-at-17.26.20.png"
export const HeaderTest = () => {
  return (
    <div
      style={{
        backgroundColor: "#144A75",
        height: "8vh",
        color: "white",
        textAlign: "center"
      }}
    >
      <Grid>
        <style>
          {`
         p {
           align-content: center;
           background-color: #144A75;
           color: #fff;
           display: flex;
           flex-direction: row;
           justify-content: flex-start;
           align-items: center;
           min-height: 6vh;
         }
         a {
           margin-right: '25px'
         }
         p > span {
           opacity: 0.4;
           text-align: center;
         }
       }
       `}
        </style>
        <Grid.Row>
          <Grid.Column width={2}>
            <p></p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>
              <Image src={logo} size="tiny" />
            </p>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>
              <Menu secondary inverted>
              <Dropdown text="Home" pointing icon="false" className="link item" />
                <Dropdown text="About Us" pointing icon="false" className="link item">
                  <Dropdown.Menu>
                          <Dropdown.Item>Our Mission (Vision)</Dropdown.Item>
                          <Dropdown.Item>History</Dropdown.Item>
                          <Dropdown.Item>What We Do</Dropdown.Item>
                          <Dropdown.Item>Values</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Header></Dropdown.Header>
                          <Dropdown.Item>The Founder(s)</Dropdown.Item>
                          <Dropdown.Item>The Team</Dropdown.Item>
                          <Dropdown.Item>Management</Dropdown.Item>
                          <Dropdown.Item>Partners</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text="Education" pointing icon="false" className="link item">
                  <Dropdown.Menu>
                          <Dropdown.Item>A Brief History of the Lost Tribes</Dropdown.Item>
                          <Dropdown.Item>Lost Tribes of Israel Course</Dropdown.Item>
                          <Dropdown.Item>The Jewish Atlas</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text="Community" pointing icon="false" className="link item">
                  <Dropdown.Menu>
                          <Dropdown.Item>iTribe Global Community</Dropdown.Item>
                          <Dropdown.Item>Personal Page</Dropdown.Item>
                          <Dropdown.Item>Contact Us</Dropdown.Item>
                          <Dropdown.Item>FAQ</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text="The Latest" pointing icon="false" className="link item">
                  <Dropdown.Menu>
                          <Dropdown.Item>Newsletter</Dropdown.Item>
                          <Dropdown.Item>Projects</Dropdown.Item>
                          <Dropdown.Item>New Communities</Dropdown.Item>
                          <Dropdown.Item>Events</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p><Button positive fluid style={{
              marginRight: '50px'
            }}>Donate</Button></p>
          </Grid.Column>
          <Grid.Column width={2}>
          <p><Menu.Item position='right'>
                  <Button as='a'inverted basic color="white">
                    Log in
                  </Button>
                  <Button as='a' inverted basic color="white" style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item></p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p><Image
              avatar 
              src={harry}
            /></p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
