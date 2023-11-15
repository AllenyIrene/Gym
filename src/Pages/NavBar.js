import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../Assets/Logo/logo1.jpeg"
import { Nav } from '../Utilities'
import {FaGripLines} from "react-icons/fa"
import {GrClose} from "react-icons/gr"


const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)
   const navigate = useNavigate()

  const Membership = () =>{
    navigate("/login")
  }


  return (
    
      <section className="bg-black  text-white w-full flex items-center flex-wrap justify-center gap-20 max-container padding-x max-md:flex-col max-lg:flex-col text-2xl max-lg:gap-8 max-md:gap-8  max-lg:text-base sticky top-0 max-md:min-w-full">
       <div className='flex flex-row justify-center items-center cursor-pointer gap-5 max-md:justify-center max-md:pt-4 max-md:pl-6  max-w-[600px] max-md:flex-col '>
        <img src={logo} className="w-32 h-32 rounded-full"/>
        <h1 className='h1'>ANYTIME <span className='text-orange-500'>FITNESS</span></h1>
       </div>
       <div className='flex md:hidden lg:hidden xl:hidden ' onClick={()=>setIsOpen(!isOpen)}>
      <button className='text-white btn flex items-center justify-center gap-1 p-3 btn-white'>
        {!isOpen? <FaGripLines size="2rem"/> : <GrClose size="2rem"/>}
        </button>
       </div>
       <nav className='justify-center items-center gap-16 hidden lg:flex p-4 '>
        {Nav.map((nav,index)=>(
          <Link to={nav.label} className="hover">{nav.name}</Link>
        ))}
       </nav>
       {isOpen && (
      <div className='md:hidden'>
       <div className='flex flex-col gap-4  justify-center items-center mt-2 border-y-2 border-t-teal-700 border-b-orange-600'>
        {Nav.map((nav,index)=>(
          <Link to={nav.label} className="hover">{nav.name}</Link>
        ))}
       </div>
      </div>
    )}
       <div className="">
        <button className='flex flex-col items-center btn justify-center' onClick={Membership}>MEMBERSHIP</button>
       </div>
    </section>

  )
}

export default NavBar