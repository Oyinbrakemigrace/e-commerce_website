import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import Cart from "./Cart";
import { SideBarContext } from "../contexts/SideBarContext";
import { CartContext } from "../contexts/CartContext";

function SideBar() {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const{cart} = useContext(CartContext)
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex flex-row items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag(0)</div>
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleClose}>
          <AiOutlineArrowRight className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item)=>{
          return <Cart item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
}

export default SideBar;
