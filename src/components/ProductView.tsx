import React from "react";
import type { Product } from "../model/Product";

type productViewProps = {
    product: Product
};

const ProductView: React.FC<productViewProps> = React.memo(({product}) => {

    return (
                        <div className ="product" key={product.id}>
                            <img src={`http://localhost:9000${product.imageUrl}`} alt={product.name} height="50px" /> {/* displaying the product image */}
                                <p>ID: {product.id}</p>
                                <p>Name: {product.name}</p>
                                <p>Price: {product.price}</p>
                                <p>Description: {product.description}</p>
                                <p>Image URL: {product.imageUrl}</p>
                                 {/* <div> */}
                                      {/* Since we cannot send the args directly to the handler, we can use arrow function which will tell that this needs function call. */}
                                     {/* <button className="btn btn-danger" onClick={() => {handleDelete(product)}}>Delete</button> &nbsp;
                                     <button className="btn btn-info" onClick={() => {handleEdit(product)}}>Edit</button> */}
                                    
                                 {/* </div> */}
                        </div>
                    )


})

export {ProductView};