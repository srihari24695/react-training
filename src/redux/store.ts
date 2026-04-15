import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { gadgetsReducer } from "./GadgetReducer";

{/* The below line will combine the one or more reducers*/}
const reducer = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})

export const store = configureStore({reducer: reducer});

export type AppState = ReturnType<typeof store.getState>; // to get the type of the state from the redux store, we can use the ReturnType utility type to get the return type of the getState method of the store, which is the type of the state in the redux store. We can use this type in the useSelector hook to get the state from the redux store.
export type AppDispatch = typeof store.dispatch; // to get the type of the dispatch function from the redux store, we can use the typeof operator to get the type of the dispatch function of the store, which is the type of the dispatch function in the redux store. We can use this type in the useDispatch hook to get the dispatch function from the redux store.