import React from 'react'

import { Link } from "react-scroll";
import SideNav from './SideNav';
import { NavData } from '@/constants';

const Nav = () => {
  return (
    <>
    <div className='text-[#28282B] flex items-center justify-between md:px-12 py-5 absolute w-full'>
        <div className=' font-black text-[#28282B] text-xl md:text-2xl'>
            ABISMAHAT.eth
        </div>
        <div>
            logo
        </div>
        <div>
            Nav ICON
        </div>
    </div>
    <div className=' hidden md:flex flex-col'>
        <SideNav NavData= {NavData} />
        </div>
    </>
  )
}

export default Nav