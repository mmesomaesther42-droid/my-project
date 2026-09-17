import React from "react";

const App = () => {
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

      {/* <!-- TESTIMONY SECTION --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback from our students</h2>
        <div className="testimonial-container">
          <div className="card">
            <img src="../../Downloads/website logo.jpg" alt="" />
            <h3>esther korie</h3>
            <p>
              This academy completely changed my career. they teachings are
              mindblowing
            </p>
          </div>

          <div className="card">
            <img src="../../Downloads/website logo.jpg" alt="" />
            <h3>esther korie</h3>
            <p>
              this academy completely changed my career. they teaching are
              mindblowing
            </p>
          </div>
          <div className="card">
            <img src="../../Downloads/website logo.jpg" alt="" />
            <h3>esther korie</h3>
            <p>
              this academy completely changed my career. they teaching are
              mindblowing
            </p>
          </div>
        </div>
      </section>

      {/* <!-- CALL TO ACTION SECTION --> */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready TO Start Your Learning Journey</h2>
          <p>
            Join US today and start learning practicals digital skills that can
            transform your future.
          </p>
          <a href="#" className="cta-button">
            {" "}
            Get Started
          </a>
        </div>
      </section>

      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="footer-container">
          {/* <!-- ABOUT --> */}

          <div className="footer-box">
            <h2>Our Digital Skills academy</h2>

            <p>
              Empowering students with praticals digital skills for a better
              future.
            </p>
          </div>

          {/* <!-- QUICK LINKS --> */}

          <div className="footer-box">
            <h3>Quick links</h3>

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Courses</a>

            <a href="#">Contact</a>
          </div>

          {/* <!-- CONTACT --> */}

          <div className="footer-box">
            <h3>Contact Us</h3>

            <p>Email: info@example.com</p>

            <p>Phone: +234 800 000 0000</p>

            <p>Owerri, Imo State</p>
          </div>
        </div>

        {/* <!-- COPYRIGHT --> */}

        <div className="copyright">
          <p>&copy; 2026 Our Digital Skils Academy. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
