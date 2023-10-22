import React, { createContext, useState } from 'react'


export const CartContext = createContext()
function CartProvider({children}) {
  const[cart, setCart] = useState([])
  return (
    <CartContext.Provider value={'this is a cart context'}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider