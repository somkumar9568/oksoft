import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/MainLayout"; // Import the new layout
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import TopSubjects from "./Components/Subject";
import Course from "./Components/Course";
import Contactform from "./Components/Contectform"; // Fixed typo in import path
import TeacherCards from "./Components/TeacherCards";
import TestimonialsSlider from "./Components/TestimonialsSlider";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Add more routes as needed */}
        </Route>
        {/* Route for components that should always be shown */}
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <>
                <About />
                <div className="Topsubject">
                  <TopSubjects />
                </div>
                <div className="Course">
                  <Course />
                </div>
                <div className="Contactform">
                  <Contactform />
                </div>
                <div className="TestimonialsSlider">
                  <TestimonialsSlider />
                </div>
                <div className="TeacherCards">
                  <TeacherCards />
                </div>
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
