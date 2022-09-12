import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () =>{
  return (
    <div className='navbar'>
      <li><NavLink className="nav_bar_link"to='/' >Home</NavLink></li>
      <li><NavLink className="nav_bar_link"to='/Projects'>Projects </NavLink></li>
      <li><NavLink className="nav_bar_link" to='/CreateProject'>Create Project</NavLink></li>
      <li><NavLink  className="nav_bar_link"to='/Programminglanguages'> Programming languages</NavLink></li>                
    </div>
  )
}

export default Navbar