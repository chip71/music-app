import React, {useEffect, useState} from "react";
import MusicCard from "./MusicCard";
import { Link } from "react-router-dom";

const MusicGrid = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    const [topGenres, setTopGenres] = useState([]);

    useEffect(() => {
        fetch("/music.json")
            .then((res) => res.json())
            .then((data) => {
                const albums = data.albums || [];
                const artists = data.artists || [];
                const genres = data.genres || [];

                // Top 5 Albums (latest by id)
                const latestAlbums = [...albums]
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 5)
                    .map((album) => {
                        const artist = artists.find((ar) => ar.id === album.artistID);
                        const genre = genres.find((ge) => ge.id === album.genreID);
                        return {
                            ...album,
                            artistName: artist ? artist.name : "Unknown Artist",
                            genreName: genre ? genre.name : "Unknown Genre",
                        };
                    });

                // Top 5 Artists (most albums)
                const topArtistsList = [...artists]
                    .sort(
                        (a, b) =>
                            albums.filter((alb) => alb.artistID === b.id).length -
                            albums.filter((alb) => alb.artistID === a.id).length
                    )
                    .slice(0, 5);

                // Top 5 Genres (most appearances in albums)
                const topGenresList = [...genres]
                    .sort(
                        (a, b) =>
                            albums.filter((alb) => alb.genreID === b.id).length -
                            albums.filter((alb) => alb.genreID === a.id).length
                    )
                    .slice(0, 5);

                setTopAlbums(latestAlbums);
                setTopArtists(topArtistsList);
                setTopGenres(topGenresList);
            })
            .catch((err) => console.error("Error loading music data:", err));
    }, []);

    return (
        <div className="container my-5">
            {/* Top 5 Albums */}
            <h2 className="text-center mb-4">Latest Updated Album</h2>
            <div className="row g-4">
                {topAlbums.map((album) => (
                    <div className="col-6 col-md-4 col-lg-2" key={album.id}>
                        <MusicCard song={album}/>
                    </div>
                ))}
            </div>

            {/* Top 5 Artists */}
            <h2 className="text-center my-4">Top Artists</h2>
            <div className="artist-container text-center">
                {topArtists.map((artist) => (
                    <Link
                        to={`/artist/${artist.id}`}
                        key={artist.id}
                        className="artist-card text-decoration-none"
                    >
                        <img src={artist.image} alt={artist.name} />
                        <div className="artist-name">{artist.name}</div>
                    </Link>
                ))}
            </div>



            {/* Top 5 Genres */}
            <h2 className="text-center my-4">Top Genres</h2>
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
