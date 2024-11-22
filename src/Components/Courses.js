import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../Css/Courses.css'; // CSS dosyasını da eklemeyi unutmayın
import course1Image from "../Img/course1.png";
import course2Image from "../Img/course2.png";
import course3Image from "../Img/course3.png";
import timer from "../Icons/timer.png";
import skilss from "../Icons/skillsLevel.png";
import certificate from "../Icons/certificate.png";


const Courses = () => {
  const courses = [
    {
      imgSrc: course1Image,
      title: "React Native ile Mobile Uygulama Geliştirme",
      description: "React Native, cross-platform mobile uygulama geliştirme framework'üdür.",
      tags: ["React Framework"],
      hour: "13 Saat",
      level: "Orta",
      levelImg: skilss,
      certificates: "Sertifikalı",
      courseId: 6523,
    },
    {
      imgSrc: course2Image,
      title: "Unity ile Oyun Geliştirme",
      description:
        "Unity, oyun geliştirmek için kullanılan güçlü ve esnek bir oyun motorudur. Bu eğitimde, Unity'nin temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.",
      tags: ["Oyun Geliştirme", "Unity", "2D", "3D"],
      hour: "13 Saat",
      level: "Başlangıç",
      levelImg: skilss,
      certificates: "Sertifikalı",
      courseId: 9852,
    },
    {
      imgSrc: course3Image,
      title: "Uygulamalarla SQL Eğitimi",
      description:
        "SQL, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir. Bu eğitimde, SQL'in temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.",
      tags: ["SQL", "Veri Tabanı", "SQL Server"],
      hour: "13 Saat",
      level: "Orta",
      levelImg: skilss,
      certificates: "Sertifikalı",
      courseId: 7633,
    },
  ];

  const renderGroupedCourses = () => {
    const groupedCourses = [];
    for (let i = 0; i < courses.length; i += 3) {
      groupedCourses.push(courses.slice(i, i + 3));
    }

    return groupedCourses.map((group, groupIndex) => (
      <Row key={groupIndex} className="mb-4">
        {group.map((course) => (
          <Col key={course.courseId} md={4}>
            <div className="course-card">
              <img src={course.imgSrc} alt={course.title} className="course-image" />
              <h4 className="course-title">{course.title}</h4>
              <p className="course-description">{course.description}</p>
              <div className="course-tags">
                {course.tags.map((tag, index) => (
                  <span key={index} className="course-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="course-info">
                <div className="course-hour">
                  <img src="/src/assets/timer.svg" alt="Saat İkonu" className="icon" />
                  <span>{course.hour}</span>
                </div>
                <div className="course-level">
                  <img
                    src={course.levelImg}
                    alt="Level İkonu"
                    className="icon"
                  />
                  <span>{course.level}</span>
                </div>
                <div className="course-certificates">
                  <img
                    src="/src/assets/certificate.svg"
                    alt="Sertifika İkonu"
                    className="icon"
                  />
                  <span>{course.certificates}</span>
                </div>
              </div>
              <Button className="btn-start">Eğitime Başla</Button>
            </div>
          </Col>
        ))}
      </Row>
    ));
  };

  return (
    <Container>
      {renderGroupedCourses()}
      <div className="d-flex justify-content-center mt-4">
        <Button
          className="btn-show-all"
          size="lg"
        >
          Tüm Eğitimleri Gör
        </Button>
      </div>
    </Container>
  );
};

export default Courses;
