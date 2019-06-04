import React, { Component } from "react";
import { Form } from "formsy-semantic-ui-react";
import {
  Button,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label,
  Container,
  List,
  Menu
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import Error from "../../utilities/Error";
import { SIGNIN_USER } from "../../querries/";
const itribeIcon = "../../itribe.png";

const initialState = {
  email: "",
  password: ""
};

const styles = {
  root: {
    marginTop: 18
    // padding: '0 24px 24px 24px',
  },

  customErrorLabel: {
    color: "#f00",
    textAlign: "center"
  }
};

export default class LoginValidation extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e, login) => {
    login().then(async ({ data }) => {
      // console.log("baked", data);
      // localStorage.setItem("token", data.login.token);
      //   await this.props.refetch();
      console.log('response', data.login)
      console.log('sessionId', data.login.sessionId)
      console.log('userName', data.login.user.firstName)
      this.clearState();
      this.props.history.push("/");
    });
  };

  validateForm = () => {
    const { email, password } = this.state;
    const isInvalid = !email || !password;
    return isInvalid;
  };

  render() {
    const { email, password } = this.state;
    const errorLabel = <Label color="red" pointing="left" />;

    return (
      <div className="login-form">
      <Segment
            textAlign="center"
            style={{
              // minHeight: 1200,
              // maxHeight: 1300,
              // padding: "1em 0em",
              width: "100%",
              backgroundColor: "#C1CDD4"
            }}
            vertical
          >
            <Menu
              fixed="top"
              inverted
              pointing
              size="large"
              style={{
                backgroundColor: "#004D8A"
              }}
            >
              <Container>
                <Menu.Item header>
                  <Image as={Link} to="/"
                    size="small"
                    src={itribeIcon}
                    style={{ marginRight: "2em" }}
                  />
                  Mapping the Return
                </Menu.Item>
                <Menu.Item as="a" header>
                  Home
                </Menu.Item>
                <Menu.Item position="right">
                  <Button color="teal" as={Link} to="/login">
                    Log In
                  </Button>
                  <span
                    style={{
                      paddingRight: "10px"
                    }}
                  />
                  <Button color="teal" as={Link} to="/signup">
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
              */}
        <style>
          {`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}
        </style>
        <Grid
          textAlign="center"
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#004D8A"
          }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h1" color="teal" textAlign="center">
              <Image src={itribeIcon} size="massive" style={{
                width:"20%",
                paddingBottom: "8px"
              }} /> Log-in to your account
            </Header>
            <Mutation mutation={SIGNIN_USER} variables={{ email, password }}>
              {(login, { data, loading, error }) => {
                return (
                  <Form
                    size="big"
                    onSubmit={e => this.handleSubmit(e, login)}
                  >
                    <Segment stacked>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail address"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                        validations="isEmail"
                        validationErrors={{
                          isEmail: "This is not a valid email",
                          isDefaultRequiredValue: "Email is Required"
                        }}
                        errorLabel={errorLabel}
                        style={styles.formElement}
                      />
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                        validations="minLength:8"
                        validationErrors={{
                          minLength: "Minimin of 8 characters",
                          isDefaultRequiredValue: "Password is Required"
                        }}
                        errorLabel={<div style={styles.customErrorLabel} />}
                        rootStyle={styles.formElement}
                      />

                      <Button type="submit" color="teal" fluid size="large">
                        Login
                      </Button>
                      {error && <Error error={error} />}
                    </Segment>
                  </Form>
                );
              }}
            </Mutation>
            <Message>
              New to us? <Button size="tiny" border="none" basic color="teal" style={{ marginLeft: "10px" }} as={Link} to="/singup">Sign Up</Button>
            </Message>
          </Grid.Column>
        </Grid>
        {/* <Segment
      inverted
      vertical
      style={{ padding: "3em 0em", backgroundColor: "#004D8A" }}
    >
        <div
          style={{
            margin: "0 auto",
            marginLeft: "120px"
          }}
        >
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Rabbi Harry Blog</List.Item>
                <List.Item as="a">Lost Tribes of Israel Class</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Check it Out" />
              <List link inverted>
                <List.Item as="a">Rabbi Harry Timeline</List.Item>
                <List.Item as="a">Lost Tribe Statistics</List.Item>
                <List.Item as="a">Jewish Atlas</List.Item>
                <List.Item as="a">Newsletter</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Check it Out" />
              <List link inverted>
                <List.Item as="a">Rabbi Harry Timeline</List.Item>
                <List.Item as="a">Lost Tribe Statistics</List.Item>
                <List.Item as="a">Jewish Atlas</List.Item>
                <List.Item as="a">Newsletter</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <div
                style={{
                  textAlign: "center"
                }}
              >
                <Button
                  size="massive"
                  color="teal"
                  style={{
                    marginTop: "20px",
                    paddingRight: "50px",
                    paddingLeft: "50px"
                  }}
                >
                  Contribute
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>        
    </Segment> */}
      </div>
    );
  }
}
