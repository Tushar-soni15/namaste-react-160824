import { CDN_URL } from "../utils/constants.js";
// this import is a named import that is why we have to name the vairable inside curly braces

// we can pass props like:
// const RestaurantCards = (props) => {}
    const RestaurantCards = (props) => {
        const {resData} = props;
        const {name, avgRatingString, costForTwo, cloudinaryImageId} = resData?.info 
        // this is optional chaining, used to make the cosmetic changes and better readability
        return (
            <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
                <img alt="res-logo" className="res-image" src={CDN_URL+ cloudinaryImageId}></img>
                {/* <h3>McDonalds</h3>  */}
                {/* <h3>props.resName</h3> this is how we can use the props. */}
                <h4>{name}</h4>
                <h4>{avgRatingString} stars</h4>
                <h4>{costForTwo}</h4>
            </div>
        );
    };


export default RestaurantCards;