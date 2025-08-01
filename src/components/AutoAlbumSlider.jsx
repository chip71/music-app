import React, { useEffect, useState, useRef } from "react";
import "./AutoAlbumSlider.css";

const AutoAlbumSlider = () => {
    const [albums, setAlbums] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        fetch("/music.json")
            .then((res) => res.json())
            .then((data) => {
                const allAlbums = data.albums || [];
                const sortedAlbums = [...allAlbums].sort((a, b) => b.id - a.id);
                setAlbums(sortedAlbums);
            })
            .catch((err) => console.error("Error loading albums:", err));
    }, []);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollSpeed = 1;

        const scroll = () => {
            if (slider) {
                slider.scrollLeft += scrollSpeed;
                if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                    slider.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scroll, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: "20px", overflow: "hidden" }}>
            <h2 className="text-center mb-4"></h2>
            <div className="album-slider" ref={sliderRef}>
                {albums.map((album) => (
                    <div
                        key={album.id}
                        className="album-card"
                        onClick={() => (window.location.href = `/album/${album.id}`)}
                    >
                        <img src={album.image} alt={album.name} />
                        <div className="album-title">{album.name}</div> {/* Changed to name */}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AutoAlbumSlider;
