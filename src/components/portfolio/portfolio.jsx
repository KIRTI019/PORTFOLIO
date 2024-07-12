import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.jpg";
import IMG2 from "../../assests/portfolio2.jpg";
import IMG3 from "../../assests/portfolio3.jpg";
import IMG4 from "../../assests/portfolio4.jpg";
import IMG5 from "../../assests/portfolio5.png";
import IMG6 from "../../assests/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ShopKart",
    github: "https://github.com/KIRTI019/ShopKart",
    demo: "https://shopkart019.vercel.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sociobook",
    github: "https://github.com/KIRTI019/Sociobook",
    demo: "https://sociobook019.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Weather App",
    github: "https://github.com/KIRTI019/Weather-App",
    demo: "https://weather-app-xi-rust.vercel.app",
  },
//   {
//     id: 4,
//     image: IMG4,
//     title: "Maintaining tasks and tracking progress",
//     github: "https://github.com",
//     demo: "https://dribbble.com",
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: "Cryto Currency Dashboard &Financial Visualization",
//     github: "https://github.com",
//     demo: "https://dribbble.com",
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: "Cryto Currency Dashboard &Financial Visualization",
//     github: "https://github.com",
//     demo: "https://dribbble.com",
//   },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
