import React, { useState, useEffect } from 'react'
import axios from "axios";
import AdminItem from './AdminItem';
import {  useNavigate } from "react-router-dom";
// const URL = "http://localhost:4000";
const URL = "https://sportsgehu.onrender.com";
const Admin = () => {

   const navigate = useNavigate();
  const [clg, setClg] = useState("gehu");
  const [data, setData] = useState([]);
  const [reload , setReload] = useState(false);
  const reloadHandler = ()=>{
    setReload(!reload);
  }


  useEffect(() => {
    axios.get(`${URL}/api/booking/allBooking/${clg}`).then(res => {
      console.log(res.status);
      console.log(res.data[0]);

      setData(res.data);
    }).catch((err) => {
      console.log(err)
    })

  }, [clg , reload])

  
  const onChangeInput = (e) => {
    const val = e.target.value;

    setClg(val);
    console.log(clg)
  }
  
  const onClickHandler = ()=>{
    navigate("/");
  }
  return (
    <div className='border-4 border-red-500 '>
      <div className=' text-3xl bg-red-500 text-white  p-2 grid grid-cols-3 '>
        <h1 className='col-start-1 col-span-2 p-1'>ADMIN PORTAL</h1>
        <button   className=' text-end text-xl ' onClick={onClickHandler}>  Log out </button>
      </div>
      <div className='text-right mx-2 mb-4'>

        <select required={true} onChange={onChangeInput} value={clg} className='rounded-lg card  mt-2 p-2' id="college_name">
          <option value="" >Choose</option>
          <option value="geu" >Geu</option>
          <option value="gehu">Gehu-Dehradun</option>
          <option value="geub">Gehu-Bhimtal</option>
          <option value="geuh">Gehu-Haldwani</option>
        </select>
      </div>



      <div className='card mb-4 '>
        <div className=' card grid grid-cols-7  gap-3 ml-2 p-2  '>
          <span className=''>Date</span>
          <span className=''>Sport</span>
          <span className=' '>College</span>
          <span className=''>Booked By</span>
          <span className=''>Start</span>
          <span className=''>End</span>
          <span className=''>Status</span>
        </div>

        {data.map((d) => {
          return <AdminItem key={d._id} d={d}  reloadHandler={reloadHandler}/>
        })}

      </div>
    </div>
  )
}

export default Admin