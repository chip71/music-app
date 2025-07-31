import React from "react";

const MusicCard = ({ song }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={song.image}
                className="card-img-top"
                alt={song.name}
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title">{song.name}</h5>
                <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                    {song.description.slice(0, 100)}...
                </p>
                <p className="card-text">
                    <strong>Price:</strong> ${song.sale_price.toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default MusicCard;