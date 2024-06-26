import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../assets/logoret.png"
const Navbar = () => {

  let Links = [
    {name:"HOME", link:"/"},
    {name:"ABOUT", link:"/about"},
    {name:"CONTACT US", link:"/contactus"},
    {name:"LOGIN", link:"/login"},
  ];
  const [open, setOpen] = useState(false);
    
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <span className='w-24 h-24 overflow-hidden' ><img src={Logo} alt="" /></span>
          Reattendance
        </div>

        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in   ${open ? 'top-20' : 'top-[-490px]'} md:opacity-100`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <NavLink to={link.link} className='text-gray-800 hover:text-indigo-600 duration-500 font-bold text-sm'>{link.name}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar