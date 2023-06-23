import React from 'react';
import './Header.css'
import CTA from './CTA';
import me from '../../assets/Me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
  <>


  <header id='header'>
    <div className='container header_container'>
      {/* <div className="header_container">header_container</div> */}
    <h5>Hello I'm</h5>
    <h1>Yogesh Sahu</h1>
    <h5 className='text-light'>Front End Developer</h5>
    <CTA />
    <HeaderSocial/>
    <div className="me">
      <img src={me} alt="me" />
    </div>
    <a href="#Contant" className='scroll_down'>Sroll Down</a>
    </div>
  </header>
  
  </>
  );
}

export default Header;

