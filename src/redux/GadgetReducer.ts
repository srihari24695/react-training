import type { CartItem } from "../model/CartItem"
import { createSlice, type Slice, type PayloadAction } from "@reduxjs/toolkit"

export type GadgetState = {
    cart: CartItem[]
}

const initialState: GadgetState = {
    cart: []
}

// since the state is mutable, we need to copy the state and return a new state object.
// to reduce this effort Redux toolkit is provinding a special function called createSlice which will take care of this immutability and we can write the reducer logic in a mutable way 
// and it will return a new state object with the updated state. It will also generate the action creators for us based on the reducers we define in the slice.

const slice = createSlice({
    name: "gadgetsSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload); // this will mutate the state which is not recommended in redux, so we need to return a new state object with the updated cart array
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(item => item.product.id === action.payload); // finding the index of the cart item with the given product id
            if(index !== -1){
                state.cart.splice(index, 1); // removing the cart item from the cart array
            }
        },
        clearCart: (state) => {
            state.cart.splice(0, state.cart.length); // removing all the cart items from the cart array
        }
    }
})

export const gadgetsReducer = slice.reducer; // exporting the reducer function to be used in the store

export const {addToCart, removeFromCart, clearCart} = slice.actions; // exporting the action creators to be used in the components


// below is the traditional way of writing reducer


// addtocart => (type: "addtocart", payload: CartItem)
// removecart => (type: "removecart", productId: number)
// clearcart => (type: "clearcart")
// export const gadgetsReducer = (state = initialState, action) => {

// if(action.type === "addtocart" && action.payload){
//     // state.cart.push(action.payload); // this will mutate the state which is not recommended in redux, so we need to return a new state object with the updated cart array
//     const cart = [...state.cart]; // creating a copy of the cart array from the state
//     cart.push(action.payload); // adding the new cart item to the cart array
//     return {cart: cart}; // returning a new state object with the updated cart array
// }
//     return state;
// }