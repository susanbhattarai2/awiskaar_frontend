import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'
import { RiFacebookCircleFill, RiTwitterFill, RiLinkedinBoxFill, RiInstagramFill, RiMapPin2Line, RiPhoneFill, RiMailFill } from 'react-icons/ri'
const Footer = () => {
    const getYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div className='ap__footer gradient__bg'>
            <div className='ap__footer-content section__padding'>
                <div className='ap__footer-section '>
                    <div className='ap__footer-section-logo'>
                        < img src={logo} alt='footerlogo' />
                        <p className='ap__footer-section-logo-text gradient__text'>
                            INNOVATION, ITERATION and INVENTION
                        </p>
                    </div>


                </div>

                <div className='ap__footer-section'>
                    <div className='ap__footer-section-address'>
                        <div className='ap__footer-section-address-content'>
                            <div className='ap__footer-section-address-icon'>

                                <RiMapPin2Line color='white' size={22} />
                            </div>
                            <div className='ap__footer-section-address-icon-text'>
                                Kumaripati,Kathmandu
                            </div>
                        </div>
                        <div className='ap__footer-section-address-content'>
                            <div className='ap__footer-section-address-icon'>
                                <RiMailFill color='white' size={22} />
                            </div>
                            <div className='ap__footer-section-address-icon-text'>
                                info@awiskaar.com
                            </div>
                        </div>
                        <div className='ap__footer-section-address-content'>
                            <div className='ap__footer-section-address-icon'>
                                <RiPhoneFill color='white' size={22} />
                            </div>
                            <div className='ap__footer-section-address-icon-text'>
                                9801718290,9801140595
                            </div>
                        </div>
                    </div>

                </div>

                <div className='ap__footer-section' >
                    <h2>Useful Links</h2>
                    <div className='ap__footer-section-links'>

                        <a href='#links'>About</a>
                        <a href='#links'>Contact</a>
                        <a href='#links'>Career</a>
                        <a href='#links'>Blog</a>
                    </div>
                </div>


            </div>
            <div className='ap__secondary-footer'>
                <div className='ap__secondary-footer-content'>
                    <div className='ap__secondary-footer-copyright'>
                        Copyright &copy; {getYear()}. Awiskaar Solutions Pvt. Ltd.
                    </div>
                    <div className='ap__secondary-footer-social'>
                        <a href='https://www.facebook.com/Awiskaar/' target="_blank"><RiFacebookCircleFill size={22} color='white' /></a>
                        <a href='https://www.instagram.com/awiskaarsolutions/' target="_blank"><RiInstagramFill size={22} color='white' /></a>
                        <a href='https://www.linkedin.com/company/awiskaar-solutions/' target="_blank"><RiLinkedinBoxFill size={22} color='white' /></a>
                        {/* <a href='#twitter'><RiTwitterFill size={22} color='white' /></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;