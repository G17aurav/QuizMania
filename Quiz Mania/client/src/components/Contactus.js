import React from 'react'
import star from "../Assets/star-shape-wall-clock-removebg-preview.png"
import './Contactus.css'
// import { useState } from 'react'

const Contactus = () => {
  return (
    <div className='wrapper'>
      <div className='section-contact-hero'>
        <div className='main-container'>
          <div className='container w-container'>
            <div className='contact-wrapper'>
              <div className='hero-eyebrown'>Contact Us<br /></div>

            </div>
          </div>
        </div>
      </div>
      <div className='contact-text w-richtext'>
        <p className='para'>If you need to contact us for any other matters, please use the following contact channels:</p>
        <ul>
          <li>
            <img src={star} alt='' className='imgr'></img>
            <p>For security incidents, email <span>security@quizmania.com.</span></p>
          </li>
          <li>
          <img src={star} alt='' className='imgr'></img>
            <p>For sharing experiences, email <span>feelings@quizmania.com.</span></p>
          </li>
          <li>
          <img src={star} alt='' className='imgr'></img>
            <p>For any complaints (e.g. related to sustainability, human rights, or environmental law), please send an email to  <span>complaints@quizmania.com.</span></p>
            </li>
          <li>
          <img src={star} alt='' className='imgr'></img>
            <p>For any other issues, please send an email to <span>hello@quizmania.com.</span></p>
            </li>
        </ul>
      </div>
      <div className='cs-footer'>
        <h3>Contact Developers At</h3>
        <div className='foot'>
          <div>
            <h4 className='cs-heading4'>Email : </h4>
            <p>akashthapa07@gmail.com</p>
            <p>gauravsingh17@gmail.com</p>
            <p>nischaysingh36@gmail.com</p>
          </div>
          <div>
            <h4 className='cs-heading4'>Phone Number : </h4>
            <p>0532-777777</p>
            <p>0532-171717</p>
            <p>0532-363636</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
