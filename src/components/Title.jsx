import React from 'react'

export default function Title(props) {
  return (
    <div className='w-2/5 h-40 border-[4px] border-opacity-15 border-white rounded-xl flex justify-center max-[376px]:w-[360px] max-[376px]:h-28'>
        <div className='h-full w-11/12 flex items-center justify-between'>
            <img src={props.logo} alt="logo" className='max-[376px]:h-16'/>
            <div className='h-[99px] w-[130px] bg-white rounded-lg flex flex-col items-center justify-center max-[376px]:w-24 max-[376px]:h-20'>
                <p className='font-medium text-[18px] text-blue-700 max-[376px]:text-sm'>Score</p>
                <h1 className='text-[40px] font-bold max-[376px]:text-lg'>{props.score}</h1>
            </div>
        </div>
    </div>
  )
}
