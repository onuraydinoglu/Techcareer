import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Job.css';

// İkon dosyalarını import edin
import laptopIcon from '../Icons/laptop.png';
import buildIcon from '../Icons/build.png';
import locationIcon from '../Icons/Vector.png';
import bookmarkIcon from '../Icons/bookmark.png';
import is1 from '../Img/is1.png';
import is2 from '../Img/is2.png';
import is3 from '../Img/is3.png';

const jobData = [
    {
      logo: is1,
      title: 'Transport Network Planning & Operations Specialist',
      company: 'Hangi Kredi',
      location: 'İstanbul (Asya)',
      workType: 'Uzaktan',
      url: '/transport-specialist',
    },
    {
      logo: is2,
      title: 'Software Developer',
      company: 'Tech Solutions',
      location: 'Ankara',
      workType: 'Hibrit',
      url: '/software-developer',
    },
    {
      logo: is3,
      title: 'Product Manager',
      company: 'Yeni Teknoloji',
      location: 'İstanbul (Avrupa)',
      workType: 'Ofis İçi',
      url: '/product-manager',
    },
    // Diğer iş ilanları...
  ];
  
  const JobCard = ({ logo, title, company, location, workType, url }) => (
    <div className="job-card card shadow-sm mb-3 h-100 d-flex flex-column position-relative">
      {/* Sağ üst köşeye ikon */}
      <div className="top-right-icon position-absolute">
        <img src={bookmarkIcon} alt="Bookmark Icon" className="bookmark-icon" />
      </div>
      <div className="card-body flex-grow-1 d-flex flex-column">
        <h5 className="card-title mb-2 text-center">{title}</h5>
        <div className="d-flex align-items-start mb-2">
          <img src={logo} alt={`${company} logo`} className="job-logo rounded me-3" />
          <div className="company-info">
            <div className="d-flex align-items-center mb-1">
              <img src={buildIcon} alt="Company icon" className="icon me-2" />
              <p className="company-name mb-0">{company}</p>
            </div>
            <div className="job-meta d-flex align-items-center mb-1">
              <img src={locationIcon} alt="Location icon" className="icon me-2 mt-3" />
              <span className="me-3">{location}</span>
              <img src={laptopIcon} alt="Work type icon" className="icon me-2" />
              <span>{workType}</span>
            </div>
          </div>
        </div>
        <div className="mt-auto text-center">
          <a href={url} className="apply-button">Başvur</a>
        </div>
      </div>
    </div>
  );
  
  const JobListings = () => {
    return (
      <div className="job-listings container my-4">
        
        <div className="row">
        <h2 className="mb-4">İş İlanları</h2>
          {jobData.map((job, index) => (
            <div className="col-md-4" key={index}>
              <JobCard {...job} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <div class="view-all-button">
                  <button>Tüm İlanları Gör</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default JobListings;
  
