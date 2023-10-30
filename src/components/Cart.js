import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'

function Cart({item}) {
  const{id, title, image, price, amount} = item
  return (
    <div>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img src={image} alt={item.image} className='max-w-[80px]' />
        </Link>
        <div className='flex justify-between mb-2'>
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-gray-800 hover:underline'>{item.title}</Link>
          <div className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart