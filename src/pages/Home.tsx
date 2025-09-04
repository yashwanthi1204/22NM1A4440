import React, { useState, useEffect } from 'react';
import ShortenForm from '../components/ShortenForm';
import UrlList from '../components/UrlList';
import { Url } from '../types';

const Home: React.FC = () => {
    const [urls, setUrls] = useState<Url[]>([]);

    const fetchUrls = async () => {
        // Fetch the list of shortened URLs from the API
        // This is a placeholder for the actual API call
        const response = await fetch('/api/urls');
        const data = await response.json();
        setUrls(data);
    };

    useEffect(() => {
        fetchUrls();
    }, []);

    return (
        <div className="home">
            <h1>URL Shortener</h1>
            <ShortenForm onUrlShortened={fetchUrls} />
            <UrlList urls={urls} />
        </div>
    );
};

export default Home;