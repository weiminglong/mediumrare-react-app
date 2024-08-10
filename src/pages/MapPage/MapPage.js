// src/pages/MapPage/MapPage.js
import React, { useEffect } from 'react';
// import { AppleMap } from 'react-apple-maps';
import './MapPage.css';

const MapPage = () => {
    // useEffect(() => {
    //     const preventScroll = (e) => {
    //         e.preventDefault();
    //         window.scrollTo(0, 0); // Ensure the window stays at the top
    //     };
    //
    //     window.addEventListener('scroll', preventScroll);
    //
    //     return () => {
    //         window.removeEventListener('scroll', preventScroll);
    //     };
    // }, []);

    return (
        <div className="map-page">
            <iframe
                title="Google Map"
                style={{ border: '0' }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/view?zoom=9&center=22.3193%2C114.1694&key="
            ></iframe>
        </div>
    );
};

export default MapPage;
