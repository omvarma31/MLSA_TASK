/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/flower.jpg";

const imageAltText = "A beautiful flower";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Tasks ",
    description:
      "This is my task,i had done it while starting my github in recent ",
    url: "https://crowd.dev",
  },
  {
    title: "My News Website ",
    description:
      "This was the new website made by me using javascript more work on it is going on",
    url: "https://omvarma31.github.io/My_News_Website/",
  },
  {
    title: "A Basic Portfolio",
    description:
      "Tried to create a basic portpholio and commited changes ",
    url: "https://portfolio-claddyk.vercel.app/",
  },
  {
    title: "My first Contributions in Hacktober Fest 2023",
    description:
      "I won the hacktober fest 2023 so this was my start commit ",
    url: "https://firstcontributions.github.io",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
