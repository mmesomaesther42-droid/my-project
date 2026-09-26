import React from 'react'

const Footer = () => {
  return (
    <div>
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

  )
}

export default Footer
