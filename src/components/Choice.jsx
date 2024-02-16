import React from 'react'

export default function Choice(props) {
  return (
    <div className='w-2/5 h-[400px] flex flex-wrap justify-center items-center relative max-[376px]:w-[350px] max-[376px]:[200px]'>
        <div onClick={()=>{props.setfight(false),props.setColor(props.colors[0]),props.setChoice(props.choiceimg[0]),props.randomChoice()}} className='absolute top-5 left-28 w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-b from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] max-[376px]:top-0 max-[376px]:left-0'>
            <div className='w-[80%] h-[80%] justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                <img src={props.paper} alt="paper"/>
            </div>
        </div>
        <div onClick={()=>{props.setfight(false),props.setColor(props.colors[1]),props.setChoice(props.choiceimg[1]),props.randomChoice()}} className='absolute top-5 right-28 w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-t from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] max-[376px]:top-0 max-[376px]:right-0'>
            <div className='w-[80%] h-[80%] justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                <img src={props.scissors} alt="scissors"/>
            </div>
        </div>
        <div onClick={()=>{props.setfight(false),props.setColor(props.colors[2]),props.setChoice(props.choiceimg[2]),props.randomChoice()}} className='absolute bottom-10 w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-t from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)]'>
            <div className='w-[80%] h-[80%] justify-center flex items-center shadow-[inset_0_10px_6px_-0_rgba(0,0,0,0.3)] rounded-full bg-white'>
                <img src={props.rock} alt="rock"/>
            </div>
        </div>
        <img src={props.triangle} alt="triangle" className='w-52 h-52'/>
    </div>
  )
}
