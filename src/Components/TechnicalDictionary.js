import React from "react";
import "../Css/TechnicalDictionary.css"; // CSS dosyasını import edin
import image from "../Img/image.svg"; // Resmi import edin
import buttonIcon from "../Img/buton.svg"; // Buton ikonu

const TechnicalDictionary = () => {
  return (
    <div className="technical-dictionary">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Teknoloji Terimleri</title>
      <main className="container">
        <section className="content">
          <div className="image">
            <img src={image} alt="Arama yapan kişi" />
          </div>
          <div className="text-content">
            <h1>
              Teknoloji <span>Terimlerinin</span> Sihirli Dünyası
            </h1>
            <div className="search-bar">
              <input type="text" placeholder="Arama Yap" />
              <button className="search-button">
                <img src={buttonIcon} alt="Arama" />
              </button>
            </div>
            <div className="redirection">
              <p>
                Adan Z'ye tüm teknoloji terimlerinin tanımlarını senin için
                hazırladığımız teknoloji sözlüğünde bulabilirsin!
              </p>
              <a href="https://www.techcareer.net/dictionary">
                <button className="btn">Şimdi Keşfet</button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechnicalDictionary;
