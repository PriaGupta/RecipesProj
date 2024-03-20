import React from 'react'
import './recipes.css'

const Footer = () => {
  return (
    
    <div>
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"> Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
            </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by ABC
            </p>
          </div>

          <div class="col-md-4 ">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a class="github" href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer
