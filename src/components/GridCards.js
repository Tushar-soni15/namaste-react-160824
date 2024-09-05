import { CDN_URL } from "../utils/constants.js";

const GridCards = ({gridInfo}) => {
    // console.log(gridInfo);
    return (
        <div className="flex-shrink-0 text-center w-24">
            <div className="">
                <img className="w-24 h-38 rounded-full object-cover mx-auto" src={CDN_URL+ gridInfo.imageId}/>
            </div>
        </div>
        
    )
};

export default GridCards;