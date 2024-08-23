import { LOGO_URL } from "../utils/constants.js";
// this import is a named import that is why we have to name the vairable inside curly braces
import { useState } from "react";
import { Link } from "react-router-dom"; // Link is just as anchor tag but it does not reloads the whole page instead it only routes it way to the destination. It is IMPORTANT TO NOTE THAT IN REACT WE WILL NEVER USE ANCHOR TAG.

export const Header = () => {
    let btnName = "Login" // the login behind creating this variable is that we want a button named lagin which on getting clicked gets vhanges to Logout, and visa versa. But doing this through JS here is not working. The problem here is that we are changing the variable name on click if the button which is working perfectly fine in the backend, the cosole is showing the desired results, but the UI is not updating, not rendering the result as expected, this is where react state variables come in the picture.  
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={() => {
                        // btnName = "logout"; this is not useful to gets updated to the UI layer and render the component.
                        console.log(btnName);

                        setBtnNameReact(btnNameReact=== "login"? "Logout": "login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}
                     </button> 
                </ul>
            </div>
        </div>  
    );
};

export default Header; // this is to see that named export and default export can both work in a single file. Default only works when there is only one component to export