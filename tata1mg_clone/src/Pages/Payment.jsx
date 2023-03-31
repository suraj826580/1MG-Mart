import React from "react";
import Card from "react-credit-cards-2";
import styled from "styled-components";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";

import "react-credit-cards-2/es/styles-compiled.css";
import { Link } from "react-router-dom";

export default class Payment extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, formData } = this.state;

    return (
      <MAINDIV key="Payment">
        <div className="App-payment">
          <h1>PAYMENT PAGE</h1>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <DIV>
              <div className="form-group">
                <input
                  style={{
                    border: "1px solid gray",
                    marginTop: "20px",
                    width: "80%",
                    padding: "3px",
                  }}
                  type="tel"
                  name="number"
                  className="form-control"
                  placeholder="Card Number"
                  pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="form-group">
                <input
                  style={{
                    border: "1px solid gray",
                    marginTop: "10px",
                    width: "80%",
                    padding: "3px",
                  }}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <DIV2 className="row">
                <div className="col-6">
                  <input
                    style={{
                      width: "150px",
                      border: "1px solid gray",
                      marginTop: "10px",
                      padding: "3px",
                    }}
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>

                <div className="col-6">
                  <input
                    style={{
                      width: "142px",
                      border: "1px solid gray",
                      marginTop: "10px",
                      padding: "3px",
                    }}
                    type="tel"
                    name="cvc"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
              </DIV2>

              <div className="form-actions">
                <button className="btn btn-primary btn-block">PAY</button>
              </div>
            </DIV>
          </form>

          {formData && (
            <DETAILS className="App-highlight">
              <h1>Your Details</h1>
              {formatFormData(formData).map((d, i) => (
                <div>
                  <div key={i}>{d}</div>
                </div>
              ))}
              <Link to="/confirmation">
                <button
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    padding: "5px 50px",
                  }}>
                  CONTINUE
                </button>
              </Link>
            </DETAILS>
          )}
          <hr style={{ margin: "60px 0 30px" }} />
        </div>
      </MAINDIV>
    );
  }
}

const MAINDIV = styled.div`
  h1 {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
const DIV = styled.div`
  margin-left: 38%;
  width: 30%;

  padding: 10px;

  div {
    text-align: left;

    button {
      background: #00bfff;
      color: white;
      padding: 7px 37%;
      margin-top: 20px;
    }
  }
`;

const DIV2 = styled.div`
  display: flex;
  gap: 20px;
`;

const DETAILS = styled.div`
  width: 25%;
  margin: auto;
  border: 1px solid gray;
`;
