import { LOGO_URL } from "../utils/constants.js";
// this import is a named import that is why we have to name the vairable inside curly braces

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>  
    );
};

export default Header; // this is to see that named export and default export can both work in a single file. Default only works when there is only one component to export