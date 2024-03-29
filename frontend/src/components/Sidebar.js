import React from "react";
import { Link } from "react-router-dom";


const Sidebar = ({ open }) => {
  return (
    <>
      <div className={`side-cont ${open ? "close" : "open"}`}>
        <div className="user-welcome">
          <h3>USER WELCOME</h3>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="active nav-link">
            <span class="material-symbols-outlined">
              home
            </span>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
            <span class="material-symbols-outlined">library_books</span>
              <Link to="/course-slides">Course Slides</Link>
            </li >
            <li className="nav-link">
            <span class="material-symbols-outlined">book</span>
              <Link to="/textbooks">Texbooks</Link>
            </li>
            <li className="nav-link">
            <span class="material-symbols-outlined">quiz</span>
              <Link to="/quiz">Quiz</Link>
            </li >
            <li id="login" className="nav-link">
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
