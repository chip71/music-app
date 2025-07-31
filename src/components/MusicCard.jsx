import React from "react";
import { Link } from "react-router-dom";
import "./MusicCard.css";

const MusicCard = ({ song }) => {
    return (
        <div className="music-card card border-0 shadow-sm h-100">
            {/* Image links to album */}
            <Link to={`/album/${song.id}`} className="image-container">
                <img
                    src={song.image}
                    alt={song.name}
                    className="card-img-top img-fluid"
                />
            </Link>

            <div className="card-body text-center">
                {/* Album name links to album */}
                <h5 className="card-title fw-bold">
                    <Link to={`/album/${song.id}`} className="text-white text-decoration-none">
                        {song.name}
                    </Link>
                </h5>

                {/* Artist links to artist page */}
                <p className="small mb-0">
                    <Link to={`/artist/${song.artistID}`} className="text-info text-decoration-none">
                        {song.artistName}
                    </Link>
                    {" • "}
                    {/* Genre links to genre page */}
                    <Link to={`/genre/${song.genreID}`} style={{ color: "#FFD700", textDecoration: "none" }}>
                        {song.genreName}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default MusicCard;
