import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);
  console.log(products)
  return <div>Home</div>;
}

export default Home;
