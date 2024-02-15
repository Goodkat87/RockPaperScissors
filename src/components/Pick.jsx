import React from 'react'

export default function Pick(props) {
  return (
    <div className={`w-56 h-56 flex justify-center items-center rounded-full ${props.color}`}>
        <div className='w-44 h-44 justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
            <img src={props.choice} alt="scissors"/>
        </div>
    </div>
  )
}
