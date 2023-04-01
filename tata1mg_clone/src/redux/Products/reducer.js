
import { Product_REQUEST_FAILURE,Product_REQUEST_PENDING,Vitamins_REQUEST_SUCCESS ,SkinCare_REQUEST_SUCCESS, Supplements_REQUEST_SUCCESS, Ayurveda_REQUEST_SUCCESS} from "./actionTypes";
const init={
    isLoading: false,
    isError: false,
    Vitamins: [],
    SkinCare:[],
    Supplements:[],
    Ayurveda:[]
}
export const reducer = (state=init,{type,payload}) => {
 switch(type){
    case Product_REQUEST_PENDING : 
    return {...state,isLoading:true}
    case Vitamins_REQUEST_SUCCESS :
    return {...state,isLoading:false,Vitamins:payload}
    case SkinCare_REQUEST_SUCCESS :
        return {...state,isLoading:false,SkinCare:payload}
        case Supplements_REQUEST_SUCCESS :
            return {...state,isLoading:false,Supplements:payload}
            case Ayurveda_REQUEST_SUCCESS :
                return {...state,isLoading:false,Ayurveda:payload}
    case Product_REQUEST_FAILURE :
    return {...state,isLoading:false,isError:true}
    default :return state
 }
}