import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import bir from "../Img/Banner/airties.png";
import iki from "../Img/Banner/aniventi.png";
import uc from "../Img/Banner/cimri.png";
import dort from "../Img/Banner/dg.png";
import bes from "../Img/Banner/endeksa.png";
import alti from "../Img/Banner/enter.png";
import yedi from "../Img/Banner/erciyes.png";
import sekiz from "../Img/Banner/etiya.png";
import dokuz from "../Img/Banner/etstur.png";
import on from "../Img/Banner/hangikredi.png";
import onbir from "../Img/Banner/ibb.png";
import oniki from "../Img/Banner/ilab.png";
import onuc from "../Img/Banner/invio.png";
import ondort from "../Img/Banner/real.png";
import onbes from "../Img/Banner/san.png";
import onalti from "../Img/Banner/seo.png";
import onyedi from "../Img/Banner/sigortam.png";
import onsekiz from "../Img/Banner/tp.png";
import "../Css/Slider.css"; // Ek CSS dosyanız varsa buradan bağlayabilirsiniz

const Slider = () => {
  // Sayfa başlığını değiştirme
  useEffect(() => {
    document.title = "SliderWork"; // Sayfanın başlığı
  }, []);

  // 18 adet görsel
  const items = [
    { src: bir, alt: "Logo 1" },
    { src: iki, alt: "Logo 2" },
    { src: uc, alt: "Logo 3" },
    { src: dort, alt: "Logo 4" },
    { src: bes, alt: "Logo 5" },
    { src: alti, alt: "Logo 6" },
    { src: yedi, alt: "Logo 7" },
    { src: sekiz, alt: "Logo 8" },
    { src: dokuz, alt: "Logo 9" },
    { src: on, alt: "Logo 10" },
    { src: onbir, alt: "Logo 11" },
    { src: oniki, alt: "Logo 12" },
    { src: onuc, alt: "Logo 13" },
    { src: ondort, alt: "Logo 14" },
    { src: onbes, alt: "Logo 15" },
    { src: onalti, alt: "Logo 16" },
    { src: onyedi, alt: "Logo 17" },
    { src: onsekiz, alt: "Logo 18" },
  ];

  // Her 6 görseli bir grup olarak ayıran fonksiyon
  const chunkArray = (arr, size) =>
    arr.reduce(
      (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
      []
    );

  // 6'lı gruplara ayırıyoruz
  const chunks = chunkArray(items, 6);

  // Carousel'da hangi öğenin aktif olduğunu takip etmek için useState
  const [index, setIndex] = useState(0);

  // Carousel ilerletme fonksiyonu
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        className="container pb-4"
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={false}
      >
        {chunks.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-center align-items-center">
              {group.map((item, index) => (
                <div key={index} className="px-2">
                  <a href="#">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="img-fluid"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
