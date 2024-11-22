import React from "react";
import "../Css/Blog.css";
import blog1Image from "../Img/blog1.png";
import blog2Image from "../Img/blog2.png";
import blog3Image from "../Img/blog3.png";
import calculate from "../Icons/calendar.png";

const blogData = [
  {
    id: 1,
    title: "Luxoft Parking Hackathon",
    date: "8.11.2024",
    description:
      "Kariyerine Luxoft'ta stajyer olarak başlamak ister misin? Hackathon'a katıl, algoritmanı kodla!",
    image: blog1Image,
  },
  {
    id: 2,
    title: "TechCareer Bootcamp",
    date: "15.11.2024",
    description: "Bootcamp'e katıl, yazılım kariyerine hızlı bir giriş yap!",
    image: blog2Image,
  },
  {
    id: 3,
    title: "AI & ML Webinar",
    date: "22.11.2024",
    description:
      "Yapay zeka ve makine öğrenimi dünyasını keşfetmeye hazır mısın?",
    image: blog3Image,
  },
];

const BlogCard = ({ image, title, date, description }) => (
  <div className="blog-card card shadow-sm mb-3 h-100 d-flex flex-column position-relative">
    {/* Sağ üst köşeye ikon ve tarih */}
    <div className="top-right-info position-absolute d-flex align-items-center">
      <img src={calculate} alt="Date Icon" className="date-icon me-2" />
      <span className="blog-date">{date}</span>
    </div>

    <div className="card-body flex-grow-1 d-flex flex-column">
      <img src={image} alt={title} className="blog-image mb-3" />
      <h5 className="card-title card-loc mb-2">{title}</h5>
      <p className="card-description mb-3">{description}</p>
      <div className="mt-auto d-flex justify-content-end">
        {/* Yuvarlak buton */}
        <div className="action-button">
          <span className="arrow-icon">&gt;</span>
        </div>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="blog-listings container my-5">
      <h2 className="mb-4">Blog</h2>
      <div className="row">
        {blogData.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <div className="view-all-button">
          <button>Tümünü Gör</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
