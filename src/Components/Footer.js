import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/Logo/logo2.jpeg"
import { Us } from '../Utilities'

const Footer = () => {
  return (
    <section className='flex flex-col w-full max-container flex-wrap'>
   <div className=' bg-slate-800 text-white w-full flex flex-row flew-wrap padding-x items-center justify-between gap-8 px-16 max-md:flex-col'>
     <div className='flex flex-row items-center'>
      <img src={logo} width={100} height={100} className="rounded-full"/>
      <h1 className='text-2xl'>ANYTIME <br/> Fitness</h1>
     </div>
  
     <div className='flex flex-col'>
     <h1 className='h1 mb-2'>Explore More</h1> 
     {Us.map((us)=>(
      <div className='flex flex-col items-center leading-8 hover'>
        <Link to={us.label}>{us.name}</Link>
      </div>
     ))}
     </div>
     <div className='flex flex-col'>
      <h1 className='h1 text-orange-600'>Contacts</h1>
      <p></p>
     </div>
      </div>
      <div className='bg-black text-white max-md:px-3 flex flex-wrap justify-center items-center pt-8'>
        <p className='text-normal flex flex-wrap'>CopyRight @2023. All Rights Reserved| This page was made by  <br/> <span className='text-orenge-600'> AllenWeb Devs</span>
       </p>
      </div>
    </section>
   
  )
}

export default Footer