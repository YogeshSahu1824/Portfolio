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
            <p>Tailor-made web applications built from scratch to meet specific client needs.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Focus on delivering user-friendly interfaces and seamless user experiences.
</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Proficiency in HTML, CSS, and JavaScript to create visually appealing websites.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Emphasis on responsive design for optimal viewing across devices.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Also provide single page applications</p>
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
            <p>Problem-solving skills consist of a set of abilities that help you identify a problem,propose solutions, choose the best one, and implement it</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p>Problem-solving combines a bunch of other skills such as critical thinking,decision making, and information analysis. </p>
            </li>
           
            <li>
            <BiCheck className='service-icon'/>
            <p>Problem-solving skills help us determine the source of a problem and find an effective solution</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
            <p> It's a valued skill in many job</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
