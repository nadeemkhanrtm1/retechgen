import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Overview from "./pages/Overview/Overview";
import Services from "./pages/Services/Services";
import Mission from "./pages/Mission/Mission";
import Focus from "./pages/Focus/Focus";
import {BrowserRouter} from "react-router-dom";
import "./assests/styles/main.scss";
import Vision from './pages/Vision/Vision';
import Testimonial from './pages/Testimonial/Testimonial';
import TechnologyPartner from './pages/Technology-Partner/TechnologyPartner';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Overview/>
        <Services/>
        <Mission/>
        <Focus/>
        <Vision/>
        <Testimonial/>
        <TechnologyPartner/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
