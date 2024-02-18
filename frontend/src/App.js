import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CourseSlides from "./pages/CourseSlides";
import Textbook from "./pages/Texbook";
import Quiz from "./pages/Quiz";
function App() {
  return (
    
    <Router>
      <Navbar />
      <div className="scroll">
      <Sidebar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-slides" element={<CourseSlides />} />
        <Route path="/textbooks" element={<Textbook />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
