import "./App.css";
import Blog from "./Components/Blog";
import Job from "./Components/Job";
import Navbar from "./Components/Navbar";
import TechnicalDictionary from "./Components/TechnicalDictionary";
import WhyTechCareer from "./Components/WhyTechCareer";
import Events from "./Components/Events";
import CoursesList from "./Components/CoursesList";
import Community from "./Components/Community";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Attendants from "./Components/Attendants";
import Slider from "./Components/Slider";
import SliderWork from "./Components/SliderWork";

function App() {
  return (
    <>
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Slider />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SliderWork />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Events />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CoursesList />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Job />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TechnicalDictionary />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Blog />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Community />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <WhyTechCareer />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Attendants />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Contact />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
