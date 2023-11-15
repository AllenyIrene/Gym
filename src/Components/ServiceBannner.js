import React, { useEffect, useState } from 'react'
import { serviceSection } from '../Utilities'
import { fetchAPI, getAPI } from '../Utilities/APIfile'
import ExList from './ExList'

const ServiceBannner = () => {
    const [parts, setParts] = useState([])
    const [body, setBody] = useEffect([])

  return (
    <section className='w-full max-container min-h-screen flex flex-col flex-wrap justify-between'> 
        <div className='flex flex-row flex-wrap gap-2 max-md:flex-col mt-8 items-center justify-center '>
       
        </div>
     

    </section>
  )
}

export default ServiceBannner