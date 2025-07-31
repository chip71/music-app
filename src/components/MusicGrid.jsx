import React, {useEffect, useState} from "react";
import MusicCard from "./MusicCard";

const MusicGrid = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    const [topGenres, setTopGenres] = useState([]);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                const albums = data.albums || [];
                const artists = data.artists || [];
                const genres = data.genres || [];

                const filteredAlbums = albums.filter(a => a.prominent === 1).slice(0, 5);
                const filteredArtists = artists
                    .filter(ar => filteredAlbums.some(alb => alb.artistID === ar.id))
                    .slice(0, 5);
                const filteredGenres = genres
                    .filter(ge => filteredAlbums.some(alb => alb.genreID === ge.id))
                    .slice(0, 5);

                // Attach artistName and genreName to each album
                const albumsWithDetails = filteredAlbums.map(album => {
                    const artist = filteredArtists.find(ar => ar.id === album.artistID);
                    const genre = filteredGenres.find(ge => ge.id === album.genreID);
                    return {
                        ...album,
                        artistName: artist ? artist.name : "Unknown Artist",
                        genreName: genre ? genre.name : "Unknown Genre"
                    };
                });

                setTopAlbums(albumsWithDetails);
                setTopArtists(filteredArtists);
                setTopGenres(filteredGenres);
            })
            .catch(err => console.error("Error loading music data:", err));
    }, []);

    return (
        <div className="container my-5">
            {/* Top 5 Albums */}
            <h2 className="text-center mb-4">Top 5 Albums</h2>
            <div className="row g-4">
                {topAlbums.map(album => (
                    <div className="col-6 col-md-4 col-lg-2" key={album.id}>
                        <MusicCard song={album}/>
                    </div>
                ))}
            </div>

            {/* Top 5 Artists */}
            <h2 className="text-center my-4">Top 5 Artists</h2>
            <div className="row g-4 justify-content-center text-center">
                {topArtists.map(artist => (
                    <div className="col-auto" key={artist.id}>
                        <div className="artist-card">
                            <img src={artist.image} alt={artist.name}/>
                            <div className="artist-name">{artist.name}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Top 5 Genres */}
            <h2 className="text-center my-4">Top 5 Genres</h2>
            <div className="row g-4 justify-content-center text-center">
                {topGenres.map((genre, index) => (
                    <div className="col-6 col-md-4 col-lg-2" key={genre.id}>
                        <div className={`genre-card genre-gradient-${(index % 5) + 1}`}>
                            {genre.name}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MusicGrid;
