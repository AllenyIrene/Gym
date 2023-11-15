import React from "react";
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="">
    <BrowserRouter basename="/Footware-site">
    <Routes>
      <Route exact path="/Footware-site" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
