import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCompactDisc, FaSpotify, FaYoutube } from "react-icons/fa";
import "./AlbumInfoPage.css";

const AlbumInfoPage = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [artist, setArtist] = useState(null);
    const [genre, setGenre] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        fetch("/music.json")
            .then((res) => res.json())
            .then((data) => {
                const foundAlbum = data.albums.find((a) => a.id === parseInt(id));
                if (foundAlbum) {
                    setAlbum(foundAlbum);
                    setArtist(data.artists.find((ar) => ar.id === foundAlbum.artistID));
                    setGenre(data.genres.find((g) => g.id === foundAlbum.genreID));
                }
            });
    }, [id]);

    if (!album) {
        return <p className="text-center mt-5">Loading album...</p>;
    }

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="album-info-wrapper container my-5">
            <div className="row align-items-center">
                {/* Left: Album Image */}
                <div className="col-md-4 text-center">
                    <img className="album-cover" src={album.image} alt={album.name} />
                </div>

                {/* Right: Album Info */}
                <div className="col-md-8 text-white">
                    <h1 className="mt-3 text-white">{album.name}</h1>

                    {artist && (
                        <Link to={`/artist/${artist.id}`} className="album-artist">
                            {artist.name}
                        </Link>
                    )}

                    {genre && (
                        <>
                            <span> • </span>
                            <Link to={`/genre/${genre.id}`} className="album-genre">
                                {genre.name}
                            </Link>
                        </>
                    )}

                    <p className="album-description mt-3">
                        {album.description || "No description available."}
                    </p>

                    {/* Preview Section */}
                    {album.preview && (
                        <div className="preview-section mt-4 d-flex align-items-center">
                            <span className="preview-text me-2">Preview:</span>
                            <FaCompactDisc
                                className={`disc-icon ${isPlaying ? "spinning" : ""}`}
                                size={40}
                                onClick={togglePlay}
                                style={{ cursor: "pointer" }}
                            />
                            <audio
                                ref={audioRef}
                                src={album.preview}
                                onEnded={() => setIsPlaying(false)}
                            />
                        </div>
                    )}

                    {/* Listen on Spotify & YouTube */}
                    <div className="listen-section mt-4">
                        <p className="mb-2">Listen here:</p>
                        <div className="d-flex gap-3">
                            <a
                                href={album.spotify || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaSpotify size={32} color="#1DB954" style={{ cursor: "pointer" }} />
                            </a>
                            <a
                                href={album.youtube || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube size={32} color="#FF0000" style={{ cursor: "pointer" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumInfoPage;
