import React from 'react'
import {Information, Pics } from '../Utilities'

const Cards = () => {
  return (
    <div className='flex justify-center items-center  max-container  w-full border-b-4 border-b-orange-500 px-6'>
   <div className='flex flex-row gap-10 items-center max-md:flex-row flex-wrap max-lg:px-14'>
    {Information.map((card)=>{
    return  <div className='flex flex-col items-center justify-center mb-10 bg-teal-900 text-white shadow-2xl  shadow-orange-600 rounded-[30px]
     w-[250px] h-[90px] hover:bg-teal-600 cursor-pointer'>
        <h1 className='text-bold text-4xl text-orange-600'>{card.label}</h1>
        <p className='text-xl font-roboto'>{card.name}</p>
      </div>
    })}
    </div>
    </div>
   
  )
}

export default Cards