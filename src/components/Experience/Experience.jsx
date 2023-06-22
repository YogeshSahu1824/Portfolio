import React from "react";
import "./Experience.css";
import { BsPatchCheckFill  } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience" className="Exp">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experince_container">
        {/* Front End Development */}
        <div className="experince_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />

              <div>
                
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />
              <div>
                
                <h4>CSS</h4>
                <small className="text-light">Fresher</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />
              <div>
                
                <h4>JavaScript</h4>
                <small className="text-light">Fresher</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />
              <div>
                
                <h4>React</h4>
                <small className="text-light">Fresher</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />
              <div>
                
                <h4>Bootstrap</h4>
                <small className="text-light">Fresher</small>
              </div>
            </article>
          </div>
        </div>

        {/* Programming languages */}

        <div className="experince_frontend">
          <h3>Programming Languages</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />
              <div>
                
                <h4>C</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />
              <div>
                
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="react-icons" />
              <div>
                
                <h4>Python</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
