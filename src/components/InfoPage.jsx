import React from "react";
import "./InfoPage.css"; // Import CSS

const InfoPage = () => {
    return (
        <div className="info-page">
            <h1>About MusicX</h1>
            <p className="text-center">
                Welcome to <span className="info-highlight">MusicX</span> — your one-stop hub for exploring albums, artists, and genres.
            </p>

            <div className="info-section">
                <h2>🎧 About This Website</h2>
                <ul>
                    <li>Browse <span className="info-highlight">latest albums</span> and classic releases.</li>
                    <li>Discover <span className="info-highlight">top artists</span> and their discographies.</li>
                    <li>Explore <span className="info-highlight">genres</span> from rock to jazz.</li>
                    <li>Click an album to see details like artist and genre.</li>
                    <li>Use the search bar to instantly find your favorite music.</li>
                </ul>
            </div>

            <div className="info-section">
                <h2>📀 What Is Vinyl?</h2>
                <p>
                    Vinyl records are <span className="info-highlight">analog music discs</span> that store sound as grooves.
                    They became popular in the 20th century for their <span className="info-highlight">warm sound</span> and tactile experience.
                </p>
                <ul>
                    <li><span className="info-highlight">Rich sound</span> — warmer than compressed digital audio.</li>
                    <li><span className="info-highlight">Artwork & packaging</span> — large covers and inserts.</li>
                    <li><span className="info-highlight">Collectibility</span> — rare editions and unique pressings.</li>
                </ul>
            </div>

            <div className="info-section">
                <h2>🛠 How to Use a Vinyl Record</h2>
                <ol>
                    <li>Prepare your turntable — place it on a stable, flat surface.</li>
                    <li>Handle the record properly — hold by edges, avoid touching grooves.</li>
                    <li>Clean before playing — use an anti-static brush.</li>
                    <li>Play at correct speed (33⅓ or 45 RPM).</li>
                    <li>After listening — store upright in its sleeve.</li>
                </ol>
            </div>
        </div>
    );
};

export default InfoPage;
