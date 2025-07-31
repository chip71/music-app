import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MusicCard from "./MusicCard";
import "./GenreInfoPage.css";

const GenreInfoPage = () => {
    const { id } = useParams();
    const [genre, setGenre] = useState(null);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                const foundGenre = data.genres.find(g => g.id === parseInt(id));
                setGenre(foundGenre);

                if (foundGenre) {
                    const genreAlbums = data.albums
                        .filter(album => album.genreID === foundGenre.id)
                        .map(album => {
                            const artist = data.artists.find(a => a.id === album.artistID);
                            return {
                                ...album,
                                artistName: artist ? artist.name : "Unknown Artist",
                                genreName: foundGenre.name
                            };
                        });
                    setAlbums(genreAlbums);
                }
            });
    }, [id]);

    if (!genre) return <p className="text-center mt-5">Loading genre...</p>;

    return (
        <div className="genre-info-container container my-5">
            <div className="text-center">
                <h2 className="genre-info-name mb-4">{genre.name}</h2>
            </div>

            <div className="genre-albums-section">
                {albums.length > 0 ? (
                    <div className="row g-4 justify-content-center">
                        {albums.map(album => (
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={album.id}>
                                <MusicCard song={album} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center" style={{ color: "#ccc" }}>No albums found for this genre.</p>
                )}
            </div>

            <div className="text-center mt-4">
                <Link to="/genres" className="btn btn-outline-light">
                    ← Back to Genres
                </Link>
            </div>
        </div>
    );
};

export default GenreInfoPage;
