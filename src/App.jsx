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
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-[#1f3756] to-[#141539] flex flex-col items-center justify-center gap-5 relative'>
      <Title logo={Logo} ></Title>
      {fight
        ?
        <Choice setfight={setFight} paper={Paper} rock={Rock} scissors={Scissors} triangle={Triangle}></Choice>
        :
        <Fight paper={Paper} rock={Rock} scissors={Scissors} setFight={setFight}></Fight>
      }
      <Modal rules={Rules} close={Close} txt={"Rules"}></Modal>
      
    </div>
  )
}

export default App
