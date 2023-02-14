import React from "react";
import Cart from "./Cart";
import { StoreContext } from "./Context/StoreContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
