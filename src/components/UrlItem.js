import React from 'react';

interface UrlItemProps {
    originalUrl: string;
    shortenedUrl: string;
}

const UrlItem: React.FC<UrlItemProps> = ({ originalUrl, shortenedUrl }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortenedUrl);
        alert('Shortened URL copied to clipboard!');
    };

    return (
        <div className="url-item">
            <p>Original URL: <a href={originalUrl} target="_blank" rel="noopener noreferrer">{originalUrl}</a></p>
            <p>Shortened URL: <span>{shortenedUrl}</span></p>
            <button onClick={copyToClipboard}>Copy</button>
        </div>
    );
};

export default UrlItem;