import React from 'react';
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        {/* <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article> */}
        <article className="service">
          <div className="service_head">
            <h3>WebDevelopment</h3>
          </div>
          <ul className="service_list">
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Problem Solving</h3>
          </div>
          <ul className="service_list">
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
