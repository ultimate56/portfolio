import React from "react";
import Profi from "../assets/images/Profi.jpg";

const About = () => {
  return (
    <div className="flex flex-row  border relative">
      <div>
        <img
          src={Profi}
          className="w-120 h-150 absolute right-10 top-25 "
          alt=""
        />
      </div>
      <div className="flex fixed flex-col font-sans justify-between tracking-[0.5em] items-center ml-5 h-screen w-16  py-8">
        <p className="-rotate-90 mt-20 text-sm">HOME</p>
          <div className="w-px  h-30 mb-80 bg-black"></div>
     <div className="flex flex-col items-center space-y-2">
        <p className="-rotate-90 text-sm"> /2025 </p>
        <p className="-rotate-90 text-sm  mt-4"  > © </p>
      </div>
      </div>
      <div className="w-150 mt-30 ml-70 text-xl font- items-center">
        <h1 className="border font-bold text-9xl font-serif ">ABOUT</h1>
        <h2 className="text-6xl mt-10 font-serif">“I’m Saba. A developer, creator and problem solver.”</h2>
        <p>
          The cusp of art and technology has always fascinated me, and I’ve
          never been afraid to jump in and experiment—whether it was HTML, CSS,
          JavaScript, or exploring frameworks like React. I’ve been building
          with computers since the day I wrote my very first line of code.
        </p>
        <p>
          Fast forward to 2023, and I’ve tried it all—from creating static
          websites and interactive JavaScript projects to building full-stack
          applications with Node.js and Express. Along the way, I’ve explored
          responsive design, animations, API integrations, and modern front-end
          frameworks. Every project, small or big, has been a stepping stone
          that shaped the developer I am today.
        </p>
        <p>
          What excites me most about being a Developer is the ability to build
          solutions that have purpose and solve real problems. It goes beyond
          just writing code or designing a UI—it’s about creating experiences
          and systems that make people’s lives easier. Understanding user needs,
          identifying the right problems, delivering solutions quickly, learning
          from feedback, and continuously improving—that’s what great
          development is all about.
        </p>
        <p>This is one of my favourite quotes (by Peter Drucker):</p>
        <h2>
          “There is nothing so useless as doing efficiently that which should
          not be done at all.”
        </h2>
      </div>
    </div>
  );
};

export default About;
