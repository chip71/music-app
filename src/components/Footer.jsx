import React from "react";
import "./Footer.css"; // custom footer styles

const Footer = () => {
    return (
        <footer className="custom-footer mt-5 pt-4 pb-2">
            <div className="container">
                <div className="row">

                    {/* Brand Section */}
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">About Us</h5>
                        <p className="small">
                            Discover premium albums, explore genres, and enjoy music from artists around the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li><a href="/" className="footer-link">Home</a></li>
                            <li><a href="/albums" className="footer-link">Albums</a></li>
                            <li><a href="/artists" className="footer-link">Artists</a></li>
                            <li><a href="/genres" className="footer-link">Genres</a></li>
                            <li><a href="/info" className="footer-link">Info</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com/letitrip.753379" className="footer-link fs-5">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="footer-divider"/>
                <p className="text-center small mb-0">
                    &copy; {new Date().getFullYear()} Music Store. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
