import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LocalApp from './LocalApp';
import TodoList from './TodoList';
import DoubtSection from './DoubtSection';
import HomePage from './HomePage';
import About from './About';
import Leetcode from './Leetcode';
import Login from './Login';
import './App.css'; // Custom CSS if any
import Docapi from './Docapi';
import QuizComponent from './QuizComponent';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [username, setname] = useState(''); // State for username

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Task Wizzard</h1>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          {isLoggedIn && (
            <>
              <Link to="/local-app" style={styles.link}>Resume Builder</Link>
              <Link to="/todo-list" style={styles.link}>To-Do List</Link>
              <Link to="/doubt-section" style={styles.link}>Helper</Link>
              <Link to="/leetcode" style={styles.link}>Leetcode Solver</Link>
              <Link to='/docapi' style={styles.link}> documentation</Link>
              <Link to='/quiz' style={styles.link}> Quiz</Link>
              <Link to="/aboutme" style={styles.link}>About Me</Link>
              

              <h1 style={styles.welcomeMessage}>Welcome {username}</h1>
            </>
          )}
          {!isLoggedIn && username.length === 0 && (
            <Link to="/login" style={styles.link}>Login</Link>
          )}
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage setIsLoggedIn={setIsLoggedIn} setname={setname} /> : <Login setIsLoggedIn={setIsLoggedIn} setname={setname} />} />
        <Route path="/local-app" element={isLoggedIn ? <LocalApp /> : <Login setIsLoggedIn={setIsLoggedIn} setname={setname} />} />
        <Route path="/todo-list" element={isLoggedIn ? <TodoList /> : <Login setIsLoggedIn={setIsLoggedIn} setname={setname} />} />
        <Route path="/doubt-section" element={isLoggedIn ? <DoubtSection /> : <Login setIsLoggedIn={setIsLoggedIn} setname={setname} />} />
        <Route path="/aboutme" element={isLoggedIn ? <About /> : <Login setIsLoggedIn={setIsLoggedIn} setname={setname} />} />
        <Route path="/leetcode" element={isLoggedIn ? <Leetcode /> : <Login setIsLoggedIn={setIsLoggedIn} setname={setname} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setname={setname} />} />
        <Route path='/docapi' element={<Docapi setIsLoggedIn={setIsLoggedIn} setname={setname}/>}></Route>
        <Route path='/quiz' element={<QuizComponent setIsLoggedIn={setIsLoggedIn} setname={setname}/>}></Route>
      </Routes>
    </div>
  );
};

// Styling
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #6a1b9a, #00bcd4)', // Gradient background
    padding: '20px 30px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
    position: 'relative',
    zIndex: '10',
    transition: 'background 0.5s ease-in-out', // Transition for gradient color
  },
  logo: {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: '700',
    textDecoration: 'none',
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: '1px',
    transition: 'color 0.3s ease, transform 0.3s ease', // Animation for logo
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '12px 18px',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: '600',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease', // Text effects
  },
  linkHover: {
    color: '#ff4081', // Hover color
    transform: 'scale(1.1)', // Slight scaling on hover
    textShadow: '0px 0px 8px rgba(255, 64, 129, 0.7)', // Glowing text effect
    transition: 'color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease',
  },
  linkActive: {
    backgroundColor: '#ff4081', // Active background color
    color: '#ffffff',
    boxShadow: '0 8px 24px rgba(255, 64, 129, 0.5)', // Active hover shadow
  },
  welcomeMessage: {
    color: '#ffeb3b',
    fontSize: '18px',
    fontWeight: '600',
    fontFamily: "'Montserrat', sans-serif",
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Light glow effect
  },
  navbarAnimation: {
    animation: 'fadeIn 1s ease-out', // Smooth fade-in animation for navbar
  },
  logoAnimation: {
    animation: 'scaleUp 0.8s ease-out', // Scale effect for logo
  },
};

// Keyframe Animations
const animations = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const injectCSS = () => {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = animations;
  document.head.appendChild(styleTag);
};

injectCSS();


export default App;
