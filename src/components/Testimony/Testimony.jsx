import React from "react";
import "./Testimony.css";
import img from "../../assets/service-1.jpg";
import img2 from "../../assets/service-2.jpg";
import img3 from "../..//assets/service-3.jpg";
const Testimony = () => {
  return (
    <div>
      {/* <!-- TESTIMONY SECTION --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback from our students</h2>
        <div className="testimonial-container">
          <div className="card">
            <img src={img} alt="esther" />
            <h3>esther korie</h3>
            <p>
              This academy completely changed my career. they teachings are
              mindblowing
            </p>
          </div>

          <div className="card">
            <img src={img2} alt="korie" />
            <h3>esther korie</h3>
            <p>
              this academy completely changed my career. they teaching are
              mindblowing
            </p>
          </div>
          <div className="card">
            <img src={img3} alt="mmesoma" />
            <h3>esther korie</h3>
            <p>
              this academy completely changed my career. they teaching are
              mindblowing
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
