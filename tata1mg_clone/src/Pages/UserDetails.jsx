import React, { useState } from "react";
import styled from "styled-components";
import CheckDetails from "./CheckDetails";
import { Center } from "@chakra-ui/react";
const UserDetails = () => {
  const [state, setstate] = useState(false);
  const initval = {
    Name: "",
    Surname: "",
    Address: "",
    Phone_No: "",
    State: "",
    District: "",
    City: "",
    House_No: "",
    Pincode: "",
    Locality: "",
  };
  const [data, setdata] = useState(initval);
  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setstate(true);
  };

  return (
    <MAINDIV>
      <Center>
        <h1>USER DETAILS PAGE</h1>
      </Center>
      <DIV>
        <form action="" onSubmit={handleSubmit}>
          <DIV1>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handlechange}
              required
            />

            <input
              type="text"
              placeholder="Surname"
              name="Surname"
              onChange={handlechange}
              required
            />
            <input
              type="number"
              placeholder="Pincode"
              name="Pincode"
              onChange={handlechange}
              required
            />
            <input
              type="text"
              placeholder="Locality"
              name="Locality"
              onChange={handlechange}
            />
          </DIV1>
          <div>
            <DIV2>
              <input
                type="text"
                placeholder="Address (area & street)"
                name="Address"
                onChange={handlechange}
                required
              />
            </DIV2>
            <DIV3>
              <select name="State" onChange={handlechange}>
                <option value="">--Select State--</option>
                <option value="Delhi">Delhi</option>
                <option value="Aasam">Aasam</option>
                <option value="Bhihar">Bhihar</option>
                <option value="Goa">Goa</option>
                <option value="Kerala">Kerala</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Panjab">Panjab</option>
                <option value="Maharastra">Maharastra</option>
              </select>
              <input
                type="text"
                placeholder="District"
                name="District"
                onChange={handlechange}
              />
            
              <input
                type="text"
                placeholder="City"
                name="City"
                onChange={handlechange}
              />
                <input
                type="text"
                placeholder="House No"
                name="House_No"
                onChange={handlechange}
              />
              <input
                type="text"
                placeholder="Landmark"
                name="Landmark"
                onChange={handlechange}
              />
              <input
                type="number"
                placeholder="Phone No"
                name="Phone_No"
                required
                onChange={handlechange}
              />
            </DIV3>
            <DIV4>
              <h3>Address Type</h3>
              <input type="radio" />
              <label htmlFor="">Home (All Day Delivery)</label>
              <input type="radio" />
              <label htmlFor="">Work (Between 10AM to 5PM)</label>
            </DIV4>
            <BUTDIV>
              {" "}
              <button type="submit">SAVE AND CONTINUE</button>
            </BUTDIV>
          </div>
        </form>
      </DIV>
      {state && <CheckDetails data={data} />}
    </MAINDIV>
  );
};

export default UserDetails;

const MAINDIV = styled.div`
  border: 1px solid gray;
  h1 {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
const DIV = styled.div`
  width: 70%;
  margin: auto;
  text-align: left;
  div {
    input {
      border: 1px solid gray;
      padding: 5px;
    }
  }
`;
const DIV1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const DIV2 = styled.div`
  input {
    width: 100%;
    height: 50px;

    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const DIV3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  select {
    border: 1px solid gray;
    padding: 7px 30px;
  }
`;

const DIV4 = styled.div`
  padding: 10px;
  text-align: left;

  label {
    margin-left: 5px;
    margin-right: 10px;
  }
`;
const BUTDIV = styled.div`
  width: 100%;
  margin: auto;
  text-align: left;
  button {
    border: none;
    padding: 7px 40px;
    background: #f95d19;
    color: white;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 500;
  }
`;
