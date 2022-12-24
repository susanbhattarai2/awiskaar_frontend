import React, { useState } from 'react'
import swal from 'sweetalert';
import './contact.css'
import { RiMapPinLine, RiMailLine, RiPhoneLine } from 'react-icons/ri';
import Axios from 'axios';

const Contact = () => {
    const url = 'https://awiskar.pythonanywhere.com/api/v1/core/contact_request/'
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        })
            .then(res => {
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
                swal({
                    title: "Thank You!",
                    text: "Message Sent Successfully !!",
                    icon: "success",
                });
            })
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var subject = document.getElementById('subject');
        var message = document.getElementById('message');
        const messageBox = document.getElementById('messageBox');
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');

        if (name.value === '' || email.value === '' || subject.value === '' || message.value === '') {
            messageBox.style.display = 'block';
            danger.style.display = 'block';
        }
        else {
            // setTimeout(() => {
            //     name.value = '';
            //     email.value = '';
            //     subject.value = '';
            //     message.value = '';

            // }, 2000);
            // messageBox.style.display = 'block';
            // success.style.display = 'block';
        }

        setTimeout(() => {
            success.style.display = 'none';
            danger.style.display = 'none';
            messageBox.style.display = 'none';
        }, 10000);
    }

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
                                    Kumaripati, Lalitpur
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
                                    9801718290, 9801140595
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ap__contact-form'>
                        <form className='ap__contact-form-input' onSubmit={(e) => submit(e)}>

                            <input onChange={(e) => handle(e)} type='text' id='name' name='name' value={data.name} placeholder='Full Name' required />

                            <input onChange={(e) => handle(e)} type='email' id='email' name='email' value={data.email} placeholder='Email' required />

                            <input onChange={(e) => handle(e)} type='text' id='subject' name='subject' value={data.subject} placeholder='Subject' required />

                            <textarea onChange={(e) => handle(e)} id='message' name='message' value={data.message} rows='6' col='3' placeholder='Message' required />
                            <div className='messageBox' id='messageBox'>
                                <div className="danger" id="danger">
                                    Fields cannot be empty.
                                </div>
                            </div>
                            <button>Submit</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;