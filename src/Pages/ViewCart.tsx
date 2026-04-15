import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import type { CartItem } from "../model/CartItem";
import { removeFromCart } from "../redux/GadgetReducer";

function ViewCartpage() {

    const cart = useSelector((state: AppState) => state.gadgets.cart); // to get the cart from the redux store, we can use the useSelector hook to get the state from the redux store and then get the cart from the gadgets state
    const dispatch = useDispatch();


function remove(item: CartItem) {                
        dispatch(removeFromCart(item.product.id));
    }


    return (
        <div>
            <h1>View Cart</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                   

                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}

export default ViewCartpage;

function dispatch(action: { payload: number; type: "gadgetsSlice/removeFromCart"; }) {
    throw new Error("Function not implemented.");
}
