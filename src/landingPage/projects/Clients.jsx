import React, { useState,useEffect } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import Axios from 'axios';
//import project1 from '../../assets/project1.png';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client7.png';
import client4 from '../../assets/client6.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/client3.png';
import client7 from '../../assets/client4.png';
import client8 from '../../assets/client8.png';
import './clients.css'
//const url ="https://awiskar.pythonanywhere.com/api/v1/core/clients/"
const Clients = () => {
  const [clients,setClients]=useState([]);
  
  const [rs,setrs] = useState([])

const showDetail = (uuid) =>
    {
       
      Axios.get(`https://awiskar.pythonanywhere.com/api/v1/core/clients/${uuid}`)
      .then(res=>setrs(res.data))
    }
  useEffect(()=>{
    Axios.get('https://awiskar.pythonanywhere.com/api/v1/core/clients/')
    .then(res=>setClients(res.data))
    
  },[]);

  



  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    
      {modal && (
        <div className="modal" onClick={toggleModal} >
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content ">
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
          </div>
        </div>
      )}
      
      <div className='ap__projects ap__client_section_padding' >
        <div className='ap__projects-header'>Our Clients</div>
        <div className='ap__projects-card'>
        {clients.map((names,index)=>
          
          <div className='ap__projects-card-content' onClick={()=>showDetail(names.uuid)} key={index} >
            <img src={names.image} alt='client1' onClick={toggleModal}/>
            
          </div>
          )
        }
      
          
        </div>
      </div>
    </>
  );
}

export default Clients;