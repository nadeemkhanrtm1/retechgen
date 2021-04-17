import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import {BrowserRouter} from "react-router-dom";
import "./assests/styles/main.scss";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <Home/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
