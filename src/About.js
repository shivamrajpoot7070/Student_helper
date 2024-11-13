import React from 'react';
import { FaCheckCircle, FaClipboardList, FaLightbulb, FaLaptopCode } from 'react-icons/fa'; // Importing an additional icon
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="date-section">
          <h2 style={{color:"blueviolet"}}>About Me</h2>
          <p>
            Welcome to our Student Portal! Designed by a dedicated student, this website is crafted to simplify essential tasks for students and provide a space for productivity and learning.
          </p>
        </div>

        <div className="developer-section">
          <h3>My Website Features</h3>
          <div className="feature-list">
            <div className="feature-item">
              <FaClipboardList className="icon" />
              <strong style={{ color: "red" }}>Resume Builder:</strong> Craft professional resumes effortlessly.
            </div>
            <div className="feature-item">
              <FaCheckCircle className="icon" />
              <strong style={{ color: "red" }}>To-Do List:</strong> Manage tasks efficiently and stay organized.
            </div>
            <div className="feature-item">
              <FaLightbulb className="icon" />
              <strong style={{ color: "red" }}>Doubt Section:</strong> Save questions and notes to tackle coding challenges.
            </div>
            <div className="feature-item">
              <FaLaptopCode className="icon" /> {/* Icon for the new feature */}
              <strong style={{ color: "red" }}>LeetCode Solver:</strong> Search for LeetCode questions by number and navigate directly to them.
            </div>

            <div className="feature-item">
              <FaLaptopCode className="icon" /> {/* Icon for the new feature */}
              <strong style={{ color: "red" }}>Documentations:</strong> Learn about new Tech Stack.
            </div>
          </div>

          <h3 style={{color:"red"}}>My Mission</h3>
          <p>
            My mission is to empower students by providing a practical and supportive platform for achieving their academic and personal goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
