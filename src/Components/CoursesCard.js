import React, { useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import timer from "../Icons/timer.svg";
import certificate from "../Icons/certificate.svg";

// Tüm eğitimler başlığı ana bileşende
export const CoursesList = ({ courses }) => {
  return (
    <>
      <h2>Tüm Eğitimler</h2> {/* Bu başlık burada bir kez gösterilecek */}
      <Row>
        {courses.map((course) => (
          <Col key={course.courseId} xs={12} md={4}>
            <CoursesCard {...course} />
          </Col>
        ))}
      </Row>
    </>
  );
};

// CoursesCard bileşeninde başlık kısmını kaldırdık
export const CoursesCard = ({
  img,
  title,
  description,
  tags,
  hour,
  level,
  levelImg,
  certificates,
  courseId,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Card
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: hover
          ? "0 8px 16px rgba(0, 0, 0, 0.3)"
          : "0 4px 8px rgba(0, 0, 0, 0.2)",
        border: "none",
        minHeight: "200px",
        transition: "box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "30px",
          color: "#FFFFFF",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <i className="bi bi-bookmark"></i>
      </div>

      <Card.Img variant="top" src={img} style={{ borderRadius: "20px" }} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        {/* Title - Centered */}
        <Card.Title
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "-10px",
            flexShrink: 0,
            fontSize: "18px",
          }}
        >
          {title}
        </Card.Title>

        <Card.Text
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "-5px",
            fontSize: "12px",
            marginBottom: "auto",
          }}
        >
          {description}
        </Card.Text>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                color: "#00C26D",
                border: "none",
                padding: "3px 3px",
                borderRadius: "18px",
                fontSize: "13px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <Row
          style={{
            width: "346px",
            height: "24px",
            gap: "8px",
            opacity: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={timer}
              alt="Saat İkonu"
              style={{ width: "18px", height: "18px", marginRight: "5px" }}
            />
            <span style={{ fontSize: "14px", color: "#1D1D1D" }}>{hour}</span>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Card.Img
              variant="top"
              src={levelImg}
              style={{
                width: "18px",
                height: "18px",
                objectFit: "cover",
                marginRight: "5px",
              }}
            />
            <span style={{ fontSize: "14px", color: "#1D1D1D" }}>{level}</span>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={certificate}
              alt="Sertifika İkonu"
              style={{ width: "18px", height: "18px", marginRight: "5px" }}
            />
            <span style={{ fontSize: "14px", color: "#1D1D1D" }}>
              {certificates}
            </span>
          </Col>
        </Row>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            style={{
              alignContent: "end",
              marginTop: "20px",
              backgroundColor: "#00C26D",
              border: "none",
              borderRadius: "20px",
              padding: "8px 40px",
              fontSize: "14px",
            }}
          >
            Eğitime Başla
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
