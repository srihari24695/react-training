import {createStore} from 'redux';

// initial state
const state = {
    count : 5,
    message: "Hello redux"
}

// reducer
const reducer = (currentState = state, action) => {

    if(action.type === "increment_ctr"){
            return {
                ...currentState,
                count: currentState.count + 1
        }
    }

     if(action.type === "decrement_ctr"){
            return {
                ...currentState,
                count: currentState.count - 1
        }
    }
      if(action.type === "update_ctr"){
            return {
                ...currentState,
                count: action.value
        }
    
    }               

    // return updated state
    return currentState;
}

// store
const store = createStore(reducer);
console.log("state", store.getState());


// subscribe
store.subscribe(() => {
    console.log("State updated: ", store.getState());
});


// dispatch actions
store.dispatch({type: "increment_ctr"});
store.dispatch({type: "update_ctr", value:100});
store.dispatch({type: "decrement_ctr"});