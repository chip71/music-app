import React from "react";
import "./MusicCard.css";

const MusicCard = ({song}) => {
    return (
        <div className="music-card card border-0 shadow-sm h-100">
            <div className="image-container">
                <img
                    src={song.image}
                    alt={song.name}
                    className="card-img-top img-fluid rounded-top"
                />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title fw-bold mb-1">{song.name}</h5>
                <p className="text small mb-1">{song.artistName}</p>
                <p className="text-warning small mb-2">{song.genreName}</p>
                {song.sale_price && (
                    <p className="fw-bold text-light mb-0">
                        ${song.sale_price.toLocaleString()}
                    </p>
                )}
            </div>
        </div>
    );
};

export default MusicCard;
