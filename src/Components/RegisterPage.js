import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

class RegisterComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirm: "",
      isSubmitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this); // handle submit
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ isSubmitted: true });

    const { name, password, confirm } = this.state;

    if (password !== confirm) {
      alert("Xác nhận mật khẩu không đúng");
    } else {
      if (name && password) {
        this.props.register(name, password);
      }
    }
  }

  render() {
    return (
      <div style={{ paddingTop: "50px", textAlign: "center" }}>
        <h3 className="font-weight-bold mb-5">Welcome to TIC TAC TOE game</h3>
        <Card className="mx-auto">
          <Card.Header className="card-header">Register account</Card.Header>
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
              <Form.Group as={Row} controlId="formPlaintextConfirm" className>
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-unlock-alt " />
                  </span>
                </div>
                <Col sm="9">
                  <Form.Control
                    type="confirm"
                    name="confirm"
                    onChange={this.handleChange}
                    placeholder="confirm"
                  />
                </Col>
              </Form.Group>
              <div className="text-right">
                <Button variant="warning" text="light" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center links">
              Already have an account?
              <NavLink to="/login">
                <button className="registerBtn">Back to Login</button>
              </NavLink>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default RegisterComp;
