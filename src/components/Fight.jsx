import React from 'react'

export default function Fight(props) {
  return (
    <div className='w-2/4 h-[400px] flex items-center justify-between'>
        {true
            &&
            <div className='flex items-center flex-col gap-12'>
                <p className='text-white text-3xl'>YOU PICKED</p>
                <div className='w-56 h-56 flex justify-center items-center rounded-full bg-gradient-to-b from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]'>
                    <div className='w-44 h-44 justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                        <img src={props.paper} alt="scissors"/>
                    </div>
                </div>
            </div>
        }
        {true
        ?
        <div className='flex flex-col gap-2'>
            <p className='text-white flex justify-center text-5xl'>YOU LOSE</p>
            <button className='btn bg-white' onClick={()=>{props.setFight(true)}}>PLAY AGAIN</button>
        </div>
        :
        <p>YOU WIN</p>
        }
        {
            true 
            &&
            <div className='flex items-center flex-col gap-12'>
                <p className='text-white text-3xl'>THE HOUSE PICKED</p>
                <div className='w-56 h-56 flex justify-center items-center rounded-full bg-gradient-to-b from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]'>
                    <div className='w-44 h-44 justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                        <img src={props.paper} alt="scissors"/>
                    </div>
                </div>
            </div>

        }
    </div>
  )
}
