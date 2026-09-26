import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
      {/* <!-- ABOUT SECTION  --> */}
            <section className="about">
              <div className="about-text">
                <h3>About Us</h3>
                <h2>
                  building skills, <br />
                  building future
                </h2>
                <p>
                  At morning className digital skill academy that helps you create a
                  future
                </p>
                <ul>
                  <li>&#10004;practical Hands-on learning</li>
                  <li>&#10004; expert instrutors</li>
                  <li>&#10004;flexible learning schedule</li>
                </ul>
                <a href="#" className="btn">
                  learn more
                </a>
              </div>
              <div className="about-image">
                <img src="../../Downloads/website logo.jpg" alt="student learning" />
              </div>
            </section>
    </div>
  )
}

export default About
