import { clear, setItem } from "../helpers/storage";
// reducer function

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      setItem("user", action.payload.UserData);
      return { ...state, UserData: action.payload.UserData, LoggedIn: true }
    case 'SIGN_OUT':
      clear();
      return { ...state, UserData: null, LoggedIn: false }
    case 'ADD_TO_CART':
      console.log("ADD_TO_CART",action.payload)
      let cart = state.cart;
      let found = cart.find((item)=>item.product.id == action.payload.data.product.id);
      if(found){
        found.qty += action.payload.data.qty
      }
      else
        cart.push(action.payload.data)
      return { ...state, cart:cart }
    case 'REMOVE_FROM_CART':
      console.log("action",action)
      let cart_products = state.cart;
      cart_products = cart_products.filter((item)=>item.product.id != action.payload.id)/
      console.log("car_products",cart_products)
      return { ...state, cart:state.cart.filter((item)=>item.product.id != action.payload.id) }
  }
};

export default mainReducer