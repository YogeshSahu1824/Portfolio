import React from 'react';
import {BsLinkedin } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgDribbble} from 'react-icons/cg'
import './Header.css'

const HeaderSocial = () => {
  return (
    <div className='Header_socials'>
      <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com" target='_blank'><FaGithub/></a>
      <a href="https://dribbble.com" target='_blank'><CgDribbble/></a>
    </div>
  );
}

export default HeaderSocial;
