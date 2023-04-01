import axios from "axios";
import * as types from "./actionTypes"

export const addToCart = (obj) =>(dispatch)=> {
  const {pageName,Id}=obj
  console.log(pageName,Id)
 axios.get(`https://quaint-fawn-dungarees.cyclic.app${pageName}/${Id}`)
 .then(res=>dispatch({type:types.ADD_TO_CART,payload:res.data}))
};


export const removeFromCart = (image) =>(dispatch) =>{
  dispatch({type:types.REMOVE_FROM_CART,payload:image})
}

export const updateCartItemQuantity = (obj) =>(dispatch)=> {
    dispatch({type:types.UPDATE_CART_ITEM_QUANTITY,payload:obj})

}