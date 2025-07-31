import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MusicGrid from "./components/MusicGrid";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
    return (
        <div className="bg-dark text-white" style={{minHeight: "100vh"}}>
            <Navbar/>
            <div className="container-fluid px-0">
                <Carousel/>
            </div>
            <MusicGrid/>
            <Footer/>
        </div>
    );
};

export default App;