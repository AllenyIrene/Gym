import React from 'react'
import {ImRadioChecked} from "react-icons/im"
import { useNavigate } from 'react-router'

const PayMent = () => {
  const navigate = useNavigate()

  const Login = () =>{
    navigate("/login")
  }
  return (
    <section className=' bg-gray-200 min-h-screen  flex flex-col max-lg:px-6'>
       <div className='flex items-center flex-col pt-4 flex-grow flex-1 justify-around max-lg:items-center flex-wrap gap-4 max-lg:text-sm'>  
        <h1 className='h1 text-teal-500 flex-wrap leading-10'>Coach-led Personal and Group <br/><span className='flex flex-col text-orange-500 items-center'>Fitness Training</span> </h1>
        <p>Designed to help you reach your own individual goal.</p> 
        <button className='btn' onClick={Login}>Sign Up </button>
        </div>
        <div className='flex flex-row max-lg:flex-col gap-[80px] mt-6 px-20 justify-around  mb-4 flex-wrap max-lg:mx-1.5 max-md:center flex-grow'>
            <div className='border-4 border-orange-800 mt-40 w-[500px] h-[560px] max-lg:w-[250px] max-lg:items-center flex items-center  flex-col flex-wrap justify-center gap-8  bg-red-50 text-black py-6'>
                <div className='flex flex-col gap-2'>
                <h1 className='h1'>DAY PASS</h1>
                <p>Take It One Visit At A Time</p>
                <p className='font-light border-b-2 border-b-slate-500'>FROM /$ 
                <span className='text-4xl'>4</span>.95/ PER VISIT</p>
                </div>
                <div className='flex flex-col items-start border-b-2 border-b-teal-800 gap-3 pb-4'>
                  <p className='flex flex-row items-center justify-center gap-5'><ImRadioChecked size="2rem"/><span>Pay as you go</span></p>
                  <p className='flex flex-row items-center justify-center gap-5'><ImRadioChecked size="2rem"/><span>30 Days to use it</span></p>
                  <p className='flex flex-row items-center justify-center gap-5'><ImRadioChecked size="2rem"/><span>Competitive rates</span></p>
                </div>
                <div className='flex flex-col border-b-2 border-b-gray-500 gap-3 pb-3'>
                  <h1 className='h1 text-2xl'>Competitive flexibility</h1>
                  <p>Just pay when you go</p>
                  <button className='w-[200px] h-[60px] bg-teal-500 text-orange-400'>View gyms</button>
                </div>
            </div>
            <div className='border-4 border-teal-800 max-lg:flex-col max-lg:text-sm  items-center pt-6 w-[400px] h-[550px] max-lg:w-[250px] max-lg:items-center max-lg:h-[600px] flex-wrap bg-red-50 text-black flex flex-col '>
                <div className='flex flex-col gap-2 py-4'>
                <h1 className='h1'>Monthly PASS</h1>
                <p>Multiple Excercises and Qualified Trainers</p>
                <p className='font-light border-b-2 border-b-slate-500'>FROM /$ 
                <span className='text-4xl'>21</span>.95/ PER Month</p>
                </div>
                <div className='flex flex-col items-start border-b-2 border-b-teal-800 gap-3 pb-4'>
                  <p className='flex flex-row items-center justify-center gap-5 flex-wrap'><ImRadioChecked size="2rem"/><span>Access the equipment you want</span></p>
                  <p className='flex flex-row items-center justify-center gap-5 flex-wrap'><ImRadioChecked size="2rem"/><span>Unlimited Visits</span></p>
                  <p className='flex flex-row items-center justify-center gap-5 flex-wrap'><ImRadioChecked size="2rem"/><span>No Contract, Cancel anyTime</span></p>
                </div>
                <div className='flex flex-col border-b-2 border-b-gray-500 gap-3 pb-3'>
                  <h1 className='h1 text-2xl'>Competitive flexibility</h1>
                  <p>Just pay when you go</p>
                  <button className='w-[200px] h-[60px] bg-teal-500 text-orange-400'>View gym</button>
                </div>
            </div>
            </div>
       
    </section>
    
  )
}

export default PayMent