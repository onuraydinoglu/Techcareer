import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faLaptop,
  faCog,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons"; // faHeadSideGear yerine faCog kullandık
import "../Css/Events.css";
import event1 from "../Img/event1.png";
import event2 from "../Img/event2.png";
import event3 from "../Img/event3.png";

const events = [
  {
    id: 1,
    category: "Workshop",
    title: "UnityCraft Workshop",
    description: "Ücretsiz öğren, mezun ol, iş fırsatı yakala!",
    duration: "20 Saat // Online & Canlı Eğitim",
    deadline: "15.11.2024",
    buttonText: "Başvur",
    imageUrl: event1,
  },
  {
    id: 2,
    category: "Workshop",
    title: "Design Thinking Workshop",
    description: "Yaratıcılığınızı geliştirin!",
    duration: "10 Saat // Yüz Yüze Eğitim",
    deadline: "18.11.2024",
    buttonText: "Başvur",
    imageUrl: event2,
  },
  {
    id: 3,
    category: "Workshop",
    title: "Advanced React Workshop",
    description: "React uzmanlık eğitimi!",
    duration: "15 Saat // Online Eğitim",
    deadline: "20.11.2024",
    buttonText: "Başvur",
    imageUrl: event3,
  },
  {
    id: 4,
    category: "Bootcamp",
    title: "FMSS Android Bootcamp",
    description: "Android uzmanlık eğitimi!",
    duration: "30 Günlük Program",
    deadline: "22.11.2024",
    buttonText: "Başvur",
    imageUrl: event1,
  },
  {
    id: 5,
    category: "Bootcamp",
    title: "Full-Stack Development Bootcamp",
    description: "Frontend ve backend becerileri kazanın.",
    duration: "60 Günlük Program",
    deadline: "25.11.2024",
    buttonText: "Başvur",
    imageUrl: event2,
  },
  {
    id: 6,
    category: "Bootcamp",
    title: "Data Science Bootcamp",
    description: "Veri analizi ve Python uzmanlığı.",
    duration: "45 Günlük Program",
    deadline: "30.11.2024",
    buttonText: "Başvur",
    imageUrl: event3,
  },
  {
    id: 7,
    category: "Hackathon",
    title: "AI Hackathon",
    description: "Yapay zeka projeleriyle yarış!",
    duration: "24 Saat",
    deadline: "15.12.2024",
    buttonText: "Başvur",
    imageUrl: event1,
  },
  {
    id: 8,
    category: "Hackathon",
    title: "Game Development Hackathon",
    description: "Oyun geliştirme ve rekabet!",
    duration: "48 Saat",
    deadline: "18.12.2024",
    buttonText: "Başvur",
    imageUrl: event2,
  },
  {
    id: 9,
    category: "Hackathon",
    title: "IoT Hackathon",
    description: "Akıllı cihazlarla inovasyon!",
    duration: "36 Saat",
    deadline: "22.12.2024",
    buttonText: "Başvur",
    imageUrl: event3,
  },
  // Hiring Challenge etkinlikleri ekleniyor
  {
    id: 10,
    category: "Hiring Challenge",
    title: "Frontend Developer Challenge",
    description: "Frontend geliştirme becerilerini sınayın!",
    duration: "2 Hafta // Online",
    deadline: "10.12.2024",
    buttonText: "Başvur",
    imageUrl: event1,
  },
  {
    id: 11,
    category: "Hiring Challenge",
    title: "Backend Developer Challenge",
    description: "Backend geliştirme becerilerinizi test edin!",
    duration: "2 Hafta // Online",
    deadline: "15.12.2024",
    buttonText: "Başvur",
    imageUrl: event2,
  },
  {
    id: 12,
    category: "Hiring Challenge",
    title: "Full-Stack Developer Challenge",
    description: "Full-stack geliştirme becerilerinizi sergileyin!",
    duration: "3 Hafta // Online",
    deadline: "20.12.2024",
    buttonText: "Başvur",
    imageUrl: event3,
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("Tüm Etkinlikler");

  const categories = [
    { name: "Tüm Etkinlikler", icon: faBoxArchive },
    { name: "Hackathon", icon: faCog },
    { name: "Bootcamp", icon: faLaptop },
    { name: "Hiring Challenge", icon: faShieldHalved }, // Hiring Challenge ikonu
  ];

  const filteredEvents =
    activeCategory === "Tüm Etkinlikler"
      ? events.slice(0, 3) // Yalnızca ilk 3 etkinlik
      : events.filter((event) => event.category === activeCategory).slice(0, 3); // Filtrelenen kategoriye göre ilk 3 etkinlik

  // Tüm etkinlikler butonuna tıklama işlevi
  const handleSeeAllClick = () => {
    window.location.href = "https://www.techcareer.net/events"; // URL'ye yönlendirme
  };

  return (
    <>
      {" "}
      <div className="container">
        <h2 className="mt-3">Başvurunu Bekleyen Etkinlikler</h2>

        <nav className="navigation">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`nav-button ${
                activeCategory === category.name ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <FontAwesomeIcon icon={category.icon} className="category-icon" />{" "}
              {/* Kategori simgesi */}
              {category.name}
              {activeCategory === category.name && (
                <>
                  <div className="active-underline"></div>
                  <div className="active-underline-white"></div>{" "}
                  {/* Beyaz çizgi */}
                </>
              )}
            </button>
          ))}
        </nav>

        <div className="event-cards">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="event-image"
              />
              <div className="event-content">
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p className="deadline">Son Başvuru: {event.deadline}</p>
                <button className="apply-button">{event.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="see-all-container">
          {/* Tüm Etkinlikleri Gör butonuna tıklama */}
          <button
            className="see-all-button mt-2 mb-5"
            onClick={handleSeeAllClick}
          >
            Tüm Etkinlikleri Gör
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
