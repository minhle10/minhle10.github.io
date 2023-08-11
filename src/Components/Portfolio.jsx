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
import projectImg from "./../images/example-project.jpg";
import ethgpt from "./../images/ethgpt.png";
import harikablog from "./../images/harikablog.png";
import gardwebapp from "./../images/gardwebapp.png";
import cbitesLanding from "./../images/cbitesLanding.png";
import { fadeIn, fadeUp } from "../utils/motion";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import { SectionWrapper } from "../hoc";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Crypto Bites Landing Page",
    description:
      "Designed and implemented the landing page for Crypto Bites App, our iOS app. Also, currently building out our iOS App.",
    src: cbitesLanding,
    url: "https://cbites.co/",
    tags: ["React", "framer-motion", "Tailwind", "3js", "React-Native"],
  },
  {
    title: "Gard Web App",
    description:
      "Helped to integrate a robust database system on the backend and contributed to translating various UX/UI designs to clean front-end code using best practices.",
    src: gardwebapp,
    url: "https://gard.money/",
    tags: ["React", "Javascript", "Firebase", "CSS3", "HTML5", "Figma"],
  },
  {
    title: "Eth-GPT",
    description:
      "Created a web application that injects data into Chat-GPT using vector embeddings and cosine similiarity to generate reliable responses to Ethereum specific questions.",
    src: ethgpt,
    url: "https://eth-gpt-rho.vercel.app/",
    tags: ["Vercel", "Tailwind", "OpenAI", "Ethereum", "supabase"],
  },
  {
    title: "Harika Blog",
    description:
      "Built a dynamic blog application in which users can upload complex read, write, and update complex files and rich-text.",
    src: harikablog,
    url: "https://nameless-lake-28361.herokuapp.com/",
    tags: ["Rails", "Postgres", "Heroku", "Boostrap", "AWS"],
  },
];

const Portfolio = () => {
  return (
    <section style={{ backgroundColor: "#090a0b" }} className="padding" id="portfolio">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
        <motion.h2 variants={fadeUp} style={{ textAlign: "center", color: "#fff" }}>
          Portfolio
        </motion.h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project, index) => (
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} key={index}>
              <div
                style={{
                  background: "#151619",
                  position: "relative",
                  borderTopRightRadius: "0.8rem",
                  borderTopLeftRadius: "0.8rem",
                  overflow: "hidden",
                  height: "auto",
                }}
              >
                <motion.div
                  style={{
                    position: "relative",
                    bottom: -10,
                    padding: "1em 1em 0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <a href={project.url} style={{ display: "flex", justifyContent: "center" }}>
                    <motion.img
                      src={project.src}
                      alt="example project"
                      initial={{ "--rotate": "0deg" }}
                      whileHover={{ scale: 1.05, rotate: "2deg" }}
                      style={{
                        overflowClipMargin: "content-box",
                        overflow: "clip",
                        objecFit: "cover",
                        aspectRatio: "13 / 9",
                        width: "85%",
                        borderTopRightRadius: "0.4rem",
                        borderTopLeftRadius: "0.4rem",
                        margin: "auto",
                      }} />
                  </a>
                </motion.div>
                {/* <a href={project.url} target="_blank" rel="noopener noreferrer">
                              Link
                            </a> */}
              </div>
              <div
                style={{
                  color: "#fff",
                  backgroundColor: "#151619",
                  padding: "2em",
                  height: "auto",
                  textAlign: "center",
                }}
              >
                {project.description}
              </div>
              <a
                href={project.url}
                style={{
                  color: "#6b91ea",
                  backgroundColor: "#151619",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {project.url}
              </a>
              <div
                style={{
                  color: "#A8C3A7",
                  backgroundColor: "#151619",
                  borderBottomRightRadius: "0.8rem",
                  borderBottomLeftRadius: "0.8rem",
                  padding: "2em",
                  textAlign: "center",
                }}
              >
                {project.tags.map((tag) => {
                  return `#${tag} `;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Portfolio);
