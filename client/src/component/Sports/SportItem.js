import React from 'react'

const SportItem = (props) => {
   
    
          const onClickHandler = ()=>{
            props.onShowForm();
            props.sports(props.sport.name)
          }
   
    
    return (
        <div className='card  text-center  p-2 w-60 h-60 flex flex-col justify-between  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>
            <div className=' w-full flex justify-center  ' >   <img className='card rounded-full w-32 h-32 ' src={props.sport.src} alt="no game " /> </div>
           <div className='p-2'>
           <div className='  font-semibold  text-2xl'>  {props.sport.name} </div>
           
           <button onClick={onClickHandler} className= ' mt-2 bg-red-600  rounded-lg  p-1 w-full font-semibold text-white '> 
           Book Now </button>
           
          
           </div>
        </div>
    )
  
}

export default SportItem