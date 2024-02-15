import React from 'react'

export default function Title(props) {
  return (
    <div className='w-1/2 h-40 border-[4px] border-opacity-15 border-white rounded-xl flex items-center'>
        <img src={props.logo} alt="logo"/>
        <div className='h-[99px] w-[130px] bg-white rounded-lg flex flex-col items-center justify-center'>
            <p>Score</p>
            <h1>12</h1>
        </div>
    </div>
  )
}
