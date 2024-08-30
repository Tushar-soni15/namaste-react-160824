import { CDN_URL } from "../utils/constants";

const MenuItemList = ({items}) => {
    console.log(items);
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
                        <button className="px-2 mx-16 text-white bg-black rounded-lg shadow-lg -my-2">Add +</button>
                    </div>
                </div>
            </div>
        )} 
        </div>
    );
};

export default MenuItemList;