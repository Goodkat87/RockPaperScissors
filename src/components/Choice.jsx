import React from 'react'

export default function Choice(props) {
  return (
    <div className='w-2/5 h-[400px] flex flex-wrap justify-center items-center relative'>
        <div onClick={()=>{props.setfight(false)}} className='absolute top-5 left-28 w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-b from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]'>
            <div className='w-32 h-32 justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                <img src={props.paper} alt="scissors"/>
            </div>
        </div>
        <div onClick={()=>props.setfight(false)} className='absolute top-5 right-28 w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-t from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)]'>
            <div className='w-32 h-32 justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                <img src={props.scissors} alt="scissors"/>
            </div>
        </div>
        <div onClick={()=>props.setfight(false)} className='absolute bottom-10 w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-t from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)]'>
            <div className='w-32 h-32 justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                <img src={props.rock} alt="scissors"/>
            </div>
        </div>
        <img src={props.triangle} alt="" className='w-52 h-52'/>

    </div>
  )
}
