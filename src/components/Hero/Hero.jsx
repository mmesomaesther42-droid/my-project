import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      {/* <!-- HERO SECTION --> */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>welcome to my web page</h1>
            <p>
              learn fullstack development, UI/UX,graphic design, and any other
              digital skills
            </p>
            <button>get started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
