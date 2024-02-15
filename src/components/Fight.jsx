import React from 'react'

//import of components
import Pick from './Pick'

export default function Fight(props) {
  return (
    <div className='w-2/4 h-[400px] flex items-center justify-between'>

        <div className='flex items-center flex-col gap-12'>
            <p className='text-white text-3xl'>YOU PICKED</p>
            <Pick choice={props.choice} color={props.color}></Pick>
        </div>
        {true
        ?
        <div className='flex flex-col gap-2'>
            <p className='text-white flex justify-center text-5xl'>YOU LOSE</p>
            <button className='btn bg-white' onClick={()=>{props.setFight(true)}}>PLAY AGAIN</button>
        </div>
        :
        <div className='flex flex-col gap-2'>
            <p className='text-white flex justify-center text-5xl'>YOU WIN</p>
            <button className='btn bg-white text-red-600' onClick={()=>{props.setFight(true)}}>PLAY AGAIN</button>
        </div>
        }
        <div className='flex items-center flex-col gap-12'>
            <p className='text-white text-3xl'>THE HOUSE PICKED</p>
            <Pick choice={props.choiceIA} color={props.colorIA}></Pick>
        </div>
        
    </div>
  )
}
