import React from "react";
import "./HomeContent.css";
import bannerImage from "./banner/jk.jpg";   


const HomeContent = () => {
  return (
    <div className="home-content">
      {/* Sliding Banner */}
      <div className="sliding-banner">
        <div className="slides">
          <div className="slide">
            <img src="/banner/jk.jpg" alt="Banner 1" className="banner-image" />
          </div>
          <div className="slide">
            <img src="/images/banner2.jpg" alt="Banner 2" className="banner-image" />
          </div>
          <div className="slide">
            <img src="/images/banner3.jpg" alt="Banner 3" className="banner-image" />
          </div>
        </div>
      </div>

      {/* Technician Types */}
      <div className="technician-types">
        <h2>Available Technicians</h2>
        <div className="technician-grid">
          <div className="technician">
            <img src="/images/ac-mechanic.jpg" alt="AC Mechanic" />
            <p>AC Mechanic</p>
          </div>
          <div className="technician">
            <img src="/images/phone-technician.jpg" alt="Phone Technician" />
            <p>Phone Technician</p>
          </div>
          <div className="technician">
            <img src="/images/watch-technician.jpg" alt="Watch Technician" />
            <p>Watch Technician</p>
          </div>
          <div className="technician">
            <img src="/images/laptop-repair.jpg" alt="Laptop Repair" />
            <p>Laptop Repair</p>
          </div>
        </div>
      </div>

      {/* E-Waste Collection Process */}
      <div className="ewaste-banner">
        <h2>E-Waste Collection</h2>
        <p>Follow our simple 3-step process:</p>
        <ol>
          <li>Schedule a collection request</li>
          <li>Our collector visits your location</li>
          <li>Receive confirmation and rewards</li>
        </ol>
      </div>

      {/* Product Showcase */}
      <div className="products-section">
        <h2>Shop Our Products</h2>
        <div className="products-grid">
          <div className="product">
            <img src="/images/product1.jpg" alt="Product 1" />
            <p>Product Name 1</p>
            <p>$99</p>
          </div>
          <div className="product">
            <img src="/images/product2.jpg" alt="Product 2" />
            <p>Product Name 2</p>
            <p>$149</p>
          </div>
          <div className="product">
            <img src="/images/product3.jpg" alt="Product 3" />
            <p>Product Name 3</p>
            <p>$199</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h3>Contact Us</h3>
        <p>Email: support@techrevive.com</p>
        <p>Phone: +1-234-567-890</p>
        <p>Address: 123 Tech Street, Innovation City, TX</p>
      </footer>
    </div>
  );
};

export default HomeContent;
