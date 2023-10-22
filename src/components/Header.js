import React, { useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext';
import {BsBag} from 'react-icons/bs'

function Header() {
  const { setIsOpen, isOpen } = useContext(SideBarContext);
  return (
    <div className='bg-purple-200'>
      <div>Header</div>
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag />
      </div>
    </div>
  );
}

export default Header