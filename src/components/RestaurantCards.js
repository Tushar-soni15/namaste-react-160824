import { CDN_URL } from "../utils/constants.js";
// this import is a named import that is why we have to name the vairable inside curly braces

// we can pass props like:
// const RestaurantCards = (props) => {}
    const RestaurantCards = (props) => {
        const {resData} = props;
        // console.log(resData);
        const {name, avgRating, costForTwo, cloudinaryImageId} = resData?.info 
        // this is optional chaining, used to make the cosmetic changes and better readability
        return (
            <div data-testid="resCards" className="m-5 p-4 w-[250] hover:bg-gray-200 rounded-lg">
                <img alt="res-logo" className="rounded-lg" src={CDN_URL+ cloudinaryImageId}></img>
                {/* <h3>McDonalds</h3>  */}
                {/* <h3>props.resName</h3> this is how we can use the props. */}
                <h4 className="font-bold py-4 text-lg">{name}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
            </div>
        );
    };

    // Higher order component which takes input as the RestaurantCards component and returns us another component which have the cards of only "open" tag.

    // input - RestaurantCards
    // output - RestaurantCardsOpen

    export const withOpenRestaurants = (RestaurantCards) => {
        return (props) => {
            return (
                <div>
                <label className="absolute m-3 p-1 bg-black text-white rounded-lg">
                Open
                </label>
                {/* spread opperator */}
                <RestaurantCards {...props}/> 
                </div>
            );
        };
    };


export default RestaurantCards;