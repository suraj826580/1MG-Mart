import axios from "axios"
import { LOGIN_REQUEST_SUCCESS, SIGNUP_REQUEST_SUCCESS } from "./actionTypes"

export const SignUp=(obj)=>(dispatch)=>{
axios.post(`https://reqres.in/api/register`,obj)
.then((res)=> dispatch({type:SIGNUP_REQUEST_SUCCESS}))
.catch((err)=>console.log(err))
}
