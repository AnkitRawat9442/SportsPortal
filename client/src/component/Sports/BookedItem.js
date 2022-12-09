import React from 'react'

const BookedItem = (props) => {
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
    </div>
  )
}

export default BookedItem