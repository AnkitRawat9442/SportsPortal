import React ,  {useState  } from 'react'
import SportsList from "../component/Sports/SportsList"
import Header from "../component/Header";
import BookingForm from "../component/Sports/BookingForm"
import { useNavigate } from 'react-router-dom';
const SportsPage = (props) => {

  const [showForm , setFormCart] = useState(false);
  
  const [user , setUser] = useState(props.user);
  console.log(user);

  const [sport , setSport] = useState("");
  
  
const navigate = useNavigate();

   const showFormHandler = ()=>{
    setFormCart(true);
   }
   
   const closeFormHnadler = ()=>{
    setFormCart(false);
   }
   
   const onlogouthandler = ()=>{
    setUser() ;
    navigate('/');
   }
  
  const onSportHandler = (s)=>{
      setSport(s);
  }

  return (
 
  
      <div>
      
    
        <div> 
        {showForm && <BookingForm onCloseForm = { closeFormHnadler } user={user}  sport = {sport}   />   } 
        <Header username = {user.name} onLogout= { onlogouthandler}  />
        <SportsList onShowForm = {showFormHandler}  sport={onSportHandler}  /> 
       </div> 
      
     
       </div>
  )
}

export default SportsPage