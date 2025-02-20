import React, { useState, useEffect } from 'react';
import Lightroom from 'react-lightbox-gallery';

const Gallery = () => {
    const [images, setImages] = useState([]); // State to store images from API

    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                const response = await fetch('https://admin.leaftravelsandtour.com/api/gallery_images/');
                const data = await response.json();

                // Transform API response to match Lightroom expected format
                const formattedImages = data.map((item) => ({
                    src: item.image, // API provides 'image' URL
                    desc: "Gallery Image", // You can modify this dynamically if needed
                    sub: "Leaf Travels" // Default or API-based subtitle
                }));

                setImages(formattedImages);
            } catch (error) {
                console.error("Error fetching gallery images:", error);
            }
        };

        fetchGalleryImages();
    }, []);

    var settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom: false,
    };

    return (
        <>
            {images.length > 0 ? (
                <Lightroom images={images} settings={settings} />
            ) : (
                <p>Loading gallery...</p> // Fallback text while fetching
            )}
        </>
    );
}

export default Gallery;
