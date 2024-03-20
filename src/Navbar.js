import React from 'react';
import './Navbar.css';
import ll from './flogo.jpg';
import {Link} from 'react-router-dom'

const Navbar= () =>{
    return(
        <>
        
        <div className='all'>
        <div className='container'>
        {/* <div className='nav-both'>
         <div className='logo'>
         <img src={ll} alt='foodlogo'/>
         </div>
         <div className='nav-inner'>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/'>Recipes</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
         </div>
        </div> */}

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" > <img src={ll} class="logo"/></a>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav">
      
          <li class="nav-item">
         <Link class="nav-link" to='/login'>Login</Link></li>
        <li class="nav-item">
          <Link class="nav-link" to='/'>Recipes</Link></li>
        <li class="nav-item">
          <Link class="nav-link" to='/about'>About</Link></li>
        <li class="nav-item">
          <Link class="nav-link" to='/contact'>Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </div>
        </>
    )
}
export default Navbar