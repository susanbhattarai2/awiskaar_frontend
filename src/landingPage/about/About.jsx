import React from 'react'
import './about.css'
import about from '../../assets/about.jpg';

import { RiTeamFill, RiComputerLine, RiCentosFill, RiHandCoinFill,RiTimeLine } from 'react-icons/ri';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import {FaAward} from 'react-icons/fa';
import {FcCustomerSupport,FcMultipleDevices,FcPortraitMode,FcBullish,FcApproval,FcPositiveDynamic,FcClock,FcHeadset} from 'react-icons/fc';
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
        <div className='ap__about-section-header'>Things about us</div>
        <div className='ap__about-section-content'>
          <p>Awiskaar Solutions Pvt. Ltd. is a software firm and a digital solution partner that helps all different kinds of businesses create products or services that are based on digital platforms in order to elevate their visibility and brand value using cutting edge technology.</p>
          
        </div>
        
        <div className='ap__about-section-card'>
          <div className='ap__about-section-card-content '>
            <div className='ap__about-section-card-content-icon'>
              <FcApproval color='#f56506' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Result Oriented
            </div>
          </div>
          <div className='ap__about-section-card-content'>
            <div className='ap__about-section-card-content-icon'>
              <FcClock color='#21D4FD' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Delivery on Time
            </div>
          </div>

        </div>
        <div className='ap__about-section-card'>
          <div className='ap__about-section-card-content '>
            <div className='ap__about-section-card-content-icon'>
              <FcPositiveDynamic color='#f56506' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Quality Driven
            </div>
          </div>
          <div className='ap__about-section-card-content'>
            <div className='ap__about-section-card-content-icon'>
              <FcMultipleDevices color='#21D4FD' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Technology Consultant
            </div>
          </div>

        </div>
        <div className='ap__about-section-card'>
          <div className='ap__about-section-card-content'>
            <div className='ap__about-section-card-content-icon'>
              <FcPortraitMode color='#7F00FF' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
              Client Satisfaction
            </div>
          </div>
          <div className='ap__about-section-card-content'>
            <div className='ap__about-section-card-content-icon'>
              <FcHeadset color='#43e97b' size={50} />
            </div>
            <div className='ap__about-section-card-content-text'>
            Strong Support
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;