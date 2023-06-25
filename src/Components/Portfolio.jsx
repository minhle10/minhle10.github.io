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
import { motion } from "framer-motion";
import projectImg from "./../images/example-project.jpg"

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <img className="background" src={image} alt={imageAltText} />
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => {
            return (
              <div
                key={project.title}
                style={{
                  background: "#d6ebff",
                  position: "relative",
                  borderRadius: "0.8rem",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  style={{
                    position: "relative",
                    bottom: -10,
                    padding: "50px 10px 0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <motion.img
                    src={projectImg}
                    alt="example project"
                    initial={{ "--rotate": "0deg" }}
                    whileHover={{ scale: 1.05, rotate: "2deg" }}
                    style={{
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                      objecFit: "cover",
                      width: "85%",
                      borderTopRightRadius: "0.4rem",
                      borderTopLeftRadius: "0.4rem",
                      margin: "auto",
                    }}
                  />
                </motion.div>
                {/* <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Link
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
