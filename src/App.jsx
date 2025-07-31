import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MusicGrid from "./components/MusicGrid";
import AllAlbumsPage from "./components/AllAlbumsPage";
import AllArtistsPage from "./components/AllArtistsPage";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
    return (
        <Router>
            <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
                <Navbar />
                <div className="container-fluid px-0">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Carousel />
                                    <MusicGrid />
                                </>
                            }
                        />
                        <Route path="/albums" element={<AllAlbumsPage />} />
                        <Route path="/artists" element={<AllArtistsPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
