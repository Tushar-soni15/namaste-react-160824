import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";

// Unique id as key (best practice) >>>>> using index as key (which react itself do not recommend) >>>>>>> not using any key.

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                  <RestaurantCards key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
}

// this is how we can send the data through props. Props are nothing but reactElement properties that can be useful in sending dynamic data to react functional elements. Fun fact is that props are nothing but arguments to a function same as react functional elements are nothing but JavaScript functions. The point to note here is that whatever we pass here as props, react bind all that data and put that inside an object, therefore the data we have to access through props will be in form of an object. here is the example:
// <RestaurantCards resName="thrProps" resCuisine="propsCuisne"/>

export default Body;