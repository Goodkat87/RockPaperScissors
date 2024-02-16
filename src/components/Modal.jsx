import React, {useRef} from 'react'

export default function Modal(props) {
    const modal = useRef(null)
  return (
    <div className="absolute bottom-3 right-3 max-[376px]:right-[125px]">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className=" border border-white bg-transparent w-32 h-9 rounded-lg text-white" onClick={()=>modal.current.showModal()}>{props.txt}</button>
        <dialog ref={modal} className="modal">
        <div className="modal-box flex justify-center pt-20 w-5/6">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><img src={props.close} alt="close" /></button>
            </form>
            <h3 className="font-bold text-lg absolute left-9 top-3">{props.txt}</h3>
            <img src={props.rules} alt="rules"/>
        </div>
        </dialog>
    </div>
  )
}
