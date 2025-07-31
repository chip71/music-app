import React, { useEffect, useState } from "react";
import MusicCard from "./MusicCard";

const MusicGrid = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch("/music.json")
            .then((res) => res.json())
            .then((data) => {
                const songsArray = Array.isArray(data) ? data : [data];
                setSongs(songsArray);
            })
            .catch((err) => console.error("Error loading music data:", err));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Explore Songs</h2>
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {songs.map((song) => (
                    <MusicCard key={song.id} song={song} />
                ))}
            </div>
        </div>
    );
};

export default MusicGrid;