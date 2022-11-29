import React  from 'react'
import graphic_logo from "../asset/graphic_logo.jpeg";

const Header = (props) => {
   
   
    
   //  const user = cntx.User;
   //  console.log(user);
    return (
        <div className='card '>
            <div className='flex flex-row justify-between p-1 '>
                <div className='flex flex-row  gap-3 w-16 h-16 p-1 ml-2'>
                  <img src={graphic_logo} alt="logo of graphic era" />
                
                    <div className='text-red-800'>Graphic <span className='text-black'> Era</span> </div>
                  
               </div>
                <div className='flex flex-row  justify-center items-center  gap-4 mr-10'>
                    <div className='flex flex-row gap-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="  bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <span> {props.username} </span>
                    </div>
                    <button  onClick={props.onLogout} className='bg-red-600 text-white rounded-lg px-4 p-1'>  Log out </button>
                </div>
            </div>
        </div>
    )
}

export default Header