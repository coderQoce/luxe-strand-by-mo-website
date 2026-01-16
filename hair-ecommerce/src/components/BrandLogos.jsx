import React from "react";
import "./BrandLogos.css";

// Replace these with your actual logo image paths
const logos = [
  require("./Logos/logo1.jpeg").default || require("./Logos/logo1.jpeg"),
  require("./Logos/logo1.jpeg").default || require("./Logos/logo1.jpeg"),
  require("./Logos/logo1.jpeg").default || require("./Logos/logo1.jpeg"),
  require("./Logos/logo1.jpeg").default || require("./Logos/logo1.jpeg"),
  require("./Logos/logo1.jpeg").default || require("./Logos/logo1.jpeg"),
  require("./Logos/logo1.jpeg").default || require("./Logos/logo1.jpeg"),
];

const BrandLogos = () => {
  return (
    <section className="brand-section">
      <h2 className="brand-title">Our Hair Collections</h2>

      <div className="logo-slider">
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt="Hair Brand Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
