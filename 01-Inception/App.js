import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HtmlElement(render)

// when we do
// JSX - React.createElement => ReactElement-JS Object => HtmlElement(render) this is how jsx got transpilled and rendered behind the scenes.
// const heading = React.createElement("h1", {}, "this is a Namste React"); // this line created an object for us
// //react element at the end , its an object when we render this to dom then it becomes html element.
// console.log(heading);
// // jsx is not html in js ,but html like systax or more closer to xml. its a completely different systax.
// const jsxHeading = (
//   <h1 id="heading" className="useClassName not class in jsx">
//     this is jsx
//   </h1>
// );
// console.log("jsxHeading", jsxHeading);

// babel takes jsx code and converts it into react.createElement now browsers can understand it.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const jsxHeading = (<h1 id="heading" className="useClassName not class in jsx">
//   this is jsx
//   </h1>);
//you need to wrap for multiple lines because babel needs to understand from where to where your code in starting and ending. so wrap it into parenthesis.

// ---------------------------------------------------Components--------------------------
/* react fucntion components is just a normal js function
when ever you are creating a React components name it with a Capital letter otherwise it it will through an error.
*/



//This is a component composition

const ChildComponent = () => (
  <h1>This is a childComponent under title component</h1>
);

const number = 1000;
// const data = api.getData()
//if your api is containing some malicious data then jsx does not run directly the code , it first sanitize the data and run it checks the api that we are hitting is safe of containing malicious code so jsx removes that.

const TitleComponent = () => {
  return (
    <div>
      {/* <h2>{data}</h2> */}
      <ChildComponent />
      <h1 className="title">
        This is a title component under heading component
      </h1>
      ;
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent />
      {/* {TitleComponent()} // you can also call the function like this to render */}
      <h1 className="title">This is a heading component</h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
