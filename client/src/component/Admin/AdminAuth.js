import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const AdminAuth = () => {

   const navigate = useNavigate();
    const [password , setPassword ] = useState("");
    const Adminpassword = "Admin@123"
   const onChangeHandler = (e)=>{
    const value = e.target.value;
     setPassword(value);
   }

   const onSubmitHandler = (e)=>{
       e.preventDefault();
       if(password === Adminpassword)
        {
            navigate("/admin")
        }
        setPassword("")
   }
  
  return (
     <div className='h-96 flex flex-col justify-center'>
        <form onSubmit={onSubmitHandler} className='card border-4 rounded-lg border-white shadow-lg shadow-blue-500  p-5 flex flex-col max-w-[600px] w-full mx-auto  bg-blue-300  '>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-bold text-red-600 '> ADMIN LOGIN  </h1>
            </div>
            <div className='flex flex-col my-5'> 
              <label className='text-xl p-1 ' htmlFor='password' >Admin password  </label>
             <input className='border-2 border-black rounded-lg mt-2 p-2 focus:border-blue-300 bg-gray-100 ' placeholder='Enter password '  id="password" onChange={onChangeHandler} value= {password} />
            </div>
            <button type='submit' className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg' >
              Login
            </button>
        </form>
     </div>
  )
}

export default AdminAuth