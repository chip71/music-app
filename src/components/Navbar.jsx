import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [query, setQuery] = useState("");
    const [albums, setAlbums] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Load album list
        fetch("/music.json")
            .then(res => res.json())
            .then(data => {
                setAlbums(data.albums || []);
            });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setSuggestions([]);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim()) {
            const filtered = albums
                .filter(a => a.name.toLowerCase().includes(value.toLowerCase()))
                .slice(0, 5);
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelectSuggestion = (album) => {
        navigate(`/album/${album.id}`);
        setQuery(album.name);
        setSuggestions([]);
    };

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/musicx-logo.svg" alt="MUSICX Logo" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item"><a className="nav-link" href="/albums">Albums</a></li>
                        <li className="nav-item"><a className="nav-link" href="/artists">Artists</a></li>
                        <li className="nav-item"><a className="nav-link" href="/genres">Genres</a></li>
                        <li className="nav-item position-relative">
                            <form className="d-flex ms-3" onSubmit={handleSearch} autoComplete="off">
                                <input
                                    type="search"
                                    className="form-control form-control-sm custom-search"
                                    placeholder="Search albums..."
                                    value={query}
                                    onChange={handleChange}
                                />
                            </form>
                            {suggestions.length > 0 && (
                                <ul className="dropdown-menu show custom-dropdown">
                                    {suggestions.map(album => (
                                        <li
                                            key={album.id}
                                            className="dropdown-item d-flex align-items-center"
                                            onClick={() => handleSelectSuggestion(album)}
                                        >
                                            <img
                                                src={album.image}
                                                alt={album.name}
                                                className="suggestion-img me-2"
                                            />
                                            <span>{album.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
