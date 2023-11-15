import React from 'react'
import { gymLocation } from '../Utilities'

const Location = () => {
  return (
    <section className='w-full flex flex-col flex-wrap max-width my-8 padding-x max:lgmin-w-full'>
        <div className='flex flex-col items-center py-6'>
        <h1 className='h1 font-roboto text-bold'>LOCATIONS</h1>
     <p className='leading-10 font-roboto text-lg'>We are located in almost every City accross the Countrie.<br/> 
        We are excited to start your fitnes journey with you and help you <br/> grow in the healthy person you wish to be 
     </p>
     <span className='text-4xl text-orange-600 max-lg:text-2xl'>MIND OVER BODY</span>
        </div>
        <div className='flex flex-wrap flex-col items-center'>
        <div className='grid grid-cols-2 gap-24 max-lg:grid-cols-1'>
         {gymLocation.map((lct,index)=>(
            <div key={index} className="flex flex-col gap-3 items-center cursor-pointer max-md:w-[250px]">
           <img src={lct.image} width={400} height={300} className="rounded-[30px]"/>
           <h1>{lct.label}</h1>
           <p>{lct.AccessHours}</p>
           <p>{lct.Place}</p>
            </div>
         ))}
        </div>
        </div>
    
     
    </section>
  )
}

export default Location