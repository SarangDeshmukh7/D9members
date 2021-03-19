import React from 'react'
import { NavLink } from 'react-router-dom'
import play from '../image/play-store.png'
import app from '../image/app-store.png'



function Footer() {

  return (
    // <>
    //   <footer className="footer w-100  text-center bg-light">
    //     <p>© 2021 – 22 E-Shopping, All Rights Reserved.</p>
    //     <NavLink to="/privacy">Privacy Policy </NavLink>
    //     <span>|</span>
    //     <NavLink to="/cookie"> Cookie Policy</NavLink>
    //   </footer>
    // </>
    
    <div className="footer">
    
    <div className="container">
        <div className="row">

            <div className="footer-col-1">

                <h3>
                    Download Our App
                </h3>
                {/* <p style="color: antiquewhite"> */}
                    <p>Download our app on android and ios.</p>
                {/* </p> */}
                <div className="app-logo">

                <img src={play}></img>
                <img src={app}></img>
                    

                </div>

            </div>
            <div className="footer-col-2">
                <h3>About</h3>    
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Our team</li>
                    <li>Join Us</li>


                </ul>
            </div>

            <div className="footer-col-3">
                <h3>Usefull Links</h3>    
                <ul>
                    <li>Coupons</li>
                    <li>Blog Posts</li>
                    <li>Return Policy</li>
                    <li>Join Affilate</li>


                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow Us</h3>            
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Glassdoor</li>

                </ul>
            </div>
        </div>
        <hr/>
        <p style={{color:'white'}}>© Copyright 2021 TechNeo | All Rights Reserved</p>
    </div>
</div>
  )
}

export default Footer
