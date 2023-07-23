import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SquareTwo from "./components/SquareTwo";
import SquareThree from "./components/SquareThree";
import SquareFour from './components/SquareFour'
import { HashLink } from 'react-router-hash-link';
import Contact from "./components/Contact";

const App = () => {

  const shouldRedirect = true;
  const [isMenuShown, setIsMenuShown] = useState(false);

  
  return (
    <>

      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} /> 


        <Routes>
          
          <Route index element={<HeroSection />} />
          <Route path='/Home' element={ <HeroSection /> } />
          <Route path='SquareFour' element={ <SquareFour /> } />
          <Route path='SquareThree' element={ <SquareThree /> } />
          <Route path='SquareTwo' element={ <SquareTwo /> } />

        </Routes>
        <HeroSection />
        <Products />
        <SquareFour />
        <SquareThree />
        <SquareTwo />
        <Contact />
      </>

  );
}

export default App;
