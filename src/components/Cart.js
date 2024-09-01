import MenuItemList from "./MenuItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { emptyItems } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(emptyItems());
    }

    return (
        <div className="text-center m-4 p-4 font-bold">
            Cart
            <div className="w-9/12 bg-gray-50 m-auto">
                <button 
                className="text-white bg-red-600 rounded-lg m-2 p-2"
                onClick={clearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1 className="font-bold m-6 p-6 text-gray-400">Uhh ohh !! The cart is empty, please add items to the cart.</h1>}
               <MenuItemList items={cartItems}/> 
            </div>
        </div>
    );
}

export default Cart;