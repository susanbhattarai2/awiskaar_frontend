import React,{useState} from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import './navbar.css'

import logo from '../../assets/logo.png';
const Navbar = () => {
  const Menu = ()=> (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#about'>About</a></p>
      <p><a href='#services'>Services</a></p>
      <p><a href='#clients'>Clients</a></p>
      <p><a href= '#contact'>Contact</a></p>
      <p><a href='#Career'>Career</a></p>
    </>
  )
  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className='ap__navbar'>
        <div className='ap__navbar-logo'>
                <img src={logo} alt='logo'/>
            </div>
        <div className='ap__navbar-links'>            
                < Menu />
        </div>
        <div className='ap__navbar-menu'>
          {toggleMenu
          ? <RiCloseLine  color='#fff' size={27} onClick={()=> setToggleMenu(false)}/> 
          : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='ap__navbar-menu-container Scale-up-center'>
              <div className='ap__navbar-menu-container-links'>
                <Menu />
              </div>
            </div> 
          )

          }
        </div>
    </div>
  );
}

export default Navbar;