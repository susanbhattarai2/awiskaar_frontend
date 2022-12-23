import React from 'react'
import './banner.css'
import ai from '../../assets/aiii.png';
import Typist from 'react-text-typist';
const Banner = () => (

  <div className="ap__banner section__padding scale-up-center" id="home">
    <div className="ap__banner-content">
      <h1 className='gradient__text'>Awiskaar Solutions </h1>
      {/* <p>Awiskaar Solutions is one of the fast emerging company in the valley. We provides every possible services related to the Technology field.</p> */}
      <p className='types'>We Believe in : <Typist className={'myTypist'} cursorClassName={'myCursor'} sentences={['Innovation.', 'Invention.', 'Iteration.']} loop />
      </p>
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