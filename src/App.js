import { Route, Routes } from "react-router";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PizzaBlock from "./Components/PizzaBlock";
import Skeleton from "./Components/PizzaBlock/Skeleton";
import Sort from "./Components/Sort";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import "./scss/app.scss";
import { useEffect, useState } from "react";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
