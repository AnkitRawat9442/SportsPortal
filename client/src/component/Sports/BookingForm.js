import React, { useState } from 'react'
import Modal from '../UI/Modal'
import axios from "axios";
const URL = "https://sportsgehu.onrender.com";
// const URL = "http://localhost:4000";
const BookingForm = (props) => {
    
    //  const [isBooked, setisBooked] = useState(true);
    let isBooked = false;
    const [bookingDetail, setBookingDetail] = useState({ player_count: "", date: "", startTime: "", endTime: "" });
    
    const [ error , setError]  = useState({}) ;
    
    const onChangeHandler = (e) => {
        const key = e.target.id;
        const val = e.target.value;
        setBookingDetail((pre) => {
            return ({ ...pre, [key]: val })
        })
    }

    
    const onSubmitHandler = (e) => {
       
        e.preventDefault();
        // console.log(props.sport);
        // console.log(bookingDetail);
        // console.log("prop"+ props);
     
       
        const bookdate = new Date(bookingDetail.date);

        const curdate = new Date()
      
        if(curdate.getFullYear() === bookdate.getFullYear())
        {
            if(curdate.getMonth() <= bookdate.getMonth() && curdate.getDate() <= bookdate.getDate())
            {
                console.log("goooo....");
            }
            else
            {
                setError((pre)=>{
                    return ({...pre , Status : "please select valid month and day"});
                  }) 
                  return;
            } 
        }
        else{
            setError((pre)=>{
                return ({...pre , Status : "please select valid year"});
              }) 
              return ;
        }
     
        const SPORT = {
            id: props.user.id,
            name: props.user.name,
            collegeName: props.user.college,
            sport: props.sport,
            date : bookingDetail.date  ,
            startTime : +bookingDetail.startTime   ,
            endTime :  +bookingDetail.endTime  , 
            players : bookingDetail.player_count,
        }
        console.log("sport " , SPORT)
        axios.post(`${URL}/api/booking/add`,SPORT).then(res => {
            console.log(res);
            console.log(res.status);
            console.log(res.data);
            setError((pre)=>{
                return ({...pre , Status : "booking Success "});
              })
        }).catch((err) => {
            console.log(err.response.data);
            setError((pre)=>{
                return ({...pre , Status : err.response.data})
              })
        });

        setBookingDetail((pre) => {
            return ({ player_count: "", date: "", startTime: "", endTime: "" })
        })
        setError({});
        
    }


return (
    <Modal onClick={props.onCloseForm}>

        {isBooked === true ?
            <div>
                Game is booked
            </div>
            :
            <form onSubmit={onSubmitHandler} className="relative max-w-[400px] w-full mx-auto   bg-gray-900 p-6 px-8  border-4 border-white shadow-lg shadow-white ">
               
              {!error.length  && <div className='text-red-600 text-center text-xl font-bold'> {error.Status} </div> } 
                <button className='absolute top-4 right-4' onClick={props.onCloseForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bg-white bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <div className='text-white text-center text-2xl font-semibold'> Booking Form </div>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label htmlFor='player_count'> Player Count </label>

                    <input required={true} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id="player_count" type="Number" onChange={onChangeHandler} value={bookingDetail.player_count} placeholder="Enter Number of Player" />
                </div>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label htmlFor='date'> Select Date  </label>

                    <input required={true} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id="date" type="date" onChange={onChangeHandler} value={bookingDetail.date} placeholder="Select Date " />
                </div>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label  > Choose Time Slot </label>

                    <input required={true} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id="startTime" type="number" min="09:00" max="05:00" onChange={onChangeHandler} value={bookingDetail.startTime} placeholder="Enter Start Time" />
                    <input required={true} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id="endTime" type="number" min="9" max="17" onChange={onChangeHandler} value={bookingDetail.endTime} placeholder="Enter End Time " />
                </div>

                <button className=' mt-2 p-1 w-full bg-green-600  text-white font-semibold rounded-lg hover:bg-gray-300 hover:text-black '>
                    Book
                </button>


            </form>}

    </Modal>
)
}

export default BookingForm