import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
// import Contact from "./components/Contact";
import About from "./components/About";
import GetStarted from "./components/GetStarted";
import SignUp from './components/SignUp';
import Login from './components/Login';
import JobSearch from './components/JobSearch';
import Dashboard from './components/Dashboard';
import Hackathons from './components/Hackathons';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> {/* Add this line */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/get-started" element={<GetStarted />} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/job' element={<JobSearch/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/hackathons' element={<Hackathons/>} />
        </Routes>
      </Router>
    </ChakraProvider>
    
  );
}

export default App;
