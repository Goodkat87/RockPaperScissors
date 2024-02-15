import React from 'react'

export default function Title(props) {
  return (
    <div className='w-2/5 h-40 border-[4px] border-opacity-15 border-white rounded-xl flex justify-center'>
        <div className='h-full w-11/12 flex items-center justify-between'>
            <img src={props.logo} alt="logo"/>
            <div className='h-[99px] w-[130px] bg-white rounded-lg flex flex-col items-center justify-center'>
                <p className='font-medium text-[18px] text-blue-700 '>Score</p>
                <h1 className='text-[40px] font-bold'>12</h1>
            </div>
        </div>
    </div>
  )
}
