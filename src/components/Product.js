import React from "react";
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { id, image, category, title, price } = product;
  console.log(product);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img src={image} alt="" className="max-h-[160px] group-hover:scale-110 duration-300"/>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Product;
