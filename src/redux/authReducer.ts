export type AuthState = {
    isAuthenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string;
}

export type AuthAction = {
    type: string;
    payload?: any;
}

const initialState: AuthState = {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: "",
    username: ""
}


// Login Action => {type: "login", payload: AuthState}
// Logout Action => {type: "logout"}
export const authReducer = (state = initialState, action) => {

    if(action.type === "login" && action.payload){
            return action.payload; // if the action type is login then return the payload which is the auth state
    }
    if(action.type === "logout"){
        return initialState; // if the action type is logout then return the initial state which is the auth state with isAuthenticated false and empty access token and refresh token
    }

    return state;
}