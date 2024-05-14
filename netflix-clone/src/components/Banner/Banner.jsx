import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios'; // Import axios without braces
import requests from '../../utils/request';
import "./banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
    async function fetchData() {
        try {
            const request = await axios.get(requests.fetchNetflixOriginals);
            if (request.data.results && request.data.results.length > 0) {
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } else {
                console.error("Error fetching data: No results found");
                // Set a default movie or show a message to the user
                // For example:
                setMovie(null); // Set movie to null or any default value
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error, e.g., display an error message to the user
            // setErrorMessage("Error fetching data. Please try again later.");
        }
    }   
    fetchData();
}, []);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || ''}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name || ''}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner__fadeButtom"></div>
        </header>
    );
    
};

export default Banner;