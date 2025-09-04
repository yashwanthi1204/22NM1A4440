import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const shortenUrl = async (originalUrl: string): Promise<ShortenUrlResponse> => {
    const response = await axios.post(`${API_BASE_URL}/shorten`, { url: originalUrl });
    return response.data;
};

export const getShortenedUrls = async (): Promise<Url[]> => {
    const response = await axios.get(`${API_BASE_URL}/urls`);
    return response.data;
};