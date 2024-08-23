// this page we will reuse for every restaurant menu page to populate.

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchData();
    }, []); // this will get called once after the initial render, because of empty dependency array.

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId
        );
        const json = await data.json();
        // console.log(json);

        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer/>;

    const {name, city, avgRating, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{city} - {avgRating} starts</p>
            <h3>{cuisines}</h3>
            <ul>
                {itemCards.map((item) =>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {item.card.info.price/100}</li>
                    ))};
            </ul>
        </div>
    );
};

export default RestaurantMenu;