import React from 'react'
import './recipes.css'
import photo from './img/ph.jpeg'

const Contact=()=>{
    return(
        <>
		<div class="container">
  <div class="inner-row">
  <div class="row">
  <div class="col-md-6 ">
  <div class="book-car">
  <div class="sec1">
  <img src={photo}/>
  </div>
  </div>
  </div>
  
 
  <div class="col-md-6">
    <div class="cont">
  <form class="mb-5" method="post" id="contactForm" name="contactForm" >
  <h3 id="contacth">Contact Us</h3>
  <div class="row">
  <div class="col-md-12 form-group">
  <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
  </div>
  </div>
 
  <div class="row">
  <div class="col-md-12 form-group">
  <input type="phone" class="form-control" name="subject" id="subject" placeholder="Phone Number"/>
  </div>
  </div>
  <div class="row">
  <div class="col-md-12 form-group">
  <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
  </div>
  </div>
  <div class="row">
  <div class="col-12">
    <li class="nav_button">
      <span><a href="#" class="cus-btn">Send</a></span>
    </li>
  
  </div>
  </div>
  </form>
  
  </div>
  </div>
  </div>
  </div>
  </div>
        </>
    )
}
export default Contact