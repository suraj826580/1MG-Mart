import React from 'react'
import styled from 'styled-components'
import { Link, Navigate } from 'react-router-dom'
const CheckDetails = ({data}) => {

    // const handleclick=(e)=>{
    //     e.preventDefault()
    //    return  <Navigate to="/paymentpage"/>
    // }
  return (

    <>
    <DIV>
        <DIV1> <h1>Check Your Details</h1>
      <p >Name : {data.Name} {data.Surname}</p>
      <p>Address : {data.Address}</p>
      <p>State : {data.State}</p>
      <p>District: { data.District}</p>
      <p>Taluka : {data.Taluka}</p>
      <p>City : {data.City}</p>
      <p>Phone No : {data.Phone_No}</p>
      <p>LandMark : {data.Landmark}</p>
      <p>Pincode : {data.Pincode}</p></DIV1>
      
    
    </DIV>
    <BUTDIV> <button ><Link to="/paymentpage">Procced To Payment</Link></button></BUTDIV>
    </>
  )
}

export default CheckDetails

const DIV=styled.div`
border:1px solid gray;
background:green;
color:white;
width:70%;
height:auto;
margin:auto;

p{
    font-weight: 500;
    font-size: 17px;
    padding:5px;
}

`
const DIV1=styled.div`

text-align: left;
padding:20px;
margin-left:30px;
`
const BUTDIV=styled.div`
width:70%;
margin:auto;
text-align: left;
button{
    border:none;
    padding:7px 40px;
    background:#F95D19;
    color:white;
    margin-top:30px;
    margin-bottom:30px;
    font-weight: 500;
}
`