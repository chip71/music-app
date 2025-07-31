import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MusicCard from "./MusicCard";
import "./ArtistInfoPage.css";

const ArtistInfoPage = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                const foundArtist = data.artists.find(a => a.id === parseInt(id));
                setArtist(foundArtist);

                if (foundArtist) {
                    const artistAlbums = data.albums
                        .filter(album => album.artistID === foundArtist.id)
                        .map(album => {
                            const genre = data.genres.find(g => g.id === album.genreID);
                            return {
                                ...album,
                                artistName: foundArtist.name,
                                genreName: genre ? genre.name : "Unknown Genre"
                            };
                        });
                    setAlbums(artistAlbums);
                }
            });
    }, [id]);

    if (!artist) return <p className="text-center mt-5">Loading artist...</p>;

    return (
        <div className="artist-info-container container my-5">
            <div className="text-center">
                <img src={artist.image} alt={artist.name} className="artist-info-img" />
                <h2 className="artist-info-name mt-3">{artist.name}</h2>
            </div>

            <div className="artist-albums-section mt-5">
                <h4 className="text-center mb-4">Albums</h4>
                {albums.length > 0 ? (
                    <div className="row g-4 justify-content-center">
                        {albums.map(album => (
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={album.id}>
                                <MusicCard song={album} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center" style={{ color: "#ccc" }}>No albums found for this artist.</p>
                )}
            </div>

            <div className="text-center mt-4">
                <Link to="/artists" className="btn btn-outline-light">
                    ← Back to Artists
                </Link>
            </div>
        </div>
    );
};

export default ArtistInfoPage;
