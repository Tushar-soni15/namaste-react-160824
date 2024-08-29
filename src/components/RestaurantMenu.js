// this page we will reuse for every restaurant menu page to populate.

// import { useEffect, useState } from "react"; dont need this after optimizing
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants"; dont need this after optimizing
import useRestaurantMenu from "../utils/useRestaurantMenu"; // custom hook


// according to single resposnsibility principle this component is not optimized to its max potential, because it is serving two resposnibilities where it is fetching the data from the api and then displaying the data to the DOM. Hence it can be optimized and the fetch could be a responsibiliy of some other element. This is where custom hooks comes into the picture. Lets create a custom hook for fetching the menu data from the API and import that hook to this component.
const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null); the component does not have to manage the state now, the custom hook will do the work for us.

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);// now RestaurantMenu component doesnt have to fetch the data from the API, it can just pass the resId inside the custom hook and that will return us resInfo data. This is optimizing the code.

    // useEffect(()=>{
    //     fetchData();
    // }, []); // this will get called once after the initial render, because of empty dependency array.

    // const fetchData = async () => {
    //     const data = await fetch(MENU_API+resId
    //     );
    //     const json = await data.json();
    //     // console.log(json);

    //     setResInfo(json.data);
    // };

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