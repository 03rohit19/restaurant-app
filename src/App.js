import React, { lazy, Suspense } from "react";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import RestaurantMenuCard from "./Components/RestaurantMenuCard";
import { Provider } from "react-redux";
import store from "./Utils.js/store";
import CartChamber from "./Components/CartChamber";

const Grocery = lazy(() => import("./Components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenuCard />,
      },
      {
        path: "/cart",
        element: <CartChamber />,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <BrowserRouter>
            <Outlet />
          </BrowserRouter>
        </RouterProvider>
      </Provider>
    </div>
  );
};

export default App;
