import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import csvToJson from "convert-csv-to-json";
import { SimpleMap } from "./SimpleMap";
import TestMap from "./TestMap";
import Papa from "papaparse";
import { HeatMap } from "./HeatMap";
const blankImage = "https://react.semantic-ui.com/images/wireframe/image.png";
const csvFile = "../../static/theWorld.csv";
const jsonFile = "../../static/myOutputFile.json";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <div>
    <Grid>
      <Grid.Row
        style={
          {
            // backgroundColor: "#F3F6FA"
          }
        }
      >
        <Grid.Column width={14}>
          <Grid.Row>
            <Header as="h3" style={{ fontSize: "3em", marginTop: "1em", marginBottom: "0.5em" }}>
              {/* Creating Community by Discovering our Shared Tradition through
              Data Driven Research */}
              Uniting the Scattered Peoples of Israel
            </Header>
            <h3
              style={{
                fontSize: "2em",
                marginRight: "5em",
                marginLeft: "5em",
                color: 'black',
                fontWeight: '200'
              }}
            >
              {/* iTribe is activating a unique and untapped network of tens of
              millions of Israel supporters whose members self-identify as being
              from the Lost Tribes of Israel */}
              {/* iTribe is cultivating a network of individuals that self-identify as having a
              connection to the practices and traditions of Israel */}
              iTribe is creating a network of individuals that self-identify as
              descendents of the Lost Tribes of Israel and mapping their story
              in an entirely new way
            </h3>
          </Grid.Row>
          <SimpleMap />
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
    {/* <SimpleMap /> */}
  </div>
);

let config = {
  delimiter: ",", // auto-detect
  newline: "", // auto-detect
  quoteChar: '"',
  escapeChar: '"',
  header: true,
  transformHeader: undefined,
  dynamicTyping: false,
  preview: 0,
  encoding: "",
  worker: false,
  comments: false,
  step: undefined,
  complete: undefined,
  error: undefined,
  download: false,
  downloadRequestHeaders: undefined,
  skipEmptyLines: false,
  chunk: undefined,
  fastMode: undefined,
  beforeFirstChunk: undefined,
  withCredentials: undefined,
  transform: undefined,
  delimitersToGuess: [",", "\t", "|", ";", Papa.RECORD_SEP, Papa.UNIT_SEP]
};
HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  componentDidMount() {
    // csvToJson.generateJsonFileFromCsv(csvFile, jsonFile)
    const alex = Papa.parse(csvFile, config);
    console.log("alex", alex);
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 700,
              padding: "1em 0em",
              backgroundColor: "#fff",
              fontFamily: 'europa, sansSerif' 
            }}
            vertical
          >
            <Menu
              display="flex"
              fixed={fixed ? "top" : null}
              inverted="true"
              pointing={!fixed}
              secondary={!fixed}
              textAlign="center"
              size="large"
              style={{
                backgroundColor: "#004D8A"
              }}
            >
              <Container>
                {/* <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
                 */}

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
                          <Dropdown.Item>Updates</Dropdown.Item>
                          <Dropdown.Item>Events</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item position="right">
                  <Button as="a" inverted="fixed">
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted="fixed"
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{
            backgroundColor: "#004D8A"
          }}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">About Us</Menu.Item>
          <Menu.Item as="a">Education</Menu.Item>
          <Menu.Item as="a">Community</Menu.Item>
          <Menu.Item as="a">The Latest</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            // inverted
            textAlign="center"
            style={{
              minHeight: 350,
              padding: "1em 0em",
              backgroundColor: "#fff"
            }}
            vertical
          >
            <Container>
              <Menu
                inverted
                pointing
                secondary
                size="large"
                style={{ backgroundColor: "#004D8A" }}
              >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button inverted="fixed" as="a">
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted="fixed"
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const TheValley = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em", }} vertical>
      <Grid stackable verticalAlign="middle">
        <Grid.Row centered>
          {/* <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </Grid.Column> */}
          <Grid.Column width={4}>
            <Image bordered rounded size="medium" src={blankImage} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image bordered rounded size="medium" src={blankImage} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image bordered rounded size="medium" src={blankImage} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src={blankImage} />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment
      inverted
      vertical
      style={{ padding: "5em 0em", backgroundColor: "#004D8A" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default TheValley;
