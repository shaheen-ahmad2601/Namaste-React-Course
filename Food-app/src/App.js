import React, { Component , lazy} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

// to load the bundeling files we use lazy loading and has created the function below.
// import is a call back function which takes the path.

// lazy loading.
// suspense loading

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};



const appRounter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Grocery/> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRounter} />);

// here I will pass the RouterProvider and give the configuratin that we have created.
// steps:
/*
- install react-router-dom
- import createBrowserRouter from react-router-dom
- import RouterProvider from react-router-dom
- create configuratin and the paths of router
- then render configuratin components with RouterProvider router={appRounter}
*/
