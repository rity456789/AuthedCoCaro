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

    if (name && password) {
      this.props.login(name, password);
    }
  }

  render() {
    <div></div>;
  }
}

export default LoginPage;
