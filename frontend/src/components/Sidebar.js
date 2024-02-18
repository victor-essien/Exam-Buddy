import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../images/home-icon.svg";
import BookIcon from "../images/book-icon.svg";
import SlideIcon from "../images/slide-icon.svg";
import QuizIcon from "../images/quiz-icon.svg";
import LoginIcon from "../images/login-icon.svg";

const Sidebar = ({ open }) => {
  return (
    <>
      <div className={`side-cont ${open ? "close" : "open"}`}>
        <div className="user-welcome">
          <h3>USER WELCOME</h3>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="active ">
            <span class="material-symbols-outlined">
              home
            </span>
              <Link to="/">Home</Link>
            </li>
            <li>
            <span class="material-symbols-outlined">library_books</span>
              <Link to="/course-slides">Course Slides</Link>
            </li>
            <li>
            <span class="material-symbols-outlined">book</span>
              <Link to="/textbooks">Texbooks</Link>
            </li>
            <li>
            <span class="material-symbols-outlined">quiz</span>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li id="login">
            <span class="material-symbols-outlined">login</span>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
