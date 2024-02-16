import React,{useState} from 'react'

//import of components
import Pick from './Pick'

export default function Fight(props) {

    let calcul = () =>{
        if (props.score != 0 && props.game(props.choice,props.choiceIA) == "LOSE" ) {
            props.setScore(props.score-1)
        }else if (props.game(props.choice,props.choiceIA) == "WIN") {
            props.setScore(props.score+1)
        }
    }

  return (
    <div className='w-2/4 h-[400px] flex items-center justify-between max-[376px]:h-[400px] max-[376px]:w-[360px]'>
    
        <div className='flex items-center flex-col gap-12 max-[376px]:flex-col-reverse'>
            <p className='text-white text-3xl max-[376px]:text-sm'>YOU PICKED</p>
            <Pick choice={props.choice} color={props.color}></Pick>
        </div>
        <div className='flex flex-col gap-2 max-[376px]:self-end'>
            <p className='text-white flex justify-center text-5xl max-[376px]:text-xl'>YOU {props.game(props.choice,props.choiceIA)}</p>
            <button className='btn bg-white' style={{color:props.game(props.choice,props.choiceIA) == "LOSE" && "red"}} onClick={()=>{props.setFight(true),calcul()}}>{props.txtbtn}</button>
        </div>
        <div className='flex items-center flex-col gap-12 max-[376px]:flex-col-reverse'>
            <p className='text-white text-3xl max-[376px]:text-sm'>THE HOUSE PICKED</p>
            <Pick choice={props.choiceIA} color={props.colorIA}></Pick>
        </div>
        
    </div>
  )
}
