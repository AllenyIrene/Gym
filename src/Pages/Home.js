import React from 'react'
import AboutUs from '../Components/AboutUs'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Location from '../Components/Location'
import Services from './Services'


const Home = () => {
  return (
    <>
    <div className=''>
   <Banner/>
   </div>
   <div>
    <AboutUs/>
   </div>
   
   <div>
    <Cards/>
    <Location/>
   </div>
    </>

  )
}

export default Home