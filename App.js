import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navber from './Navber';
import './App.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import { PiScooterBold } from "react-icons/pi";
import { useContext } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Home from './Home';
import Login from './Login';
import Contact from './Contact';
import Sfjwe from './Sfjwe';

function App() {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Sfjwe' element={<Sfjwe />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;