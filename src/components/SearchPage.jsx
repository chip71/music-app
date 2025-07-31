import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MusicCard from "./MusicCard";

const SearchPage = () => {
    const [albums, setAlbums] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q") || "";

    useEffect(() => {
        if (!query) return;
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                const searchLower = query.toLowerCase();

                const filteredAlbums = data.albums
                    .filter(album => album.name.toLowerCase().includes(searchLower))
                    .map(album => {
                        const artist = data.artists.find(a => a.id === album.artistID);
                        const genre = data.genres.find(g => g.id === album.genreID);
                        return {
                            ...album,
                            artistName: artist ? artist.name : "Unknown Artist",
                            genreName: genre ? genre.name : "Unknown Genre"
                        };
                    });

                setAlbums(filteredAlbums);
            });
    }, [query]);

    if (!query) return <p className="text-center mt-5">Enter a search term.</p>;

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Search Results for "{query}"</h2>
            <div className="row g-4 justify-content-center">
                {albums.length > 0 ? (
                    albums.map(album => (
                        <div className="col-6 col-md-4 col-lg-3" key={album.id}>
                            <MusicCard song={album} />
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <img
                            src="https://img2.thejournal.ie/inline/2434312/original/?width=360&version=2434312"
                            alt="No results"
                            style={{ width: "430px"}}
                        />
                        <p className="text-warning">No albums found. Try another search 🎵</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
