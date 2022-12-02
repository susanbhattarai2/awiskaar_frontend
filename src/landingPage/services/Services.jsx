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
            We provide best ever services for your great experience and for the revolutionary change. We appreciate our employees to create future and promise you that you will never get disappointed.
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
                Get a software that is both robust and user-friendly and that solves your business problems. 
                </div>
                <div className='ap__service-card-content-knowmore'>
                {/* <a href='#knowmore'>Know more </a> */}
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
                Create high-performance iOS and Android mobile applications at a low cost.
                </div>
                <div className='ap__service-card-content-knowmore'>
                 {/* <a href='#knowmore'>Know more </a> */}
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
                Create a powerful custom web application or web portal based on your specifications to boost your global presence.
                </div>
                <div className='ap__service-card-content-knowmore'>
                 {/* <a href='#knowmore'>Know more </a> */}
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
                Connect your brand with consumers at the right time. 
                Strategies that raise awareness, leads, and revenue in a cost-effective and scalable manner.
                </div>
                <div className='ap__service-card-content-knowmore'>
                 {/* <a href='#knowmore'>Know more </a> */}
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
                We advise businesses by assisting them in optimizing their IT infrastructure in order to achieve their business objectives.
                </div>
                <div className='ap__service-card-content-knowmore'>
                 {/* <a href='#knowmore'>Know more </a> */}
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
                Our cloud solutions enable businesses to scale, remain flexible, 
                and focus on business operations rather than complex IT infrastructure management.
                </div>
                <div className='ap__service-card-content-knowmore'>
                 {/* <a href='#knowmore'>Know more </a> */}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services;