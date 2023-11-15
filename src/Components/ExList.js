import React from 'react'
import db from "../Assets/pics/db.jpeg"


const ExList = ({prt}) => {
    
  return (
    <div className=' '>
     <h1>{prt.bodyPart}</h1>
     <img src={prt.gifUrl}/>
    </div>
  )
}

export default ExList