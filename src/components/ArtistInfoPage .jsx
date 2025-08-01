import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MusicCard from "./MusicCard";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import "./ArtistInfoPage.css";

const ArtistInfoPage = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [albums, setAlbums] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        fetch("/music.json")
            .then((res) => res.json())
            .then((data) => {
                const foundArtist = data.artists.find((a) => a.id === parseInt(id));
                setArtist(foundArtist);

                if (foundArtist) {
                    const artistAlbums = data.albums
                        .filter((album) => album.artistID === foundArtist.id)
                        .map((album) => {
                            const genre = data.genres.find((g) => g.id === album.genreID);
                            return {
                                ...album,
                                artistName: foundArtist.name,
                                genreName: genre ? genre.name : "Unknown Genre",
                            };
                        });
                    setAlbums(artistAlbums);
                }
            });
    }, [id]);

    if (!artist) return <p className="text-center mt-5">Loading artist...</p>;

    return (
        <div className="artist-info-container container my-5">
            <div className={`artist-header d-flex align-items-center ${showDetails ? "show-details" : ""}`}>
                <img
                    src={artist.image}
                    alt={artist.name}
                    className="artist-info-img"
                    onClick={() => setShowDetails(!showDetails)}
                    style={{ cursor: "pointer" }}
                />

                {showDetails && (
                    <div className="artist-details text-white ms-4">
                        <h2>{artist.name}</h2>
                        <p>{artist.description || "No description available."}</p>
                        <div className="d-flex gap-3 mt-3">
                            <a
                                href={artist.spotify || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaSpotify size={32} color="#1DB954" style={{ cursor: "pointer" }} />
                            </a>

                            <a
                                href={artist.youtube || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube size={32} color="#FF0000" style={{ cursor: "pointer" }} />
                            </a>
                        </div>

                    </div>
                )}
            </div>

            <div className="artist-albums-section mt-5">
                <h4 className="text-center mb-4">Albums</h4>
                {albums.length > 0 ? (
                    <div className="row g-4 justify-content-center">
                        {albums.map((album) => (
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={album.id}>
                                <MusicCard song={album} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center" style={{ color: "#ccc" }}>
                        No albums found for this artist.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ArtistInfoPage;
