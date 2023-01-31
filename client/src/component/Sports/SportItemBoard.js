import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BookingForm from "../Sports/BookingForm";
import BookedItem from "./BookedItem";
import axios from "axios";
const URL = "https://sportsgehu.onrender.com";
// const URL = "http://localhost:4000";


const DUMMY_DATA = [
  {
    id: 1,
    name: "Cricket",
    minimun_Player: 22,

  },
  {
    id: 2,
    name: "Chess",
    minimun_Player: 2,

  },
  {
    id: 3,
    name: "Badminton",
    minimun_Player: 2,

  },

  {
    id: 4,
    name: "Football",
    minimun_Player: 22,

  },
  {
    id: 5,
    name: "Vollyball",
    minimun_Player: 14,

  },
  {
    id: 6,
    name: "Carrom",
    minimun_Player: 2,

  },
  {
    id: 7,
    name: "Lawn-Tennis",
    minimun_Player: 2,

  },
  {
    id: 8,
    name: "Table-Tennis",
    minimun_Player: 2,

  },
  {
    id: 9,
    name: "Snooker",
    minimun_Player: 2,

  },
  {
    id: 10,
    name: "Basketball",
    minimun_Player: 14,

  },


]



const SportItemBoard = (props) => {

  const [showForm, setFormCart] = useState(false);
  const [Booking, setBooking] = useState([]);
  const [sport, setSport] = useState(props.sport);
  const showFormHandler = () => {
    setFormCart(true);
  }

  const closeFormHnadler = () => {
    setFormCart(false);
  }
   const [reload , setReload] = useState(false);
    const reloadHandler = ()=>{
      setReload(!reload);
    }
  useEffect(() => {

    axios.get(`${URL}/api/booking/bookedSports?sport=${sport}&college=gehu`).then((res) => {
      //  console.log(res);
      setBooking([]);
      res.data.map((s) => {
        setBooking((pre) => {
          return [...pre, s];
        })
        return s;
      })

    }).catch((err) => {
      console.log(err);
    })

  }, [showForm , reload ])



  return (
    <div>
      {showForm && <BookingForm onCloseForm={closeFormHnadler} user={props.user} sport={sport} />}

      <div className='flex justify-between items-center px-10'>
        <div className='flex items-center gap-3'>
        <Link to="/sportsportal" >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className='text-red-600 hover:text-red-400' fill="currentColor"  viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
        </Link>
        <span className='text-2xl font-bold m-1 text-blue-900 '> List Of Booking of {sport} </span>
        </div>
        <button onClick={showFormHandler} className='w-auto  my-5 py-2 px-5 bg-green-600 shadow-lg shadow-green-500/50 hover:shadow-green-400/40 text-white font-semibold rounded-lg' > Book Now  </button>
      </div>
      {DUMMY_DATA.map((s) => {
        if (s.name === sport) {
          return (<div className='w-full text-center text-xl '> Minimun Player Required : {s.minimun_Player} </div>);
        }
      })}
      {Booking.length > 0 && <div className='container m-5 mx-auto   border-4 border-black'>
        <div className='flex flex-row justify-between items-center px-4 py-2  pr-12 border-b-4 border-black text-xl font-bold'>
          <div >Date</div>
          <div>Start Time</div>
          <div>End Time</div>
          <div>Booked By</div>
          <div>Status</div>
          <div>Delete</div>
        </div>
        <div className=' '>
          {Booking.map((s) => {
            console.log("s   == " + s);
            console.log(s);
            let user = false ;
            if(+(s.bookedBy) === props.user.id)
               user = true ;
            return <BookedItem user={user}  data={s} key={s._id}  reloadHandler={reloadHandler} />
          })}
        </div>

      </div>}
    </div>
  )
}

export default SportItemBoard