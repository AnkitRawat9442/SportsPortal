import React , {useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Admin from "./component/Admin/Admin";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SportItemBoardPage from "./pages/SportItemBoardPage";
import SportsPage from "./pages/SportsPage";

function App() {
  
  const [user , setUser] = useState ();
  const [sport , setSport] = useState ();

  const UserHandler = (u)=>{
    console.log(u);
    setUser(u);
  }
 
  
  const SportHandler = (s)=>{
    console.log(s);
    setSport(s);
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LoginPage UserHandler = { UserHandler} />} />
        <Route path="sportItemBoard" element={user && < SportItemBoardPage user = {user} sport = {sport} />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="sportsportal" element={user && < SportsPage user = {user}  UserHandler = { UserHandler} SportHandler= {SportHandler} />} />
        <Route path="adminauth" element={<AdminPage />} />
        <Route path="admin" element={<Admin />} />
        
      </Routes>
    </BrowserRouter>
  );
}



export default App;

