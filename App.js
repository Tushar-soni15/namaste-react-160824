// the first thing we did when printing hello from JS is that we created an element using creatElement, here we also have something similar:

/////////////// React.createElement("name of the tag", "{ attributes of the tag }, "what is inside the tag?") here is the syntax of react.createElement
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!"); // the empty object will have the attributes to that tag, h1 in our case.

// here we think that the heading will give us a HTML tag, but if we console.log it:

console.log(heading); // this returns a ReactElement which is nothing but a JS object. It contains something known as props which have the childeren we pass inside the createElement function.

// now we have to create a root for React, this is where all the DOM operations will happen.

const root = ReactDOM.createRoot(document.getElementById("root")); // every rendering in react happens inside this root, which we have to create

// now in that root we have to apend heading

root.render(heading); // the render functions job is to take the JS object or react element which heading or createElement is creating and convert it to the heading HTML tag and put it up.

// One thing to note here is that whatever tag was under the root parent in my HTML file was replace by react. The Html elements only show Hello World from React and not Hello world From HTML. That is because the root.render take the control and REPLACE the tags originally present in the HTML parent tag named 'root', other than that tags in HTML will render as is without being affected by react. This is why we call React as a library, because it only works in the place where we make it to work. It can work independently in small portion of the app as well, It is not a full fleged framework(comes with all loads of thing). React is just a JS library, written by facebook developers. We can inject React using CDN and start using it in any portion of out app.

// to create nested DOM, we can pass the third argument in createElement as an Array, but obv the code will be ugly and not readbale at all. Thats where JSX comes into the picture.