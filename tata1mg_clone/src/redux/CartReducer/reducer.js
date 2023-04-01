import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_ITEM_QUANTITY } from "./actionTypes"

const initalState={
    cart: [],
 }
  export const reducer =(state=initalState,{type,payload})=>{
switch(type){
  
  case ADD_TO_CART :
    const existingItem = state.cart.find(item => item.image === payload.image);
    if(!existingItem){
  return{
    ...state,cart:[...state.cart,payload]
  }
}
  case REMOVE_FROM_CART:return {
    ...state,
    cart: state.cart.filter((item) => item.id !== payload),
  };
  case UPDATE_CART_ITEM_QUANTITY:
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.image === payload.image
          ? { ...item, quantity: payload.value }
          : item
      ),
    };
    default : return state
}
  }