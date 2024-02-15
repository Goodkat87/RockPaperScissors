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
    <div className='w-2/4 h-[400px] flex items-center justify-between'>
    
        <div className='flex items-center flex-col gap-12'>
            <p className='text-white text-3xl'>YOU PICKED</p>
            <Pick choice={props.choice} color={props.color}></Pick>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-white flex justify-center text-5xl'>YOU {props.game(props.choice,props.choiceIA)}</p>
            <button className='btn bg-white' style={{color:props.game(props.choice,props.choiceIA) == "LOSE" && "red"}} onClick={()=>{props.setFight(true),calcul()}}>{props.txtbtn}</button>
        </div>
        <div className='flex items-center flex-col gap-12'>
            <p className='text-white text-3xl'>THE HOUSE PICKED</p>
            <Pick choice={props.choiceIA} color={props.colorIA}></Pick>
        </div>
        
    </div>
  )
}
