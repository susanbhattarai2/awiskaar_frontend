import React from 'react'
import './splitimage.css'
import Typist from 'react-text-typist';
const SplitImage = () => {
  return (
    // <div></div>
    <>
      <div className='hero'>
        <div className="one">


        </div>
        <div className="split_image_content_container scale-up-center" id="home">
          <div className="split_image_content">
            <h1 className='gradient__text'>Awiskaar Solutions </h1>
            {/* <p>Awiskaar Solutions is one of the fast emerging company in the valley. We provides every possible services related to the Technology field.</p> */}
            <p className='types'>We Believe in : <Typist className={'myTypist'} cursorClassName={'myCursor'} sentences={['Innovation.', 'Invention.', 'Iteration.']} loop />
            </p>
            <div className="ap__banner-content-button">
              <button type="button"> <a href='#contact'>Get Started</a></button>
            </div>
          </div>

         
        </div>
        <div className='two'>

        </div>
      </div>
    </>
  )
}

export default SplitImage