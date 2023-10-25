import React, { createContext, useState } from 'react'


export const CartContext = createContext()
function CartProvider({children}) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }; //the item you want to add to cart
    //console.log(newItem)
    const cartItem = cart.find((item) => {
      return item.id === id;
    }); //the item that already exists in the cart

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      //if cartItem exists,it creates a new cart and carefully map 
      //through the existing ones to see if the item.id matches the id of any item in the cart.
      //if it does, it adds more items to the existing one by increasing it by 1 and if it does not, it remains the same.
      setCart(newCart);
      //now, the cart is now replenished and the old cart is replaced with the new one with the setCart function.
    } else {
      setCart([...cart, newItem]);
      //and if cartItem does not exists (meaning the cart is empty, it sets the cart to contain the new item.)
    }
  };
  console.log(cart);

  //The code uses these variables (newItem and cartItem) to determine whether
  //to add a new item to the cart or update the quantity of an existing item.

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider



