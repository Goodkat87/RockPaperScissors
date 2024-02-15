//import of hook
import { useState } from 'react'

//import of images
import Rules from './assets/img/image-rules.svg'
import Paper from "./assets/img/icon-paper.svg"
import Rock from "./assets/img/icon-rock.svg"
import Scissors from "./assets/img/icon-scissors.svg"
import Close from "./assets/img/icon-close.svg"
import Triangle from "./assets/img/bg-triangle.svg"
import Logo from "./assets/img/logo.svg"

//import of components
import Title from './components/Title'
import Modal from './components/Modal'
import Choice from './components/Choice'
import Fight from './components/Fight'

function App() {
  const [fight, setFight] = useState(true)
  const [colors, setColors] = useState(["bg-gradient-to-b from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]",
                                        "bg-gradient-to-t from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)]",
                                        "bg-gradient-to-t from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)]"])
  const [color, setColor] = useState("")
  const [colorIA, setColorIA] = useState("")
  const [choice, setChoice] = useState("")
  const [choiceimg, setChoiceimg] = useState([Paper,Scissors,Rock])
  const [choiceIA, setChoiceIA] = useState("")
  const [score, setScore] = useState(0)
  const [txtbtn, settxtbtn] = useState("PLAY AGAIN")
  let getRandomInt = (max) =>{
    return Math.floor(Math.random() * max);
  }

  let game = (player,ordi) =>{
  if (ordi == player) {
    return "DRAW"
  }else if (player == Paper ) {
      if (ordi == Scissors) {
          return "LOSE"
      }else{
        
        return "WIN"
      }
  }else if (player == Rock) {
      if (ordi == Paper) {
        return "LOSE"
      }else{
        
        return "WIN"
      }
  }else if (player == Scissors) {
      if (ordi == Rock) {
          return "LOSE"
      }else{
        
      return "WIN"
      }
  }
  }

  let randomChoice = () => {
    let random= getRandomInt(3)
    setChoiceIA(choiceimg[random])
    setColorIA(colors[random])
  }

  return (

    <div className='h-screen w-screen bg-gradient-to-b from-[#1f3756] to-[#141539] flex flex-col items-center justify-center gap-5 relative'>
      <Title score={score} logo={Logo} ></Title>

      {fight
        ?
        <Choice choiceimg={choiceimg} setChoice={setChoice} setfight={setFight} paper={Paper} rock={Rock} scissors={Scissors} triangle={Triangle} colors={colors} setColor={setColor} randomChoice={randomChoice}></Choice>
        :
        <Fight settxtbtn={settxtbtn} txtbtn={txtbtn} score={score} setScore={setScore} choiceIA={choiceIA} colorIA={colorIA} choice={choice} setFight={setFight} color={color} game={game}></Fight>
      }
      
      <Modal rules={Rules} close={Close} txt={"Rules"}></Modal>
      
    </div>
  )
}

export default App
