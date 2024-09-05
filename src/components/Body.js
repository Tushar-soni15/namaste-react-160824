import RestaurantCards, {withOpenRestaurants} from "./RestaurantCards";
import Shimmer from "./Shimmer"
// import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import GridCards from "./GridCards"
import { useRef } from "react";

// remember we need to import the useState by name.

// Unique id as key (best practice) >>>>> using index as key (which react itself do not recommend) >>>>>>> not using any key.

const Body = () => {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    };
    // console.log("re-rendering while typing in the search bar"); // to test that on every action in the search bar it is rendering the whole body component.

    //react hooks are normal JS utility functions
    // most common react hooks are useState() and useEffect()
    // state variable - super powerful variable - it maintain the state of the component
    // const [] = useState();
    // useState() give us a variable and we recieve that variable inside an array.
    // useState([]) -- we have to give the default value of our component inside the useState function. Whereas the const array takes 2 parameters - basically a destructuring of an array. 

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // this is bascially destrucutring of the array on the fly.
    // one other way to write this is:
    // const arr = useState(resList);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];

    // console.log(listOfRestaurants);

    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    // this is to list the filtered restaurants from the search bar. We do not want to update our main list of restaurants that is why we are creating this state variable.

    // here we have to create a restaurant card component which have open tag in it:
    const RestaurantCardsOpen = withOpenRestaurants(RestaurantCards); // this RestaurantCardsOpen is the new component which withOpenRestaurants has returned to us and it will have the resturant cards with isOpen true to them which logic we will write later in the code.

    const [gridDishes, setGridDishes] = useState([]);

    // console.log(gridDishes);

    const [topRateRes, setTopRatedRes] = useState([]);

    console.log(topRateRes);

    const [searchText, setSearchText]= useState("")

    useEffect(() => {
        console.log("use Effect called");
        fetchData();
    }, []);
    // the callback function which has fetchData invocation in it will be called after the Body component renders.

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.29056&lng=73.019728&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();

        // console.log(jsonData);
        //optional chaining
        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // as soon as this gets updated the listOfRestaurants will get updated because of useState.
        setfilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setGridDishes(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);

        setTopRatedRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return (<h1>Looks like your internet connection is not working.</h1>)

    if (listOfRestaurants.length === 0) return <Shimmer/>; 

    // this is known as conditional rendering. Rendering the component on a condition.
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer/>
    // };

    //better way to write the above code is to write terninary operator instead of if else loop. Here the below code is more prefered.

    const {loggedInUser, setUserName} = useContext(UserContext);

    return (
        <div className="w-11/12 m-auto">
            <div className="relative">
            <div className="flex items-center">
                <button
                onClick={scrollLeft}
                className="bg-gray-800 text-white p-2 rounded-full shadow-md ml-2"
                >
                {'<'}
                </button>
                <div
                ref={scrollRef}
                className="flex space-x-4 overflow-x-auto scrollbar-hide p-4"
                style={{ scrollBehavior: 'smooth' }}
                >
                    {gridDishes.map((dish, index) => (
                    <GridCards key={index} gridInfo={dish} />
                    ))}
                </div>
                <button
                onClick={scrollRight}
                className="bg-gray-800 text-white p-2 rounded-full shadow-md mr-2"
                >
                {'>'}
                </button>
            </div>
            </div>
            <div className="filter flex items-center">
                <div className="p-4 m-4">
                    <input data-testid="searchInput" type="text" className="border border-solid border-black rounded-l-full" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 my-0 py-0.5 bg-gray-300 rounded-r-full" onClick={()=>{
                        console.log(searchText);
                        const searchedRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())); // this is to filter the list of restaurant to get the searched data, but this cant be updated directly because of the nature of state variable, i.e we have to pass the whole value inside the function which change this varibale.
                        setfilteredRestaurants(searchedRes);// here instead of calling setListOfRestaurant we are calling filtered fucntion to update the filtered list variable which will be shown in the UI, but we are filtering from listOfRestaurants so that we dont fall into the bug of second time searching the list.
                    }}>Search</button>
                </div>
                <div>
                    <button className="px-4 py-0.5 bg-blue-500 rounded-lg text-white" onClick={()=> {
                        // console.log("button clicked")
                        // filter logic - we will use filter fucntion here cause it the data set is an array and whenever we want some set of data from an array we use filter()
                        // listOfRestaurants = listOfRestaurants.filter(
                        //     (res) => res.info.avgRating > 4.0
                        // );
                        // console.log(listOfRestaurants);
                        const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRatingString > 4.0
                            );
                            setfilteredRestaurants(filteredList);
                    }}>Get top rated restaurants</button>
                </div>
                {/* <div className="m-4 p-2">
                    <label>Set the User Name in real time:</label>
                    <input 
                    className="m-2 p-2 border border-black" 
                    value={loggedInUser} 
                    onChange={
                        (e) => setUserName(e.target.value)
                    }/>
                </div> */}
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                  <Link 
                  to={"/restaurant/"+ restaurant.info.id} 
                  key={restaurant.info.id}>
                    {/* if the restaurant is open then show a label here */}
                    {restaurant.info.isOpen ? <RestaurantCardsOpen resData={restaurant}/> : <RestaurantCards  resData={restaurant}/>}
                  </Link>
                ))}
            </div>
            <h1 className="font-bold text-3xl m-4 p-4">Top Rated Restaurants</h1>
            <div className="flex flex-wrap">
                {topRateRes.map((restaurant)=>(
                    <Link 
                    to={"/restaurant/"+ restaurant.info.id} 
                    key={restaurant.info.id}>
                        <RestaurantCards resData={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

// this is how we can send the data through props. Props are nothing but reactElement properties that can be useful in sending dynamic data to react functional elements. Fun fact is that props are nothing but arguments to a function same as react functional elements are nothing but JavaScript functions. The point to note here is that whatever we pass here as props, react bind all that data and put that inside an object, therefore the data we have to access through props will be in form of an object. here is the example:
// <RestaurantCards resName="thrProps" resCuisine="propsCuisne"/>

export default Body;