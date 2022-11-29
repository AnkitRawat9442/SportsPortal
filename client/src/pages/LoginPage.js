import React from 'react'
import Login from "../component/Auth/Login";
const LoginPage = (props) => {
  return (
    <Login UserHandler = {props.UserHandler} />
  )
}

export default LoginPage;