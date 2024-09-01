import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./utils/userContext";
import { useState, useContext } from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

// // the first thing we did when printing hello from JS is that we created an element using creatElement, here we also have something similar:

// // Syntax =    React.createElement("name of the tag", "{ attributes of the tag, inside an object }, "what is inside the tag?") 
// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React, which automatically reloads using parcel!"); // the empty object will have the attributes to that tag, h1 in our case.

// // here we think that the heading will give us a HTML tag, but if we console.log it:

// console.log(heading); // this returns a ReactElement which is nothing but a JS object. It contains something known as props which have the childeren we pass inside the createElement function.

// // now we have to create a root for React, this is where all the DOM operations will happen.

// const root = ReactDOM.createRoot(document.getElementById("root")); // every rendering in react happens inside this root, which we have to create

// // now in that root we have to apend heading, as we did in JS but here we have something known as render()

// root.render(heading); // the render functions job is to take the JS object or react element which heading or createElement is creating and convert it to the heading HTML tag and put it up.

// // One thing to note here is that whatever tag was under the root parent in my HTML file was replace by react. The Html elements only show Hello World from React and not Hello world From HTML. That is because the root.render take the control and REPLACE the tags originally present in the HTML parent tag named 'root', other than that tags in HTML will render as is without being affected by react. This is why we call React as a library, because it only works in the places where we make it to work. It can work independently in small portion of the app as well, It is not a full fleged framework(comes with all loads of thing). React is just a JS library, written by facebook developers. We can inject React using CDN and start using it in any portion of our app.

// // to create nested DOM, we can pass the third argument in createElement as an Array, but obv the code will be ugly and not readbale at all. Thats where JSX comes into the picture.

// // JSX have HTML or XML like syntax but it is not HTML IN JS. It is completely different from React, and from HTML. But because of of it's easy readability and understandable syntax we prefer JSX over ReactElements. For eg:

// // trying to re- write the code on line 7 using JSX:

// const jsxheading = <h1>Hello World from React, which automatically reloads using parcel, but this time with JSX!</h1>; // this has to be on one line or if not then the entire code must be inside paranthesis.

// console.log(jsxheading); // this is not rendered yet, if you compare this to line 11, we will get to know that these are the same thing. which is a reactElemnt.

// root.render(jsxheading); // rendering this will give us the desired output.

// // JSX is not a valid JavaScript because it cant be read by JS engine. It is not ES6 or ECMAscipt. It is JSX different than react, JS or HTML.

// // How this JSX works behind the scene: JSX behind the scene is transpiled to ReactElement(JS object) by a parcel's dependency known as babel. Babel transpiled the JSX code to ReactElement which is basically a JS object which then gets converted to HTMLElement after render() function. The intersting fact is that babel do all this before the code even reached to the JS engine or browser. 

// // React Components: 

// // Everyhting in react is a react component. But we have 2 types of components as per the history of react. which are class based component and functional component. 99% of react is written as functional component. Class based component is old and no one uses it anymore. 

// // React functional component syntax: A NORMAL JS FUNCTION 

// // 1. the first thing to notice in functional component is the naming convention, the name have to have the first letter capital. 

// // 2. Another noticable point is that it returns a JSX or ReactElement. 

// //3. Is basically a Javascript function, most prefereably a arrow function, but it is not mandatory to use arrow function, we can use normal functions

// //4. In JS we use a use the word retun in arrow functions, here most developers do not use the word return under a functional component, and that is perfectly valid but it's a good practice to use it.

// // here is the example of React Functional Component:

// const HeadingComponent = () => {
//     return <h1>Namaste React Functional component</h1>;
// };  // it return a JSX therefore it is a functional component.

// const HeadingComponent2 = () => (<h1>Namaste React Functional component</h1>); // here if we have more than one line we have to wrap the whole JSX code in parenthesis

// // they both are perfectly valid syntax. They both are slighlty different but the first one is like a JS arrow function which is easy to remember but we need to memorise the second one also because it the same thing.

// // here is a react element example once again. the only difference are the 4 points mentioned above:

// const rElement = (<h1>react element</h1>);

// // how ro render the functional compnent:

// root.render(<HeadingComponent/>); // this is how we can render the functional component, there is slight change in the syntax as per normal reactElement.Babel understands it like this

// // few more react fucntional component examples that are perfectly valid.

// const HeadingComponent3 = () => (
//     <div id="container">
//         <h1>Hello from react functional component with nested HTMLElements</h1>
//         {HeadingComponent()}
//         {/* or this  */}
//         <HeadingComponent/>
//         {/* or this */}
//         <HeadingComponent></HeadingComponent>
//         {/* are the same */}
//         {<HeadingComponent2/>}
//         {rElement}
//         {console.log("JS inside JSX")}
//     </div>
// ); // this is how we can pass one functional component into another. Also known as coomponent composition.
// // inside a JSX code, we can use {} and write ANY Javascript code inside it. This is the most powerful benefit of JSX. Same way we can write JS using a curly braces inside reactElement, this is how we can mix and match everything.

// // we can even call a function inside {}. for eg {functionName()}

// root.render(<HeadingComponent3/>);

// creating the base/root component (ReactElement) of the app first


const AppLayout = () => {
    const {loggedInUser} = useContext(UserContext);

    const [userName, setUserName] = useState();

    useEffect(()=>{
        // let say this made an API call and given back some user data
        const data = {
            name: "Tushar Soni"
        };
        setUserName(data.name);
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
            {/* Tushar Soni */}
            <div className="app">
                <Header/>   
                {/* <Body/> */}
                {/* if the path is '/' we want to show /body with the header, if the path is /about we want to show /about with it and same goes for the contact page. This is where outlet comes into the picture. Outlet basically replace itself according to the condition.  */}
                <Outlet />
            </div>
        </UserContext.Provider> 
        </Provider>
        // wrapping the app inside the usercontext.Provider we will be passing the updated context object or overwritting the default value of context object. 
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About/>,
        
            },
            {
                path: "/contact",
                element: <Contact/>,
        
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>); // here we have to use RouterProvide function given to us by react-router-dom. In above steps we have created the route but we have to provide it to the render function so that it can render the page accordingly.

// inside this root component (AppLayout) we will pass all the partial components of the app to bind them together and better readablility.