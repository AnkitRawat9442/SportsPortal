import React , {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SportsPage from "./pages/SportsPage";

function App() {
  
  const [user , setUser] = useState ();

  const UserHandler = (u)=>{
    console.log(u);
    setUser(u);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LoginPage UserHandler = { UserHandler} />} />
          
        <Route path="register" element={<RegisterPage />} />
        <Route path="sportsportal" element={user && < SportsPage user = {user} />} />
      
       
      </Routes>
    </BrowserRouter>
  );
}



export default App;

