import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MusicGrid from "./components/MusicGrid";
import AllAlbumsPage from "./components/AllAlbumsPage";
import AllArtistsPage from "./components/AllArtistsPage";
import AllGenresPage from "./components/AllGenresPage";
import SearchPage from "./components/SearchPage";
import AlbumInfoPage from "./components/AlbumInfoPage";

import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import ArtistInfoPage from "./components/ArtistInfoPage .jsx";
import GenreInfoPage from "./components/GenreInfoPage.jsx";

const App = () => {
    return (
        <Router>
            <div className="bg-dark text-white" style={{minHeight: "100vh"}}>
                <Navbar/>
                <div className="container-fluid px-0">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Carousel/>
                                    <MusicGrid/>
                                </>
                            }
                        />
                        <Route path="/albums" element={<AllAlbumsPage/>}/>
                        <Route path="/artists" element={<AllArtistsPage/>}/>
                        <Route path="/artist/:id" element={<ArtistInfoPage />} />
                        <Route path="/genres" element={<AllGenresPage/>}/>
                        <Route path="/genre/:id" element={<GenreInfoPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/album/:id" element={<AlbumInfoPage />} />

                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
