import React, { useState } from 'react';

const ShortenForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    setError('');
    onShorten(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to shorten"
        required
      />
      <button type="submit">Shorten</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ShortenForm;