import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const PaymentConfirmation = () => {
  
const [state,setstate]=useState(false)
const navigate=useNavigate()
if(!state){
    setTimeout(function(){
        toast('Otp is 8787', {
          
          });
          
    }, 3000);
    
}
if(state){
    setTimeout(function(){
        navigate("/userDetails")
          
    }, 5000);
    
}

const handleclick=(e)=>{
    e.preventDefault()
    setTimeout(function(){
      setstate(true)
    }, 500);
}


  return (
    <>
   {!state? <DIV>
    <form onSubmit={handleclick}>  <input required style={{borderBottom:'2px solid #EA4A28',width:"80%",height:"30px",padding:"10px",marginTop:"40px",outline:'none'}} type="text" placeholder='Enter Your Otp' /><br/>
     <button type='submit' >Submit</button></form>
   
    </DIV>:
     
    <DIV2>
        
    <img src="http://dgtlmrktng.s3.amazonaws.com/go/emails/generic-email-template/tick.png" alt="" />
    <h1>Payment received</h1>
    <p>	
Your transaction was successful!</p>
<h4>You will redirect to Home Page after 5sec . . .</h4>
    </DIV2>}
     </>
    
  )
}

export default PaymentConfirmation

const DIV=styled.div`

width:30%;
margin:auto;
height:auto;

margin-Top:100px;


input{
    borderBottom:2px solid #EA4A28;
    width:70%;
    marginTop:40px;
    outline:none
}
button{
    width:60%;
    border:none;
    padding:7px 40px;
    background:#F95D19;
    color:white;
    margin-top:30px;
    margin-bottom:30px;
    font-weight: 500;
}
`
const DIV2=styled.div`
width:30%;
margin:auto;
height:auto;

margin-Top:50px;

h1{
    font-weight: 600;
    font-size: 30px;
}
img{
    margin-left:40%;
}
p{
    font-weight: 500;
    font-size: 15px; 
}
h4{
    margin-Top:5px; 
}
`