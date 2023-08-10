/**
 * About component
 *
 * Space for you to describe more about yourself.
 */
import aws from "../images/aws.png";
import html from "../images/html.png";
import java from "../images/java.png";
import heroku from "../images/heroku.png";
import python from "../images/python.png";
import rails from "../images/rails.png";
import react from "../images/react.png";
import openai from "../images/openai.png";
import firebase from "../images/firebase.png";
import postgres from "../images/postgres.png";
import figma from "../images/figma.png";
import git from "../images/git.png";
import vercel from "../images/vercel.png";
import tailwind from "../images/tailwind.png";
import ts from "../images/ts.png";
import supabase from "../images/supabase.png";

import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello there! I'm Minh, a passionate and driven recent graduate from Boston College with a strong foundation in web development. With an insatiable curiosity for technology and a keen eye for innovation, I'm on a mission to transform intricate lines of code into meaningful and impactful solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  python,
  react,
  html,
  tailwind,
  java,
  aws,
  heroku,
  rails,
  openai,
  firebase,
  postgres,
  figma,
  git,
  ts,
  vercel,
  supabase,
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = (
  <p>
    I believe in the power of <span style={{ fontWeight: 500 }}>continuous learning</span> and{" "}
    <span style={{ fontWeight: 500 }}>adaptability</span> in an industry that thrives on innovation.
    Whether it&apos;s mastering a new programming language, exploring emerging technologies, or
    tackling complex coding puzzles, I&apos;m always ready to expand my skill set.{" "}
  </p>
);

const About = () => {
  return (
    <section className="padding" id="about" style={{ backgroundColor: "#e0e0ff" }}>
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div
        style={{
          width: "80%",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <motion.div variants={textVariant()}>
          <h2>About Me</h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="medium">
          {description}
        </motion.p>
        <hr />
        <h3 style={{ textAlign: "center" }}>Technologies I&apos;ve Worked With:</h3>
        <div className="tech">
          {skillsList.map((skill, index) => (
            <motion.div
              whileHover={{
                scale: [1, 1, 1.2, 1.2, 1],
                transition: { duration: 1.2 },
                rotate: [0, 0, -45, 45, 0],
              }}
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              key={index}
            >
              <img alt={skill} style={{ width: "2.5em" }} src={skill} />
            </motion.div>
          ))}
        </div>
        <hr />
        <motion.p variants={fadeIn("", "", 0.1, 1)}>{detailOrQuote}</motion.p>
      </div>
    </section>
  );
};

export default SectionWrapper(About);
