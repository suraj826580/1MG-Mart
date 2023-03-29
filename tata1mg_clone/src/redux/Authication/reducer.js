import { AUTH_REQUEST_SUCCESS, LOGIN_REQUEST_SUCCESS, SIGNUP_REQUEST_SUCCESS } from "./actionTypes"

const init={
    Auth:false,
    login:false,
    signup:false,
    token:null
}

export const reducer=(state=init,{type,payload})=>{
 switch(type){
    case LOGIN_REQUEST_SUCCESS:return {...state,login:true,signup:true}
    case SIGNUP_REQUEST_SUCCESS: return{...state,signup:true,login:false}
    case AUTH_REQUEST_SUCCESS: return {...state,Auth:true,login:true,signup:true}
    default: return state
 }
}