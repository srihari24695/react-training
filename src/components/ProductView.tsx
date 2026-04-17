import React from "react";
import type { Product } from "../model/Product";
import axios from "axios";
import { useNavigate } from "react-router-dom";


type productViewProps = {
    product: Product,
    onDelete?: (product: Product) => void,
    onEdit?: (product: Product) => void
};



const ProductView: React.FC<productViewProps> = React.memo(({product,onDelete, onEdit}) => {

      const navigate = useNavigate();

    async function handleDelete() {
        try{
                const url = import.meta.env.VITE_API_URL + "/products/" + product.id;
                await axios.delete(url);
                if(onDelete){
                    onDelete(product) // this is just like emmitting the event to the parent component. we are letting parent component that something is being deleted.
                }                
        } catch {

        }
    }

    

    function handleEdit(product: Product) {
        try {
            if (onEdit) {
                onEdit(product)
            }
        } catch {

        }
    }

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
                                     <button className="btn btn-danger" onClick={handleDelete}>Delete</button> &nbsp;
                                     <button className="btn btn-info" onClick={() => {handleEdit(product)}}>Edit</button>
                                    
                                 </div>
                        </div>
                    )


})

export {ProductView};