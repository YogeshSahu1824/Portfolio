import React from 'react';
import './Contant.css'
import {MdOutlineMailLock} from 'react-icons/md'
import {IoLogoLinkedin} from 'react-icons/io'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contant = () => {

  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ybfd0sc', 'template_q7jhdqx', form.current, 'ZbiljfZ3ZLB--arBY')
    e.target.reset();
    
  };
  return (
    <section id='contant'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <MdOutlineMailLock className='contact-icon' />
            <h4>Email</h4>
            <h5>YogeshSahu1824@gmail.com</h5>
            <a href="mailto:YogeshSahu2024@gmail.com" target='_blank'>Send Me Message</a>

          </article>
          <article className='contact_option'>
          <IoLogoLinkedin className='contact-icon' />
            <h4>LinkedIn</h4>
            <h5>Yogesh Sahu</h5>
            <a href="https://www.linkedin.com/in/yogesh-sahu-SE" target='_blank'>Send Me Message</a>

          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact-icon' />
            <h4>What's Appppp</h4>
            <h5>+91*********</h5>
            <a href="https://wa.me/917047330994" target='_blank'>Send Me Message</a>

          </article>
        </div>
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='your email' required />
         {/* <textarea name="message" rows="10" placeholder='Your Message'> </textarea> */}
         <textarea name="message" id=""  rows="10" placeholder='Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>

      </div>
    </section>
  );
}

export default Contant;
