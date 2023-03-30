
import { Product_REQUEST_FAILURE,Product_REQUEST_PENDING,Product_REQUEST_SUCCESS } from "./actionTypes";
const init={
    isLoading: false,
    isError: false,
    Vitamins: [],
}
export const reducer = (state=init,{type,payload}) => {
 switch(type){
    case Product_REQUEST_PENDING : 
    return {...state,isLoading:true}
    case Product_REQUEST_SUCCESS :
        return {...state,isLoading:false,Vitamins:payload}
        case Product_REQUEST_FAILURE :
            return {...state,isLoading:false,isError:true}
    default :return state
 }
}