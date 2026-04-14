import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../model/Product";
import "./ListProducts.css";
import { Navigate, useNavigate } from "react-router";



function ListProductsPage() {

    const navigate = useNavigate();

    const [products, setProducts] = useState<Product[]>([]); // creating a state variable to set the products value

    useEffect(() => {
        console.log("ListProducts component mounted");
        fetchProducts();

    },[]); // this will be executed only once when the component is mounted

    async function fetchProducts(){
        try{
               const response = await axios.get<Product[]>("http://localhost:9000/products");
               setProducts(response.data); // setting the products state variable with the data received from the server

        } catch(error){
            console.log("Error while fetching products: ", error);
        }
    }

    async function handleDelete(product: Product){
        try{
            const url = `http://localhost:9000/products/${product.id}`;
            await axios.delete(url); // making a delete request to the server with the product id as the request parameter
           // await fetchProducts(); // after deleting the product, we need to fetch the products again to update the UI . This is one way to do it.
           const index = products.findIndex(item => item.id === product.id); // finding the index of the product to be deleted in the products array
           products.splice(index, 1); // removing the product from the products array
           setProducts([...products]); // updating the products state variable with the new products array, using the spread operator to create a new array with the updated products
        } catch(error){
            console.log("Error while deleting product: ", error);
        }
    }

    async function handleEdit(product: Product){
        console.log("Edit button clicked for product id: ", product.id);
        navigate('/products/' + product.id, {state: {product}}); // navigating to the edit product page with the product id as the url parameter
    }


    return (
        <div>
            <h3>List of Products</h3>
            {/* Below div is for adding styles to the products. Note that attributes names are in camelcase but in normal css file it is flex-flow. */}
            <div style={{display:'flex', flexFlow: 'row wrap',justifyContent:'center'}}>
                {/* below is the logic for for loop the elements */}
                {products.map(product => {
                    return (
                        <div className ="product" key={product.id}>
                            <img src={`http://localhost:9000${product.imageUrl}`} alt={product.name} height="50px" /> {/* displaying the product image */}
                                <p>ID: {product.id}</p>
                                <p>Name: {product.name}</p>
                                <p>Price: {product.price}</p>
                                <p>Description: {product.description}</p>
                                <p>Image URL: {product.imageUrl}</p>
                                <div>
                                     {/* Since we cannot send the args directly to the handler, we can use arrow function which will tell that this needs function call. */}
                                    <button className="btn btn-danger" onClick={() => {handleDelete(product)}}>Delete</button> &nbsp;
                                    <button className="btn btn-info" onClick={() => {handleEdit(product)}}>Edit</button>
                                    
                                </div>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    );
}

export default ListProductsPage;