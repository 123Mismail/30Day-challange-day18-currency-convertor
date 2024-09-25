"use client"
import React, { useState } from 'react'

function BgChanger() {
const [color,setColor]=useState("blue")


  return (
    <div className='w-full h-screen '
    style={{background:color}}
    >
        
<div className='w-[300px ] h-[100px] rounded-xl gap-x-3 p-3  bg-white'>

    <button className='bottom-2 px-3 py-1 m-2 bg-red-600 text-white  '
    onClick={()=>setColor("red")}
    >bg Red</button>
    <button className='bottom-2 px-3 py-1 bg-green-600 text-white  '
    onClick={()=>setColor("green")}
    >bg green</button>
    <button className='bottom-2 px-3 py-1 bg-gray-600 text-white  '
    onClick={()=>setColor("gray")}
    >bg green</button>
    <button className='bottom-2 px-3 py-1 bg-pink-600 text-white  '
    onClick={()=>setColor("pink")}
    >bg green</button>
    <button className='bottom-2 px-3 py-1 bg-purple-600 text-white  '
    onClick={()=>setColor("purple")}
    >bg green</button>
    
</div>

    </div>
  )
}

export default BgChanger