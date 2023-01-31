
import React  from 'react'

import axios from "axios";
const URL = "https://sportsgehu.onrender.com";
// const URL = "http://localhost:4000";
const BookedItem = (props) => {


    const user = props.user;

  const ondeleteHandler = ()=>{
    console.log(props);
    axios.delete(`${URL}/api/booking/deleteSports/${props.data._id}`).then(res => {
       console.log(res.data);
       props.reloadHandler();
      }).catch((err)=>{
    })
  }

  return (
    <div className=' p-2 px-5  border-b-4 border-black flex justify-between items-center'>
     <span> {props.data.date}</span>
     <span> {props.data.startTime}{ props.data.startTime < "12"  ? " AM" : " PM" } </span>
     <span> {props.data.endTime} { props.data.endTime < "12"  ? " AM" : " PM" } </span>
     <span> {props.data.bookedBy}</span>
   
     <div className='flex items-center '>
     <svg xmlns="http://www.w3.org/2000/svg" className='text-green-600' width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>
     <span>Booked</span></div>
   
    {user === true ?  <button onClick={ondeleteHandler} > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  className='mx-5 text-red-800'  viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg> </button>   : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20 " fill="currentColor" className='mx-5 text-green-800   ' viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>  }
   
   
    </div>
  )
}

export default BookedItem