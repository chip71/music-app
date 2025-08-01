import React, { useEffect, useState, useRef } from "react";
import MusicCard from "./MusicCard";

const AllAlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [genres, setGenres] = useState([]);
    const audioRef = useRef(null);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                setAlbums(data.albums || []);
                setArtists(data.artists || []);
                setGenres(data.genres || []);
            })
            .catch(err => console.error("Error loading albums/artists/genres:", err));
    }, []);

    const playPreview = (previewUrl) => {
        if (previewUrl) {
            if (!audioRef.current) {
                audioRef.current = new Audio(previewUrl);
            } else {
                audioRef.current.src = previewUrl;
            }
            audioRef.current.play().catch(err => console.log("Playback error:", err));
        }
    };

    const stopPreview = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Albums</h2>
            <div className="row g-4 justify-content-center">
                {albums.map(album => {
                    const artist = artists.find(a => a.id === album.artistID);
                    const genre = genres.find(g => g.id === album.genreID);

                    const albumWithDetails = {
                        ...album,
                        artistName: artist ? artist.name : "Unknown Artist",
                        genreName: genre ? genre.name : "Unknown Genre",
                        preview: album.preview || "/sample.mp3" // Default preview if not available
                    };

                    return (
                        <div
                            className="col-6 col-md-4 col-lg-3 col-xl-2"
                            key={album.id}
                            onMouseEnter={() => playPreview(albumWithDetails.preview)}
                            onMouseLeave={stopPreview}
                        >
                            <MusicCard song={albumWithDetails} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllAlbumsPage;
