import React from 'react'
import './about.css'
import about from '../../assets/about.jpg';

import { RiTeamFill, RiComputerFill, RiCentosFill, RiHandCoinFill } from 'react-icons/ri';
const About = () => {
  // const [ishover,setIsHover] = useState(false);

  //const handleMouseEnter =()=>{
  //  setIsHover(true);
  //}

  // const handleMouseLeave =()=>{
  //  setIsHover(false);
  //}
  //onMouseEnter={() => setAboutShadow(".shadow-drop-2-center")}
  // onMouseLeave={() => setAboutShadow("#")}
  return (

    <div className='ap__about section__padding' id='about'>
      <div className='ap__about-image'>
        <img src={about} alt='about' />
      </div>
      <div className='ap__about-section'>
        <div className='ap__about-section-miniheader gradient__text'>Our Achivements</div>
        <div className='ap__about-section-header'>Stuff About Us</div>
        <div className='ap__about-section-content'>
          <p>Awiskaar Solutions is a rapidly growing company in the valley. We offer every Service imaginable  in the feild of technology. As a secondary feature, we provide all types of web development, web design, graphics design, IT counseling, and real estate services.</p>
          <p>Awiskaar Solutions Pvt. Ltd. is a software firm and a digital solution partner that helps all different kinds of businesses create products or services that are based on digital platforms in order to elevate their visibility and brand value using cutting edge technology.</p>
        </div>

        <div className='ap__about-section-card'>
          <div className='ap__about-section-card-content '>
            <div className='ap__about-section-card-content-icon'>
              <RiTeamFill color='#f56506' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Leader in what we do
            </div>
          </div>
          <div className='ap__about-section-card-content'>
            <div className='ap__about-section-card-content-icon'>
              <RiComputerFill color='#21D4FD' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Technology Consultant
            </div>
          </div>

        </div>
        <div className='ap__about-section-card'>
          <div className='ap__about-section-card-content'>
            <div className='ap__about-section-card-content-icon'>
              <RiCentosFill color='#7F00FF' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              State of the Art Technology
            </div>
          </div>
          <div className='ap__about-section-card-content'>
            <div className='ap__about-section-card-content-icon'>
              <RiHandCoinFill color='#43e97b' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Innovative
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;