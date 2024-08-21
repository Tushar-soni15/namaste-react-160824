import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useState } from "react";
// remember we need to import the useState by name.

// Unique id as key (best practice) >>>>> using index as key (which react itself do not recommend) >>>>>>> not using any key.

const Body = () => {
    //react hooks are nirmal JS utility functions
    // most common react hooks are useState() and useEffect()
    // state variable - super powerful variable - it maintain the state of the component
    // const [] = useState();
    // useState() give us a variable and we recieve that variable inside an array.
    // useState([]) -- we have to give the default value of our component inside the useState function. Whereas the const array takes 2 parameters - basically a destructuring of an array. 

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    // this is bascially destrucutring of the array on the fly.
    // one other way to write this is:
    // const arr = useState(resList);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    // console.log("button clicked")
                    // filter logic - we will use filter fucntion here cause it the data set is an array and whenever we want some set of data from an array we use filter()
                    // listOfRestaurants = listOfRestaurants.filter(
                    //     (res) => res.info.avgRating > 4.0
                    // );
                    // console.log(listOfRestaurants);
                    const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.0
                        );
                    setListOfRestaurants(filteredList);
                }}>Get top rated restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                  <RestaurantCards key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
}

// this is how we can send the data through props. Props are nothing but reactElement properties that can be useful in sending dynamic data to react functional elements. Fun fact is that props are nothing but arguments to a function same as react functional elements are nothing but JavaScript functions. The point to note here is that whatever we pass here as props, react bind all that data and put that inside an object, therefore the data we have to access through props will be in form of an object. here is the example:
// <RestaurantCards resName="thrProps" resCuisine="propsCuisne"/>

export default Body;