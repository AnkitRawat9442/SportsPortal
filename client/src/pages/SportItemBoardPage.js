import React from 'react'
import SportItemBoard from "../component/Sports/SportItemBoard";

const SportItemBoardPage = (props) => {
  return (
    <SportItemBoard sport={props.sport} user = {props.user}  />
  )
}

export default SportItemBoardPage