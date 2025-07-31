import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
    const slides = [
        {
            id: 1,
            image: "https://media.wired.com/photos/646540bddaed59ebbf460999/3:2/w_1280,c_limit/Where%20to%20Buy%20Vinyl%20Online%20Gear%20GettyImages-1395337634.jpg",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbnlsfGVufDB8fDB8fHww",
        },
        {
            id: 3,
            image: "https://media.wired.com/photos/63868195f2246f0775f62975/3:2/w_1280,c_limit/Victrola-ReSpin-Turntable-Featured-Gear.jpg",
        }
    ];

    return (
        <div className="container-fluid px-0">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img
                                src={slide.image}
                                className="d-block w-100"
                                alt={`Slide ${slide.id}`}
                                style={{height: "500px", objectFit: "cover"}}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"/>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
