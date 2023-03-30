import axios from "axios";
import { Product_REQUEST_FAILURE,Product_REQUEST_PENDING,Product_REQUEST_SUCCESS } from "./actionTypes";

export const VitaminsData=(dispatch)=>{
    dispatch({type:Product_REQUEST_PENDING})
    axios.get(`https://quaint-fawn-dungarees.cyclic.app/vitamins`)
    .then((res)=>dispatch({type:Product_REQUEST_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:Product_REQUEST_FAILURE}))
}