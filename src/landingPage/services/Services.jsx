import React from 'react'
import './service.css'
import {RiCodeSSlashFill,RiComputerLine,RiSmartphoneLine,RiLineChartLine,RiFileCloudLine,RiTeamLine} from 'react-icons/ri';
const Services=()=> {
    //const [slideUp,setSlideup] = useState(false);
  return (
    <div className='ap__services section__padding' id='services'>
        <div className='ap__services-miniheader gradient__text'> We work for your best experience</div>
        <div className='ap__services-header'>Our Services</div>
        <div className='ap__services-text'> 
            We provide best ever services for your great experience. 
            We make all efforts for the revolutionary change. 
            We appreciate our employees to create future. 
            We promise you that you will never get disappointed.
        </div>
        <div className='ap__service-card'>
       
            <div className='ap__service-card-content'>
                <div className='ap__services-card-content-icon'>
                    <RiCodeSSlashFill color='#f56506' size={50}/>
                </div>
                <div className='ap__service-card-content-title'>
                    Software Development
                </div>
                <div className='ap__service-card-content-text'>
                We specialize in web app design and development. 
                From designing to full fledged software products irrespective of language and frameworks. 
                </div>
                <div className='ap__service-card-content-knowmore'>
                <a href='#knowmore'>Know more </a>
                </div>
            </div>
            <div className='ap__service-card-content'>
                <div className='ap__services-card-content-icon'>

                    <RiSmartphoneLine color='#f56506' size={50}/>
                </div>
                <div className='ap__service-card-content-title'>
                    App Developmet
                </div>
                <div className='ap__service-card-content-text'>
                Our awesome phone app developers specialize in Flutter and Swift to turn your idea into the next big thing.
                </div>
                <div className='ap__service-card-content-knowmore'>
                <a href='#knowmore'>Know more </a>
                </div>
            </div>
            <div className='ap__service-card-content'>
                <div className='ap__service-card-content-icon'>
                    <RiComputerLine color='#f56506' size={50}/>
                </div>
                <div className='ap__service-card-content-title'>
                    Web Development
                </div>
                <div className='ap__service-card-content-text'>
                We specialize in web app design and development. 
                From designing to full fledged software products irrespective of language and frameworks.
                </div>
                <div className='ap__service-card-content-knowmore'>
                <a href='#knowmore'>Know more </a>
                </div>
            </div>
           
        </div>
        <div className='ap__service-card'>
            <div className='ap__service-card-content'>
                <div className='ap__services-card-content-icon'>
                    <RiLineChartLine color='#f56506' size={50}/>
                </div>
                <div className='ap__service-card-content-title'>
                    Digital Marketing
                </div>
                <div className='ap__service-card-content-text'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                <div className='ap__service-card-content-knowmore'>
                <a href='#knowmore'>Know more </a>
                </div>
            </div>
            <div className='ap__service-card-content'>
                <div className='ap__services-card-content-icon'>
                    <RiTeamLine color='#f56506' size={50}/>
                </div>
                <div className='ap__service-card-content-title'>
                    IT Consulting
                </div>
                <div className='ap__service-card-content-text'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                <div className='ap__service-card-content-knowmore'>
                <a href='#knowmore'>Know more </a>
                </div>
            </div>
            <div className='ap__service-card-content'>
                <div className='ap__service-card-content-icon'>
                    <RiFileCloudLine color='#f56506' size={50}/>
                </div>
                <div className='ap__service-card-content-title'>
                    Cloud Solution
                </div>
                <div className='ap__service-card-content-text'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                <div className='ap__service-card-content-knowmore'>
                <a href='#knowmore'>Know more </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services;