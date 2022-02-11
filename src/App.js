import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import MyLayout from "./MyLayout.jsx"
import Home from "./components/home/Home.jsx"
import DetailPage from './components/DetailPage.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import BackOffice from './components/backOffice/BackOffice.jsx';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={ <MyLayout>
          <Home/>
        </MyLayout>}/>
        <Route path='/BackOffice' element ={ <MyLayout>
          <BackOffice/>
        </MyLayout>}/>
        <Route path='/DetailPage/:id/' element ={ 
        // <MyLayout>
          <DetailPage/>
        // </MyLayout>
      }/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
