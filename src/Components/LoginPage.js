import React from "react";
import "../index.css";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      name: "",
      password: "",
      isSubmitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ isSubmitted: true });

    const { name, password } = this.state;

    if (name === "") alert("Please input username");
    else if (password === "") alert("Please input password");
    else {
      this.props.login(name, password);
    }
  }

  render() {
    return (
      <div style={{ paddingTop: "50px", textAlign: "center" }}>
        <h3 className="font-weight-bold mb-5">Welcome to TIC TAC TOE game</h3>
        <Card className="mx-auto">
          <Card.Header className="card-header">
            Login to TIC-TAC-TOE
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    placeholder="username"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword" className>
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-key" />
                  </span>
                </div>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="password"
                  />
                </Col>
              </Form.Group>
              <div className="text-right">
                <Button variant="warning" text="light" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <NavLink to="/register">
                <button className="registerBtn">Register</button>
              </NavLink>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
