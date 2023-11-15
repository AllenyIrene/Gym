import React from 'react'

const Excercise = ({pic:{image,label},changeBigPic,bigpic}) => {
  return (
    <div onClick={()=>changeBigPic(image)}>
        <img src={image} width={250} height={400} className={`rounded-[24px] border-4 ${bigpic === image ? "border-teal-600" : "border-transparent"}`}/>
        <h1 className='h1'>{label}</h1>
    </div>
  )
}

export default Excercise