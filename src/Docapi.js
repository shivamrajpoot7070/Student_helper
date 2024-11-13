import React, { useEffect, useState } from 'react';
import './Docapi.css';
import axios from 'axios';

const Docapi = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://dev.to/api/articles?tag=javascript');
        setArticles(response.data);
        setFilteredArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  const handleSearch = () => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="app-container">
      <h1 style={{color:"blue"}}>  documentation padh lo bhaiya</h1>
      <br></br>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{color:'red'}}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="articles-container">
        {filteredArticles.map((article, index) => (
          <div key={index} className="article-card">
            <h2>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description || 'No description available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docapi;
