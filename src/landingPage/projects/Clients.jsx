import React from 'react'
//import project1 from '../../assets/project1.png';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/client6.png';
import client7 from '../../assets/client7.png';
import client8 from '../../assets/client8.png';
import './clients.css'
const Clients = ()=> {
  return (
    <div className='ap__projects section__padding' id='projects'>
      <div className='ap__projects-header'>Our Clients</div>
        <div className='ap__projects-card'>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client1} alt='client1' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client2} alt='client2' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client3} alt='client3' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client8} alt='client8' />
          </div>
        </div>
        <div className='ap__projects-card'>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client4} alt='client4' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client5} alt='client5' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client6} alt='client6' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={client7} alt='client7' />
          </div>
        </div>
    </div>
  );
}

export default Clients;