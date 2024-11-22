import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import slider1 from "../Img/slider1.webp";
import slider2 from "../Img/slider2.webp";
import slider3 from "../Img/slider3.webp";
import sol from "../Icons//shape-dots.svg";
import sag from "../Icons/kesik-yan-cizgi.svg";
import "../Css/Slider.css";

const Slider = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <img src={sol} className="sol" />
        </div>
        <div>
          <img src={sag} className="sag" />
        </div>
      </div>
      <div className="custom-carousel-container">
        <div
          id="customCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#customCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#customCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#customCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide-content">
                <img src={slider1} className="d-block w-100" alt="Slide 1" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide-content">
                <img src={slider2} className="d-block w-100" alt="Slide 2" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide-content">
                <img src={slider3} className="d-block w-100" alt="Slide 3" />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#customCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#customCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="carousel-indicators-color"></div>
    </>
  );
};

export default Slider;
