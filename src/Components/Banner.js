import React, { useState } from 'react'
import pic1 from "../Assets/pics/pic1.jpeg"
import { Pics } from '../Utilities'
import Excercise from './Excercise'

const Banner = () => {
    const [pic,setPic] = useState(pic1)
  return (
   
    <section className='max-container w-full padding-x gap-12 flex flex-wrap flex-col min-h-screen  lg:flex-row mt-2 '>
    <div className='flex mt-12 md:w-2/5 gap-6 flex-col items-start w-full pl-8'>
      <h1 className='h1 justify-center font-roboto'>PERSONAL TRAINING <span className='text-teal-500'> GROUP-TRAINING </span><br/>COACHLED TRAINING  AND EVERYTHING FITNESS</h1>
      <p>We are here to help you reach your personal goal. <br/>Our Equipments are of high quality,and up to date.</p>
      <button className='btn btn-white flex flex-col items-center justify-center'>Get Started</button>
    </div>
    <div className='flex flex-col gap-6 items-center sm:w-fit'>
      <img src={pic} width={800} height={300} className="rounded-lg md:max-h-96"/>
      <div className='grid grid-cols-2 gap-4 mt-2 md:grid-cols-3'>
        {Pics.map((Pics)=>(
            <Excercise pic={Pics} bigpic={pic} changeBigPic ={(pic)=>setPic(pic)}/>
        ))}
      </div>
    </div>

    </section>

  )
}

export default Banner