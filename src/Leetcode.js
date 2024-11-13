import React, { useState } from 'react';
import './Leetcode.css'; // Remember to create this CSS file

const Leetcode = () => {
  const [questionNo, setQuestionNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!questionNo) {
      setError('Please enter a LeetCode question number.');
      return;
    }

    const leetcodeURL = `https://leetcode.com/problems/?search=${questionNo}`;
    window.open(leetcodeURL, '_blank');
  };

  return (
    <div className="leetcode-container">
      <h2 className="leetcode-title">LeetCode Question Redirect</h2>

      <form onSubmit={handleSubmit} className="leetcode-form">
        <input
          type="text"
          placeholder="Enter LeetCode Question No"
          value={questionNo}
          onChange={(e) => setQuestionNo(e.target.value)}
          className="leetcode-input"
          style={{color:"red"}}
        />
        <button type="submit" className="leetcode-button">Go to Question</button>
      </form>

      {error && <p className="leetcode-error">{error}</p>}
    </div>
  );
};

export default Leetcode;
