import React, { useState } from 'react'
import { useRef } from "react";

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

import logo from '../../assets/logo.png';
// const Navbar = () => {
//   const Menu = ()=> (
//     <>
//       <p><a href='#'>Home</a></p>
//       <p><a href='#about'>About</a></p>
//       <p><a href='#services'>Services</a></p>
//       <p><a href='#clients'>Clients</a></p>
//       <p><a href= '#contact'>Contact</a></p>
//       {/* <p><a href='#Career'>Career</a></p> */}
//     </>
//   )
//   const [toggleMenu,setToggleMenu] = useState(false);

//   return (
//     <div className='ap__navbar'>
//         <div className='ap__navbar-logo'>
//               <a href='#'><img src={logo} alt='logo'/></a>
//             </div>
//         {/* <div className='ap__navbar-links'>            
//                 < Menu />
//         </div> */}
//         <div className='ap__navbar-menu'>
//           {toggleMenu
//           ? <RiCloseLine  color='#fff' size={27} onClick={()=> setToggleMenu(false)}/> 
//           : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)} />
//           }
//           {toggleMenu && (
//             <div className='ap__navbar-menu-container Scale-up-center'>
//               <div className='ap__navbar-menu-container-links'>
//                 <Menu />
//               </div>
//             </div> 
//           )

//           }
//         </div>
//     </div>
//   );
// }

function Navbar() {
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    
  };
 
  return (
    <header className='ap__navbar'>
      <div className='ap__navbar-logo'>
        <a href='#'><img src={logo} alt='logo' /></a>
      </div>
      <nav ref={navRef}>

      <div className='ap__navbar-logo'>
        <a href='#'><img src={logo} alt='logo' /></a> 
      </div>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Services</a>
        <a href="/#">Clients</a>
        <a href="/#">Contact</a>

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <RiCloseLine color='#fff' size={30} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <RiMenu3Line color='#fff' size={27} />
      </button>
    </header>
  );
}

export default Navbar;