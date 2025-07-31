import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllGenresPage.css";

const gradients = [
    "linear-gradient(135deg, #ff7eb3, #ff758c)", // pink
    "linear-gradient(135deg, #43cea2, #185a9d)", // teal-blue
    "linear-gradient(135deg, #ff9966, #ff5e62)", // orange-red
    "linear-gradient(135deg, #7f00ff, #e100ff)", // purple
    "linear-gradient(135deg, #00c6ff, #0072ff)", // cyan-blue
    "linear-gradient(135deg, #f7971e, #ffd200)", // yellow-orange
    "linear-gradient(135deg, #11998e, #38ef7d)", // green
    "linear-gradient(135deg, #f953c6, #b91d73)", // magenta
    "linear-gradient(135deg, #8360c3, #2ebf91)", // violet-green
    "linear-gradient(135deg, #ff512f, #dd2476)", // red-pink
];

const AllGenresPage = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                setGenres(data.genres || []);
            })
            .catch(err => console.error("Error loading genres:", err));
    }, []);

    return (
        <div className="container my-5 text-center">
            <h2 className="mb-4">Genres</h2>
            <div className="genre-container">
                {genres.map((genre, index) => (
                    <Link
                        to={`/genre/${genre.id}`}
                        key={genre.id}
                        className="genre-card text-decoration-none"
                        style={{ background: gradients[index % gradients.length] }}
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllGenresPage;
