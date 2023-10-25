import React, { useContext } from "react";
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Product({ product }) {
  const { id, image, category, title, price } = product;
  //console.log(product);
  const {addToCart} = useContext(CartContext)
  return (
    <div>
      <div className="group border border-[#d8d8d8] h-[300px] mb-4 relative overflow-hidden transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 duration-300"
            />
          </div>
        </div>
        <div className="absolute top-6 -right-10 group-hover:right-4 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={()=> addToCart(product, id)}>
            <div className="flex justify-center items-center text-white bg-green-500 w-10 h-10">
              <AiOutlinePlus className="text-2xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="bg-white w-10 h-10 flex justify-center items-center drop-shadow-2xl"
          >
            <AiFillEye />
          </Link>
        </div>
      </div>
      <div>
        <p className="capitalize text-gray-600 text-sm">{category}</p>
        <Link to={`/product/${id}`}>
          <p className="font-semibold mb-1">{title}</p>
        </Link>
        <p className="font-bold">$ {price}</p>
      </div>
    </div>
  );
}

export default Product;
