import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
    return (
        <div className="bg-dark text-white" style={{minHeight: "100vh"}}>
            <Navbar/>
            <div className="container-fluid px-0">
                <Carousel/>
            </div>
        </div>
    );
};

export default App;