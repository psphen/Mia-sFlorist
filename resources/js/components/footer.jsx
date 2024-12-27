import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faUser, } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="pt-5">
            <div className="footer-sub-1 text-white py-4">
                <div className="container text-center">
                    <h3 className="mb-0">MIA'S</h3>
                    <h3 className="mb-0">FLORIST</h3>
                </div>
            </div>
            <div className="footer-sub-2 text-white py-4">
                <div className="container main-content">
                    <div className="row text-center text-md-start align-items-center">
                        <div className="col-md-4 mb-1 px-4">
                            <div className="row">
                                <div className="col-4">
                                    <p className="mb-0 fw-bold">Produts</p>
                                </div>
                                <div className="col-4 hl">
                                    <p className="mb-0 text-center fw-bold">About us</p>
                                </div>
                                <div className="col-4 hl">
                                    <p className="mb-0 text-end fw-bold">Contact</p>
                                </div>
                                <div className="col-6 mt-3">
                                    <p className="mb-0 fw-bold">Frequent questions</p>
                                </div>
                                <div className="col-6 hl mt-3">
                                    <p className="mb-0 fw-bold text-end">Visit our blog</p>
                                </div>
                            </div>
                            <button className="btn btn-warning mt-3 w-100">
                                Login System
                            </button>
                        </div>
                        <div className="col-md-4 mb-1 hl">
                            <h6 className="fw-bold mb-0 mx-1">Subscribe for Exclusive Email Offers</h6>
                            <div className="row mx-1">
                                <input type="email" className="form-control my-2" placeholder="Your Email Address"/>
                                <button type="submit" className="btn btn-warning" style={{ borderRadius: "20px" }}>
                                    Sign me up
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-1 hl">
                            <div className="row">
                                <div className="col-1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white me-2"/>
                                </div>
                                <div className="col-11 ps-2">
                                    <h6 className="fw-bold mb-0">Location</h6>
                                    <p className="mb-2 text-footer">35 Pearl St suite 103, New Britain, CT 06051</p>
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white me-2"/>
                                </div>
                                <div className="col-11 ps-2">
                                    <h6 className="fw-bold mb-0">Email</h6>
                                    <p className="mb-2 text-footer">info@wiseatp.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="text-center">
                        <a href="#" className="text-white me-3 mb-0 text-footer">Terms & Conditions</a>
                        <a href="#" className="text-white hl ps-3 mb-0 text-footer">Privacy Policy</a>
                        <p className="text-footer">2021 Copyright © Ingenuity & Solutions</p>
                    </div>
                </div>
                <div className="mobile-only">
                    <div className="container">
                        <div className="row text-center text-md-start align-items-center">
                            <div class="col-sm-12">
                                <div className="d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white me-2"/>
                                    <h6 className="fw-bold mb-0">Location</h6>
                                </div>
                                <p className="mb-2 text-footer">35 Pearl St suite 103, New Britain, CT 06051</p>
                                <div className="d-flex justify-content-center mt-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white me-2"/>
                                    <h6 className="fw-bold mb-0">Email</h6>
                                </div>
                                <p className="mb-2 text-footer">info@wiseatp.com</p>
                                <button className="btn btn-warning mt-3 w-100">
                                    Login System
                                </button>
                            </div>
                            <hr className="my-4"/>
                            <div className="col-sm-12">
                                <h6 className="fw-bold mb-0 mx-1">Subscribe for Exclusive Email Offers</h6>
                                <div className="row mx-1">
                                    <input type="email" className="form-control my-2" placeholder="Your Email Address"/>
                                    <button type="submit" className="btn btn-warning" style={{ borderRadius: "20px" }}>
                                        Sign me up
                                    </button>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <div className="text-center">
                                <a href="#" className="text-white me-3 mb-0 text-footer">Terms & Conditions</a>
                                <a href="#" className="text-white hl ps-3 mb-0 text-footer">Privacy Policy</a>
                                <p className="text-footer">2021 Copyright © Ingenuity & Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;