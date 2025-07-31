import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./AlbumInfoPage.css";

const AlbumInfoPage = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [artist, setArtist] = useState(null);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                const foundAlbum = data.albums.find(a => a.id === parseInt(id));
                if (foundAlbum) {
                    setAlbum(foundAlbum);
                    setArtist(data.artists.find(ar => ar.id === foundAlbum.artistID));
                    setGenre(data.genres.find(g => g.id === foundAlbum.genreID));
                }
            });
    }, [id]);

    if (!album) {
        return <p className="text-center mt-5">Loading album...</p>;
    }

    return (
        <div className="album-info-wrapper container my-5">
            <div className="row align-items-center">
                {/* Left: Album Image */}
                <div className="col-md-4 text-center">
                    <img className="album-cover" src={album.image} alt={album.name} />
                </div>

                {/* Right: Info */}
                <div className="col-md-8 text-white">
                    <h2 className="album-title">{album.name}</h2>

                    {artist && (
                        <Link to={`/artist/${artist.id}`} className="album-artist">
                            {artist.name}
                        </Link>
                    )}
                    {genre && (
                        <span> • </span>
                    )}
                    {genre && (
                        <Link to={`/genre/${genre.id}`} className="album-genre">
                            {genre.name}
                        </Link>
                    )}

                    <p className="album-description mt-3">{album.description || "No description available."}</p>

                    <Link to="/albums" className="btn btn-outline-light mt-4">
                        ← Back to Albums
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AlbumInfoPage;
