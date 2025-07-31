import React, { useEffect, useState } from "react";
import "./AllArtistsPage.css"; // CSS file for artist styling

const AllArtistsPage = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data); // 🔍 Check console
                if (data && data.artists) {
                    setArtists(data.artists);
                } else {
                    console.error("No artists found in JSON");
                }
            })
            .catch(err => console.error("Error loading artists:", err));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Artists</h2>
            <div className="row g-4 justify-content-center">
                {artists.map(artist => (
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={artist.id}>
                        <div
                            className="artist-card"
                            onClick={() => window.location.href = `/artist/${artist.id}`}
                            role="button"
                        >
                            <img src={artist.image} alt={artist.name} />
                            <div className="artist-name">{artist.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllArtistsPage;
