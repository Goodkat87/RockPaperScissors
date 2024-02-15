import React from 'react'

export default function Title(props) {
  return (
    <div className='w-1/2 h-40 border-[4px] border-opacity-15 border-white rounded-xl flex items-center'>
        <img src={props.logo} alt="logo"/>
    </div>
  )
}
