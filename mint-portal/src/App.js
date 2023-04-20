import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import ForgotPassword from "./components/ForgotPassword";



function App() {
  return (
    <>
    <Navbar/>
     <div className="container">
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />

      </Routes>

     </div>
     <Footer/>
    </>

  )
}

export default App;
