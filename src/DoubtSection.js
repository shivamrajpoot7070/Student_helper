import React, { useState } from 'react';
import { FaSave, FaLink } from 'react-icons/fa';

function DoubtSection() {
  const [questionNumber, setQuestionNumber] = useState('');
  const [description, setDescription] = useState('');
  const [tips, setTips] = useState('');
  const [link, setLink] = useState('');
  const [savedQuestions, setSavedQuestions] = useState([]);

  const saveQuestion = () => {
    if (questionNumber && description && tips && link) {
      const newQuestion = {
        questionNumber,
        description,
        tips,
        link,
      };
      setSavedQuestions([...savedQuestions, newQuestion]);
      // Clear the input fields
      setQuestionNumber('');
      setDescription('');
      setTips('');
      setLink('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#e6f7ff' }}>
      <h2 style={{ textAlign: 'center', color: '#0056b3' }}>Doubt Section</h2>

      <div style={{ margin: '10px 0' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>Question Number:</label>
        <input
          type="text"
          value={questionNumber}
          onChange={(e) => setQuestionNumber(e.target.value)}
          placeholder="Enter question number"
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #0056b3', width: '100%' }}
        />
      </div>

      <div style={{ margin: '10px 0' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the question"
          rows="4"
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #0056b3', width: '100%' }}
        />
      </div>

      <div style={{ margin: '10px 0' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>Tips and Tricks:</label>
        <textarea
          value={tips}
          onChange={(e) => setTips(e.target.value)}
          placeholder="Share your tips and tricks"
          rows="4"
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #0056b3', width: '100%' }}
        />
      </div>

      <div style={{ margin: '10px 0' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>LeetCode Question Link:</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Paste the link here"
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #0056b3', width: '100%' }}
        />
      </div>

      <button
        onClick={saveQuestion}
        style={{ padding: '10px', borderRadius: '4px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FaSave style={{ marginRight: '5px' }} />
        Save
      </button>

      <h3 style={{ textAlign: 'center', color: '#0056b3', marginTop: '20px' }}>Saved Questions</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {savedQuestions.map((q, index) => (
          <li key={index} style={{ backgroundColor: 'skyblue',color:"red", margin: '10px 0', padding: '10px', borderRadius: '4px' }}>
            <strong>Question #{q.questionNumber}</strong><br />
            <span>{q.description}</span><br />
            <em>Tips: {q.tips}</em><br />
            <a href={q.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'underline' }}>
              <FaLink style={{ marginRight: '5px' }} />
              View Question
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoubtSection;
