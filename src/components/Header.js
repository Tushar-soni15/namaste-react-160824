import { LOGO_URL } from "../utils/constants.js";
// this import is a named import that is why we have to name the vairable inside curly braces
import { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Link is just as anchor tag but it does not reloads the whole page instead it only routes it way to the destination. It is IMPORTANT TO NOTE THAT IN REACT WE WILL NEVER USE ANCHOR TAG.
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/userContext.js";


// can remove this export.
export const Header = () => {
    // console.log(useState()); // this will give me an array which will have a variable whose value will be undefined, and a empty function.
    let btnName = "Login" // the login behind creating this variable is that we want a button named lagin which on getting clicked gets vhanges to Logout, and visa versa. But doing this through JS here is not working. The problem here is that we are changing the variable name on click if the button which is working perfectly fine in the backend, the cosole is showing the desired results, but the UI is not updating, not rendering the result as expected, this is where react state variables come in the picture.  
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between shadow-sm bg-purple-50">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        online status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About US</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" 
                    onClick={() => {
                        // btnName = "logout"; this is not useful to gets updated to the UI layer and render the component.
                        console.log(btnName);

                        setBtnNameReact(btnNameReact=== "login"? "Logout": "login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}
                     </button> 
                     <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>  
    );
};

export default Header; // this is to see that named export and default export can both work in a single file. Default only works when there is only one component to export