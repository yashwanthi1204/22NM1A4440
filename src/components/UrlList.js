import React from 'react';

const UrlList = ({ urls }) => (
  <ul>
    {urls.map((item, idx) => (
      <li key={idx}>
        <span>{item.originalUrl}</span> &rarr;{' '}
        <a href={item.shortUrl} target="_blank" rel="noopener noreferrer">
          {item.shortUrl}
        </a>
      </li>
    ))}
  </ul>
);

export default UrlList;