import React, { useState } from 'react';
import ShortenForm from './components/ShortenForm';
import UrlList from './components/UrlList';
import './App.css';

function generateShortUrl(url) {
  // Simple hash for demonstration (not for production)
  return 'https://sho.rt/' + Math.random().toString(36).substr(2, 6);
}

function App() {
  const [urls, setUrls] = useState([]);

  const handleShorten = (originalUrl) => {
    const shortUrl = generateShortUrl(originalUrl);
    setUrls([{ originalUrl, shortUrl }, ...urls]);
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <ShortenForm onShorten={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;