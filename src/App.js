import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import CreateProject from './components/CreateProject';
// import Programminglanguages from './components/Programminglanguages';
import React from 'react'

function App() {
  return (
    <>
      <div className="App">
     
      
<Router>
        <Navbar />
        <Routes>
        < Route path="/" element={<Home />} /> 
        < Route path="/Projects" element={<Projects />} />
        {/* < Route path="/CreateProject" element={<CreateProject />} /> */}
        {/* < Route path="/Programminglanguages" element={<Programminglanguages />} /> */}
        </Routes>
      </Router>
      <div className="bg" />
      </div>
     
    </>
   )
  }

export default App

