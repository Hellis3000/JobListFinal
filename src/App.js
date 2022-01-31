
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from "./pages/FrontPage.jsx";



import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <SearchPage /> }>
      </Route>
    </Routes>
  </BrowserRouter>

  );
}


export default App;
