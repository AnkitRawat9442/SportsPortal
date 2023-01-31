import React from 'react'
import SportsList from "../component/Sports/SportsList"
import Header from "../component/Header";

import { useNavigate } from 'react-router-dom';
const SportsPage = (props) => {

  const navigate = useNavigate();



  const onlogouthandler = () => {

    props.UserHandler();
    navigate('/');
  }


  return (



    <div>

      <Header username={props.user.name} onLogout={onlogouthandler} />
      <SportsList user={props.user} SportHandler={props.SportHandler} />
    </div>


  )
}

export default SportsPage