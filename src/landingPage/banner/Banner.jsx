import React from 'react'
import './banner.css'
import ai from '../../assets/ai.png';
const Banner = () => (
  
  <div className="ap__banner section__padding" id="home">
    <div className="ap__banner-content">
      <h1 className='gradient__text'>Let&apos;s Build Something amazing with Awiskaar </h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="ap__banner-content-button">
            <button type="button">Get Started</button>
      </div>
    </div>

    <div className="ap__banner-image vibrate-1">
      <img src={ai} alt='ai' />
    </div>
  </div>
  
);

export default Banner;