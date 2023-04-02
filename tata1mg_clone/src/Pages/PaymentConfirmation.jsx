import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { emptyCart } from "../redux/CartReducer/action";
const PaymentConfirmation = () => {
  const [state, setstate] = useState(false);
  const dispatch=useDispatch()
  const navigate = useNavigate();

  useEffect(()=>{
    if (!state) {
    
        toast("8785", {});
     
    }
  },[])
 
  // if (state) {
  //   setTimeout(function () {
  //     navigate("/");
  //   }, 5000);
  // }

  const handleclick = (e) => {
    dispatch(emptyCart)
    e.preventDefault();
    setTimeout(function () {
      setstate(true);
    }, 500);
  };

  return (
    <>
      {!state ? (
        <DIV>
          <form onSubmit={handleclick}>
            {" "}
            <input
              required
              style={{
                borderBottom: "2px solid #EA4A28",
                width: "80%",
                height: "30px",
                padding: "10px",
                marginTop: "40px",
                outline: "none",
              }}
              type="text"
              placeholder="Enter Your Otp"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </DIV>
      ) : (
        <DIV2>
          <img
            src="http://dgtlmrktng.s3.amazonaws.com/go/emails/generic-email-template/tick.png"
            alt=""
          />
          <h1>Payment received</h1>
          <p>Your transaction was successful!</p>
         <button onClick={()=> navigate("/")}>Continue To Shopping...</button>
        </DIV2>
      )}
    </>
  );
};

export default PaymentConfirmation;

const DIV = styled.div`
  width: 30%;
  margin: auto;
  height: auto;

  margin-top: 100px;

  input {
    borderbottom: 2px solid #ea4a28;
    width: 70%;
    margintop: 40px;
    outline: none;
    text-align: center;
  }
  button {
    width: 60%;
    border: none;
    padding: 7px 40px;
    background: #f95d19;
    color: white;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 500;
    margin-left: 10%;
    
  }
`;
const DIV2 = styled.div`
  width: 30%;
  margin: auto;
  height: auto;
  margin-left: 38%;
  margin-top: 50px;

  h1 {
    font-weight: 600;
    font-size: 30px;
    margin-left: 10%;
  }
  img {
    margin-left: 30%;
  }
  p {
    font-weight: 500;
    font-size: 15px;
    margin-left: 12%;
  }
  button{
    margin-top: 50px;
    margin-bottom: 100px;
    margin-left: 13%;
   
    background:#0BA0BE;
    color:white;
    font-weight: 500;
    font-size: 15px;
    padding:5px 30px;
  }
`;
