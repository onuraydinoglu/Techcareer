import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../Css/WhyTechCareer.css";

const WhyTechCareer = () => {
  return (
    <div className=" my-5">
      <h1 className="title">Neden Techcareer.net?</h1>
      <div className="content">
        {/* İlk Kart */}
        <div className="circle-card first-card">
          <div className="icon">
            <i
              className="fa-solid fa-bug"
              style={{ fontSize: "30px", color: "#000" }}
            ></i>
          </div>
          <h2>Ücretsiz etkinlik</h2>
          <p>
            Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken
            tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile
            başlayacaksın.
          </p>
        </div>

        {/* İkinci Kart */}
        <div className="circle-card second-card">
          <div className="icon">
            <i
              className="fa-solid fa-laptop-code"
              style={{ fontSize: "30px", color: "#000" }}
            ></i>
          </div>
          <h2>Kendini kanıtla</h2>
          <p>
            Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak hem
            becerilerini geliştirecek hem de ödül kazanma fırsatı
            yakalayacaksın.
          </p>
        </div>

        {/* Üçüncü Kart */}
        <div className="circle-card third-card">
          <div className="icon">
            <i
              className="fa-solid fa-skull-crossbones"
              style={{ fontSize: "30px", color: "#000" }}
            ></i>
          </div>
          <h2>İş fırsatı yakala</h2>
          <p>
            Sektöründe lider teknoloji şirketleriyle tanışacak ve iş fırsatları
            yakalayacaksın.
          </p>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="statistics">
        <div className="stat">
          <h2>420K+</h2>
          <p>Trafik</p>
        </div>
        <div className="stat">
          <h2>500+</h2>
          <p>Etkinlik</p>
        </div>
        <div className="stat">
          <h2>160K+</h2>
          <p>Üye</p>
        </div>
        <div className="stat">
          <h2>8.5K+</h2>
          <p>Bootcamp Mezunu</p>
        </div>
      </div>
    </div>
  );
};

export default WhyTechCareer;
