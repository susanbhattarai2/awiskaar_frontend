import React from 'react'
import './contact.css'
import { RiMapPinLine, RiMailLine, RiPhoneLine } from 'react-icons/ri'
const Contact = () => {
    //const [form,setForm]=useState({
    //   fname:'',
    // email:'',
    // subject:'',
    //  message:''
    // });

    return (
        <div className='ap__contact section__padding' id='contact'>
            <div className='ap__contact-container'>
                <div className='ap__contact-miniheader gradient__text'>Feel free to contact us</div>
                <div className='ap__contact-header'>Contact Us</div>
                <div className='ap__contact-text'>
                    If you need to help with our services,
                    have questions about our work or experiencing any technical difficulties,
                    please do not hesitate to contact us.
                </div>
                <div className="ap__contact-form-body">
                    <div className='ap__contact-address'>
                        <div className='ap__contact-address-container'>
                            <div className='ap__contact-address-container-card '>
                                <div className='ap__contact-address-container-card-icon'>
                                    <RiMapPinLine color='#fff' size={40} />
                                </div>
                                <div className='ap__contact-address-container-card-text'>
                                    Kumaripati,Kathmandu
                                </div>
                            </div>
                            <div className='ap__contact-address-container-card '>
                                <div className='ap__contact-address-container-card-icon'>
                                    <RiMailLine color='#fff' size={40} />
                                </div>
                                <div className='ap__contact-address-container-card-text'>
                                    info@awiskaar.com
                                </div>
                            </div>
                            <div className='ap__contact-address-container-card '>
                                <div className='ap__contact-address-container-card-icon'>
                                    <RiPhoneLine color='#fff' size={40} />
                                </div>
                                <div className='ap__contact-address-container-card-text'>
                                    9801718290,9801140595
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ap__contact-form'>
                        <form className='ap__contact-form-input' method='POST' action='#'>
                            
                            <input type='text' name='name' placeholder='Name' required />
                            
                            <input type='email' name='email' placeholder='Email' required />
                            
                            <input type='text' name='subject' placeholder='Subject' required />
                            
                            <textarea name='message' colrows='4' placeholder='Message' required />
                            <button type='submit' value='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;