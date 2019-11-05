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
    return <div></div>;
  }
}

export default RegisterComp;
