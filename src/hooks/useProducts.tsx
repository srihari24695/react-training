import { useEffect, useState } from "react";
import type { Product } from "../model/Product";
import type { AppState } from "../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

export function useProducts(url: string) {

    const [products, setProducts] = useState<Product[]>([]); // creating a state variable to set the products value
    const auth = useSelector((state: AppState) => state.auth); // to get the auth object from the redux store, we can use the useSelector hook to get the state from the redux store
    const navigate = useNavigate();

    useEffect(() => {
                console.log("Use products component mounted");                
                fetchProducts();        
            },[]); // this will be executed only once when the component is mounted

    async function fetchProducts(){        
        try{

            if(!auth.isAuthenticated){
                console.log("User is not authenticated, redirecting to login page");
                navigate("/login"); // if the user is not authenticated then navigate to the login page
                return;
            }
              // const response = await axios.get<Product[]>("http://localhost:9000/products");
              const headers = {"Authorization": "Bearer " + auth.accessToken}; // setting the authorization header with the access token from the redux store
              const response = await axios.get<Product[]>(url,{headers}); // making the api call with headers
               setProducts(response.data); // setting the products state variable with the data received from the server

        } catch(error){
            console.log("Error while fetching products: ", error);
        }
    }

return {products, setProducts}; // returning the products and setProducts function from the custom hook so that we can use it in the component where we are using this custom hook

}

