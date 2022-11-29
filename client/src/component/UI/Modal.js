import React from 'react'
import ReactDom from "react-dom" ;

const Backdrop = props =>{
   return (
       <div className='fixed z-20 top-0 left-0 w-full h-screen  bg-gray-900  opacity-50' onClick={props.onClick} >

       </div>
   )
}

const ModalOverlay = props =>{
  return (
    <div className='fixed z-50 w-screen  h-auto mx-auto mt-20 '>
        <div>
           {props.children}
        </div>
    </div>
  )
}
const  PortalElement = document.getElementById("overlay"); 

const Modal = (props) => {

 
  return (
    <div className=' '>
     {ReactDom.createPortal(<Backdrop  onClick={props.onClick} /> , PortalElement)}
     {ReactDom.createPortal(<ModalOverlay > {props.children} </ModalOverlay> ,  PortalElement) }
    </div>
  )
}

export default Modal;