import React from "react";
import { CoursesCard } from "./CoursesCard.js";
import {Container, Row, Col, Button} from "react-bootstrap";
import course1Image from "../Icons/ReactEgitim.webp";
import course2Image from "../Icons/UnityEgitim.webp";
import course3Image from "../Icons/SqlEgitim.webp";
import skilssm from "../Icons/skill_medium.svg";
import skilssb from "../Icons/skill_basic.svg";

export const CoursesList = () => {
    const courses = [
        {
            "imgSrc": course1Image,
            "title": "React Native ile Mobile Uygulama Geliştirme",
            "description": "React Native, cross-platform mobile uygulama geliştirme framework'üdür.",
            "tags": ["React Framework"],
            "hour": "13 Saat",
            "level": "Orta",
            "levelImg":skilssm,
            "certificates": "Sertifikalı",
            "courseId": 6523
        },
        {
            "imgSrc": course2Image,
            "title": "Unity ile Oyun Geliştirme",
            "description": "Unity, oyun geliştirmek için kullanılan güçlü ve esnek bir oyun motorudur. Bu eğitimde, Unity'nin temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.",
            "tags": ["Oyun Geliştirme", "Unity", "2D", "3D"],
            "hour": "13 Saat",
            "level": "Başlangıç",
            "levelImg":skilssb,
            "certificates": "Sertifikalı",
            "courseId": 9852
        },
        {
            "imgSrc": course3Image,
            "title": "Uygulamalarla SQL Eğitimi",
            "description": "SQL, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir. Bu eğitimde, SQL'in temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.",
            "tags": ["SQL", "Veri Tabanı", "SQL Server"],
            "hour": "13 Saat",
            "level": "Orta",
            "levelImg":skilssm,
            "certificates": "Sertifikalı",
            "courseId": 7633
        }
    ];

    const renderGroupedCourses = () => {
        const groupedCourses = [];
        for (let i = 0; i < courses.length; i += 3) {
            groupedCourses.push(courses.slice(i, i + 3));
        }

        return groupedCourses.map((group, groupIndex) => (
            <Row key={groupIndex} className="mb-4">
                {group.map(course => (
                    <Col key={course.courseId} md={4}>
                        <CoursesCard
                            img={course.imgSrc}
                            title={course.title}
                            description={course.description}
                            tags={course.tags}
                            hour={course.hour}
                            level={course.level}
                            certificates={course.certificates}
                            levelImg={course.levelImg}
                        />
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
                    style={{
                        backgroundColor: '#00C26D',
                        borderColor: '#00C26D',
                        borderRadius: '20px',
                        padding: '10px 30px'
                    }}
                    size="lg"
                >
                    Tüm Eğitimleri Gör
                </Button>
            </div>
        </Container>
    );
    
};
export default CoursesList;