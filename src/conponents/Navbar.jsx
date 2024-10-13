import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () =>{
  return (
    <div>
     
         <nav>
        
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/Blog" className='nav-link'>Blog</NavLink>
        <NavLink to="/Services" className='nav-link'>Services</NavLink>
        <NavLink to="/Contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/Profile"className='nav-link'>Profile</NavLink> 
        <NavLink to="/About"className='nav-link'>About</NavLink>

     </nav> 

{/* 
 <nav class="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
  <div class="container">
   <div class="nav-link" to="/Home"><h3>Yousuf</h3></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navLInk ">
        <li class="nav-item">
       <NavLink class="nav-link" to="/Home">Home</NavLink>
        </li>
        <li class="nav-item">
            <NavLink class="nav-link" to="/Blog">Blog</NavLink>
        </li>
        <li class="nav-item">
            <NavLink class="nav-link" to="/Profile">Profile</NavLink>
        </li>
        <li class="nav-item">
            <NavLink class="nav-link" to="/Services">Services</NavLink>
        </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/Contact">Contact</NavLink>
        </li>
       
          
      </ul> 
      
    </div>
  </div>
</nav>

 */}















    </div>
   
  )
}

export default Navbar;

