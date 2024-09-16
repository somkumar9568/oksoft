import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/MainLayout"; 
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import TopSubjects from "./Components/Subject";
import Course from "./Components/Course";
import Contactform from "./Components/Contectform"; 
import TeacherCards from "./Components/TeacherCards";
import TestimonialsSlider from "./Components/TestimonialsSlider";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes with MainLayout */}
        <Route path="/oksoft" element={<MainLayout />}>
          {/* Define nested routes */}
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        {/* Define route for oksoft page */}
        <Route path="/oksoft" element={<MainLayout />}>
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

        {/* Fallback route for non-matching paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
