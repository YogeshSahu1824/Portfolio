import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/images.jpeg";
import IMG2 from "../../assets/icoder.jpeg";
import IMG3 from "../../assets/news.jpeg";
import IMG4 from "../../assets/fooddevery.jpg";
const data=[
  {
    id:1,
    image:IMG1,
    title:"Snake Game",
    github:'https://github.com/YogeshSahu1824/Snakegame',
    demo:"#",
    demonam:"None",
    Targer:"_blank"
  },
  {
    id:2,
    image:IMG2,
    title:"iCoder",
    github:'https://github.com/YogeshSahu1824/iCoder',
    demo:"https://yogeshsahu1824.github.io/iCoder/",
    demonam:"Live Demo",
    Targer:"_blank"
    
  },
  {
    id:3,
    image:IMG3,
    title:"News App",
    github:'https://github.com/YogeshSahu1824/NewsAPP',
    demo:"#",
    demonam:'None',
    Targer:"_blank"
  },
  {
    id:4,
    image:IMG4,
    title:"Food Oder",
    github:'https://github.com/YogeshSahu1824/foodresposive',
    demo:"https://yogeshsahu1824.github.io/foodresposive/",
    demonam:"Live Now",
    Targer:"_blank"
    
  }
]
const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
         {
          data.map(({id,image,title,github,demo,demonam,Targer})=>
          {
            return(

              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>
                  {title}
                </h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="blank_">Github</a>
                 
                    <a href={demo} className="btn btn-pirmary" target={Targer}>{demonam}</a>
                  
                  
                </div>
              </article>
            )
          }
          )
         }
        
      </div>
    </section>
  );
};

export default Portfolio;
