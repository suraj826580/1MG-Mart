import axios from "axios";
import { Product_REQUEST_FAILURE,Product_REQUEST_PENDING,Vitamins_REQUEST_SUCCESS ,SkinCare_REQUEST_SUCCESS, Supplements_REQUEST_SUCCESS, Ayurveda_REQUEST_SUCCESS} from "./actionTypes";


export const VitaminsData=(params)=>(dispatch)=>{
    dispatch({type:Product_REQUEST_PENDING})
    axios.get(`https://quaint-fawn-dungarees.cyclic.app/vitamins`,params)
    .then((res)=>dispatch({type:Vitamins_REQUEST_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:Product_REQUEST_FAILURE}))
}

export const SkinCare=(params)=>(dispatch)=>{
    dispatch({type:Product_REQUEST_PENDING})
    axios.get(`https://quaint-fawn-dungarees.cyclic.app/skin_care`,params)
    .then((res)=>dispatch({type:SkinCare_REQUEST_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:Product_REQUEST_FAILURE}))
}

export const Supplements=(params)=>(dispatch)=>{
    dispatch({type:Product_REQUEST_PENDING})
    axios.get(`https://quaint-fawn-dungarees.cyclic.app/supplements`,params)
    .then((res)=>dispatch({type:Supplements_REQUEST_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:Product_REQUEST_FAILURE}))
}

export const Ayurveda=(params)=>(dispatch)=>{
    dispatch({type:Product_REQUEST_PENDING})
    axios.get(`https://quaint-fawn-dungarees.cyclic.app/ayurveda_medicine`,params)
    .then((res)=>dispatch({type:Ayurveda_REQUEST_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:Product_REQUEST_FAILURE}))
}