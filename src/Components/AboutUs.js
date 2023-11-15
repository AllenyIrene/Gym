import React from 'react'
import pic1 from "../Assets/pics/Ex1.jpeg"
import { Cards, CardsInfo } from '../Utilities'

const AboutUs = () => {
  return (
    <>
    <section className='flex flex-row max-container w-full justify-between max-xl:flex-col-reverse mb-16 flex-wrap max-lg:items-center '>
   <div className='flex justify-center pl-8 max-md:pl-4 max-md:pr-8 '>
   <img src={pic1} width={600} height={400} className="rounded-lg shadow-xl shadow-orange-600"/>
   </div>
   <div className='flex pr-20 flex-col mt-5 max-xl:mb-5 max-lg:pl-2'>
    <h1 className='text-2xl font-roboto'>INFORMATION <span className='text-orange-600'>ABOUT US</span></h1>
    <p className='text-4xl max-lg:text-2xl max-md:text-[16px]  font-bold text-hover'>ANYTIME A CROSS WORKOUT <br/><span className='text-orange-900'>FITNESS CENTER</span></p>
    <p className='flex flex-wrap leading-10 text-2md'>We at ANYTIME Fitness Center are passionate about the health & wellness <br/>
    of our members and the community at learge. We are the only Gym with Personal <br/>
    trainners at your disposal and ready to accompany you on your fitness journey. <br/>
    This is our purpose. We believe in your power to live fit & live well
    </p>
   </div>
   <div>
   </div>
    </section>
   
    </>
  )
}

export default AboutUs