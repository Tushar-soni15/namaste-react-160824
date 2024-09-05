import { useState } from "react";
import MenuItemList from "./MenuItemList";

const MenuCategory = ({data, showMenu, setShowIndex}) => {
    // console.log(data);
    // const [showMenu, setShowMenu] = useState(false); to give the control of the showMenu state var we will take it as a prop from the parent RestaurantMenu.
    const handleClick = () => {
        // console.log("clicked");
        // setShowMenu(!showMenu);
        setShowIndex();
    }
    return (
        <div>
        {/* Header of accordian */}
        <div className="w-7/12 mx-auto my-4 shadow-sm p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} - ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Body of accordian */}
            {showMenu && <MenuItemList items={data.itemCards}/>}
        </div>
    </div>
    );
};

export default MenuCategory;