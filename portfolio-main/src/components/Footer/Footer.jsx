import React from "react";
import Contact from "../Contact/Contact";

const Footer = ({ contact }) => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="min-vh-100">
      <div
        className="border-bottom border-secondary d-flex align-items-center contact-section-height"
        ref={contact}
      >
        <div className="container">
          <Contact />
        </div>
      </div>
      <div className="bg-dark">
        <div className="container">
          <div
            className="text-center py-3 text-light"
            style={{ fontSize: "0.9rem" }}
          >
            Copyright © {currentYear}. All Rights Reserved{" "}
            <span className="text-fucsia">|</span> Designed & Built by{" "}
            <strong className="text-blue-normal">Santiago Miranda</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
