import React from 'React';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MyLayout from "./MyLayout.jsx"
import Home from "./components/home/Home.jsx"
import DetailPage from './components/DetailPage.jsx';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={ <MyLayout>
          <Home/>
        </MyLayout>}/>
        <Route path='/' element ={ <MyLayout>
          <DetailPage/>
        </MyLayout>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
