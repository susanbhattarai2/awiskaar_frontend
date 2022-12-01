import React from 'react'
import './banner.css'
import ai from '../../assets/aii.png';
const Banner = () => (
  
  <div className="ap__banner section__padding scale-up-center" id="home">
    <div className="ap__banner-content">
      <h1 className='gradient__text'>Let&apos;s Build Something amazing with Awiskaar </h1>
      <p>Awiskaar Solutions is one of the fast emerging company in the valley. We provides every possible services related to the Technology field.</p>

      <div className="ap__banner-content-button">
            <button type="button"> <a href='#contact'>Get Started</a></button>
      </div>
    </div>

    <div className="ap__banner-image">
      <img src={ai} alt='ai' />
    </div>
  </div>
  
);

export default Banner;