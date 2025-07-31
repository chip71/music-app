import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ArtistInfoPage.css"; // ✅ import css

const ArtistInfoPage = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                const foundArtist = data.artists.find(a => a.id === parseInt(id));
                setArtist(foundArtist);
            });
    }, [id]);

    if (!artist) return <p className="text-center mt-5">Loading artist...</p>;

    return (
        <div className="artist-info-container">
            <img src={artist.image} alt={artist.name} />
            <h2 className="artist-info-name">{artist.name}</h2>

            <div className="artist-albums-section">
                <h4>Albums</h4>
                <p style={{ color: "#ccc" }}>Albums will be listed here.</p>
            </div>

            <Link to="/artists" className="btn btn-outline-light mt-4">
                ← Back to Artists
            </Link>
        </div>
    );
};

export default ArtistInfoPage;
