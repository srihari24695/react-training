import { useEffect, useRef, useState, type MouseEvent } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router";


function LoginPage() {

    const [username, setUsername] = useState(""); // creating a state variable to set the username value
    const [password, setPassword] = useState(""); // creating a state variable to set the password value
    const [message, setMessage] = useState(""); // creating a state variable to set the message value
    const usernameInputRef = useRef<HTMLInputElement>(null); // creating a state variable to set the reference of the username input field
    const navigate = useNavigate();

    // invoked on mounted
    useEffect(() => {
        console.log("LoginPage component mounted");
        usernameInputRef.current?.focus(); // to set the focus on the username input field when the login button is clicked
        
        return () => {
            console.log("LoginPage component unmounted");
        }
    
    
    },[]); 

    async function login(e: MouseEvent<HTMLButtonElement>) {
        console.log("Login button clicked");
        e.preventDefault(); // to prevent the default form submission behavior, if we dont put this even if we dont have creds the form will be submitted
        
        if(username && password){
            // validate the credentials
            try{
                const url = "http://localhost:9000/login";
                const response = await axios.post(url, {name: username, password: password}); // making a post request to the server with the username and password as the request body
                console.log("Response from server: ", response);
                setMessage(""); // if credentials are valid then clear the message
                navigate("/"); // if the credentials are valid then navigate to the home page
            } catch(error){
                console.log("Error while logging in: ", error);
            }            

            
        } else {
            setMessage("Please enter both username and password");
        }
    }


    return (
        <div>
            <h2>Login Page</h2>            
            {message ? <div className="alert alert-warning">{message}</div> : null} {/* if message is not empty then show the alert */}
            <form>
                <div className="form-group">
                  <label htmlFor="username">UserName</label>   
                  <input type="text" name="username" className="form-control" placeholder="User Name"
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        ref={usernameInputRef}
                        /> {/* adding onChange event to update the state variable so that when user types automatically state will be updated */}
                        
                         
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>   
                  <input type="password" name="password" className="form-control" placeholder="Password"
                         value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <br />
                <button className="btn btn-success" onClick={login} > Login </button>
            </form>
        </div>
    )
}
export default LoginPage;