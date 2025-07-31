import React from "react";
import "./Navbar.css"; // custom styles

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/musicx-logo.svg" alt="MUSICX Logo" height="40"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="/albums">Albums</a></li>
                        <li className="nav-item"><a className="nav-link" href="/artists">Artists</a></li>
                        <li className="nav-item"><a className="nav-link" href="/genres">Genres</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
