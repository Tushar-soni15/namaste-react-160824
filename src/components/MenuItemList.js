import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";

const MenuItemList = ({items}) => {
    // console.log(items);
    const dispatch = useDispatch();

    const handleAddCart = (item) => {
        // dispatch an action
        dispatch(additem(item));
        // whatever is pass inside the addItem is passed as a object which contains payload in it. The payload is the key the value is whatever we pass, and in the cartSlice, this object will be passed in the second argument k/as action. 
    }
    return (
        <div> {items.map(item => 
            <div className=" p-2 m-2 border-b-4 border-gray-300 text-left flex justify-between" key= {item.card.info.id}>
                <div className="w-9/12">
                    <div className="py-2"> 
                        <span>
                            {item.card.info.name}
                        </span>
                        <span>
                        - ₹{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}
                        </span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12">
                    <img className="py-2" src={CDN_URL + item.card.info.imageId}/>
                    <div className="absolute">
                        <button 
                            className="px-2 mx-16 text-white bg-black rounded-lg shadow-lg -my-2"
                            onClick={() => handleAddCart(item)}>
                                Add +
                        </button>
                    </div>
                </div>
            </div>
        )} 
        </div>
    );
};

export default MenuItemList;