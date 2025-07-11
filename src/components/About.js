import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I am The best Software Engineer In the Country currently</p>
    <img src={image} alt="I made this"/>
  </div>
  )
}

export default About;
