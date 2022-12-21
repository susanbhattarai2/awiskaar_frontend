import React, { useState, useEffect } from 'react'
// import { RiCloseFill } from 'react-icons/ri'
import axios from 'axios';
// import { Spinner } from 'reactstrap';

import './clients.css'
//const url ="https://awiskar.pythonanywhere.com/api/v1/core/clients/"
const Clients = () => {
  const [clients, setClients] = useState([]);

  // const [rs, setrs] = useState({})

  // const [loading, setLoading] = useState(false);

  const showDetail = (uuid) => {
    // setrs({});
    // setLoading(true);
    // axios.get(`https://awiskar.pythonanywhere.com/api/v1/core/clients/${uuid}`)
    //   .then(res => {
    //     setrs(res.data)
    //     // setLoading(false);
    //   })
  }
  useEffect(() => {
    axios.get('https://awiskar.pythonanywhere.com/api/v1/core/clients/')
      .then(res => setClients(res.data))
  }, []);


  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal);
  // }
  // if (modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <>

      {/* {
        modal ?
          (
            <div className="modal" onClick={toggleModal} >
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content ">
                {
                  loading ?
                    <>
                      <img src='loading1.png' width='250px' height='90px' />
                    </>
                    :
                    <>
                      <div className='ap__modal-card-content'>
                        <img src={rs.image} alt='client1' />
                      </div>
                      <h2>
                        {rs.name}
                      </h2>
                      <a href={rs.web_url} className='modal_url'>URL: {rs.web_url} </a>
                      <p className='modal_desc'>{rs.desc}</p>
                      <button className="close-modal" onClick={toggleModal}>
                        <RiCloseFill size={26} />
                      </button>
                    </>
                }
              </div>
            </div>
          )
          :
          null
      } */}

      <div className='ap__projects ap__client_section_padding' >
        <div className='ap__projects-header'>Our Clients</div>
        <div className='ap__projects-card'>
          {clients.map((names, index) =>

            <div className='ap__projects-card-content' onClick={() => showDetail(names.uuid)} key={index} >
              <a href={names.web_url} className='modal_url' target='_blank'>
                <img src={names.image} alt='client1'/>
              </a>

            </div>
          )
          }

        </div>
      </div>
    </>
  );
}

export default Clients;