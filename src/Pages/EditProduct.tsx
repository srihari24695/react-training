import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { Product } from "../model/Product";
import { useEffect, useState } from "react";
import axios from "axios";

function EditProduct() {

    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const product = location.state.product; // to get the product object from the state, we can use the useLocation hook to get the state from the location object
    const id = params.id;

     const [productState, setProductState] = useState<Product | null>({id: 0, name: "", price: 0, description: "", imageUrl: ""}); // creating a state variable to set the product value

    useEffect(() => {
        console.log("EditProduct component mounted");    
        fetchProduct();                    
    },[]);

    async function fetchProduct(){
        try{
            const url = "http://localhost:9000/products/" + id;
            const response = await axios.get<Product>(url);
            setProductState(response.data);
        } catch(error){
            console.log("Error while fetching product: ", error);
        }

    }
 
    async function handleSave(evt: React.MouseEvent<HTMLButtonElement>){
        evt.preventDefault();            
     
        try{
            const url = "http://localhost:9000/products/" + product.id;
            console.log("URL: ", url);
            console.log("Product to be saved: ", productState);
                const response = await axios.put(url, productState); // making a post request to the server with the username and password as the request body
                console.log("Response from server: ", response);
                navigate(-1); // navigate to previous page

        } catch(error){
            console.log("Error while saving product: ", error);
        }
    }
    


    return (
        <div>
            <h3>Edit Product</h3>
        <form>
            <div className="form-group">
                Name: <input type="text" className="form-control" id="name" name="name" value={productState.name} onChange={e => setProductState({...productState, name: e.target.value})}/> <br></br> 
                Price: <input type="number" className="form-control" id="price" name="price" value={productState.price} onChange={e => setProductState({...productState, price: parseFloat(e.target.value)})} /> <br></br>
                Description: <input type="textarea" className="form-control" id="description" name="description" value={productState.description} onChange={e => setProductState({...productState, description: e.target.value})} /> <br></br>
                Image URL: <input type="text" className="form-control" id="imageUrl" name="imageUrl" value={productState.imageUrl} onChange={e => setProductState({...productState, imageUrl: e.target.value})} />
            </div><br></br>
            <div>
                <button className="btn btn-success" onClick={handleSave} > Save </button>&nbsp;
                <button className="btn btn-secondary"  > Cancel </button>
            </div>
        </form>
        </div>
    )
}

export default EditProduct;
