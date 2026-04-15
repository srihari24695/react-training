import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../model/Product";
import "./ListProducts.css";
import { Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { useTitle } from "../hooks/useTitle";
import { useProducts } from "../hooks/useProducts";
import { ProductView } from "../components/ProductView";



function ListProductsPage() {

    const url = "http://localhost:9000/secure_products";
    const navigate = useNavigate();
    const {products, setProducts} = useProducts(url); // fetching products using custom hook. This will return the products array. Note the curly braces, which means that total state is being returned as a object 
    useTitle("List Products"); // using the custom hook to set the title of the page to "List Products". Using custom hook
    const [isMessageVisible, setIsMessageVisible] = useState(true);

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

        {isMessageVisible? <div>Demo for List products</div>: null}

        <br></br>
        <button className="btn btn-info" onClick={() => setIsMessageVisible(!isMessageVisible)} >
            {isMessageVisible? "Hide Message": "Show Message"}
        </button>


            {/* Below div is for adding styles to the products. Note that attributes names are in camelcase but in normal css file it is flex-flow. */}
            <div style={{display:'flex', flexFlow: 'row wrap',justifyContent:'center'}}>
                {/* below is the logic for for loop the elements */}
                {products.map(product => {
                    return <ProductView key={product.id} product={product}/>;
                }

                )}
            </div>
        </div>
    );
}

export default ListProductsPage;