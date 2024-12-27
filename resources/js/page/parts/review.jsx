import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faCircleLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
    return (
        <>
            <div className="main-content">
                <div className="background-box-star"></div>
                <div className="container">
                    <div className="text-center my-5">
                        <h3 className="top-title">
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <span className="text-pink fw-800 ms-1">(5-Star)</span> <span className="fw-800">Review on Google my Business</span>
                            <div className="button-container position-absolute d-flex align-items-center justify-content-center" style={{ top: '7%', right: '8%', width: '100px', height: '50px' }}>
                                <div className="position-relative">
                                    <button className="btn btn-pink-star mx-1">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <FontAwesomeIcon icon={faCircleLeft} style={{ fontSize: '28px', marginTop: '3px' }} />
                                            </div>
                                            <div className="col-md-6">
                                                <FontAwesomeIcon icon={faCircleRight} style={{ fontSize: '28px', marginTop: '3px' }} />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-5">
                            <div className="review-card-pink text-center">
                                <img src="/image/circle-flowe-1.png" alt="home-page" className="img-fluid position-relative flower-circle"/>
                                <h3 className="fw-800 text-center">Beautiful</h3>
                                <h6 className="mb-4 text-center text-gray">Very good service..and help when delivering. They had to wait a few minutes and they waited without</h6>
                                <h4 className="mb-0 text-center fw-800">Andrea Castaño</h4>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="review-card-white text-center">
                                <img src="/image/circle-flowe-2.png" alt="home-page" className="img-fluid position-relative flower-circle"/>
                                <h3 className="fw-800 text-center">Beautiful</h3>
                                <h6 className="mb-4 text-center text-gray">Very good service..and help when delivering. They had to wait a few minutes and they waited without</h6>
                                <h4 className="mb-0 text-center fw-800">Andrea Castaño</h4>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="review-card-pink text-center">
                                <img src="/image/circle-flower-3.png" alt="home-page" className="img-fluid position-relative flower-circle"/>
                                <h3 className="fw-800 text-center">Beautiful</h3>
                                <h6 className="mb-4 text-center text-gray">Very good service..and help when delivering. They had to wait a few minutes and they waited without</h6>
                                <h4 className="mb-0 text-center fw-800">Andrea Castaño</h4>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 text-center">
                            <button className="btn px-4 py-3 rounded-pill btn-shop text-center" style={{ width: '20%' }}>
                                Write a review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-only">
                <div className="background-box-star"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-2">
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                            <FontAwesomeIcon icon={faStar} className="mx-1" style={{ fontSize: '28px', marginTop: '3px', color: '#ffaa01' }} />
                        </div>
                        <div className="col-sm-12 text-center">
                            <h1>
                                <span className="text-pink fw-800 ms-1">(5-Star)</span> <span className="fw-800">Review on Google my Business</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-5">
                            <div className="review-card-pink text-center">
                                <img src="/image/circle-flowe-1.png" alt="home-page" className="img-fluid position-relative flower-circle"/>
                                <h3 className="fw-800 text-center">Beautiful</h3>
                                <h6 className="mb-4 text-center text-gray">Very good service..and help when delivering. They had to wait a few minutes and they waited without</h6>
                                <h4 className="mb-0 text-center fw-800">Andrea Castaño</h4>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="review-card-white text-center">
                                <img src="/image/circle-flowe-2.png" alt="home-page" className="img-fluid position-relative flower-circle"/>
                                <h3 className="fw-800 text-center">Beautiful</h3>
                                <h6 className="mb-4 text-center text-gray">Very good service..and help when delivering. They had to wait a few minutes and they waited without</h6>
                                <h4 className="mb-0 text-center fw-800">Andrea Castaño</h4>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="review-card-pink text-center">
                                <img src="/image/circle-flower-3.png" alt="home-page" className="img-fluid position-relative flower-circle"/>
                                <h3 className="fw-800 text-center">Beautiful</h3>
                                <h6 className="mb-4 text-center text-gray">Very good service..and help when delivering. They had to wait a few minutes and they waited without</h6>
                                <h4 className="mb-0 text-center fw-800">Andrea Castaño</h4>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 text-center">
                            <button className="btn px-4 py-3 rounded-pill btn-shop text-center" style={{ width: '100%' }}>
                                Write a review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;