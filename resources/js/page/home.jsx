import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faCircleLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Seller from './parts/seller';
import Schedule from './parts/schedule';
import Categories from './parts/categories';
import Details from './parts/details';
import SectionShop from './parts/sectionShop';
import DetailsSecond from './parts/detailsSecond';
import Review from './parts/review';

const Home = () => {
    return (
        <>
            <div className="main-content">  
                <div className="home-container position-relative">
                    
                    <div className="background-box-gray"></div>
                    <div className="background-box-pink"></div>

                    <div className="container my-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 z-index-3">
                                <h1 className="display-4 fw-bold ff-auto">Surprise your favorite person</h1>
                                <div className="mt-4 mb-3">
                                    <i className="text-pink fw-800 sub-text">New </i>
                                    <span className="text-gray sub-text">Rose arrangement with golden vase</span>
                                </div>
                                <h2 className="text-pink fw-800"><i class="text-price">$99</i><i className="sub-text text-sub-price">,00</i></h2>
                                <button className="btn btn-warning text-white px-4 py-2 rounded-pill btn-shop">
                                    Shop now
                                </button>
                            </div>
                            <div className="col-md-6 text-center position-relative">
                                <img src="/image/Grupo-5.png" alt="home-page" className="img-fluid position-relative z-index-3"/>
                                <div className="button-container position-absolute d-flex align-items-center justify-content-center" style={{ bottom: '-1%', right: '16%', width: '100px', height: '50px' }}>
                                    <div className="position-relative">
                                        <button className="btn btn-pink mx-1">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <FontAwesomeIcon icon={faCircleLeft} style={{ fontSize: '28px', marginTop: '3px' }} />
                                                </div>
                                                <div className="col-md-6">
                                                    <FontAwesomeIcon icon={faCircleRight} style={{ fontSize: '28px', marginTop: '3px' }} />
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dots"></div>
                                        <div className="dots-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="circle-center"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-only">
                <div className="container mt-5 mb-3">
                    <div className="row align-items-center text-start">
                        <div className="col-sm-12 z-index-3">
                            <h1 className="display-4 fw-bold ff-auto" style={{ fontSize: '2.8rem' }}>Surprise your favorite person</h1>
                            <div className="mt-4 mb-3">
                                <i className="text-pink fw-800 sub-text">New </i>
                                <span className="text-gray sub-text">Rose arrangement with golden vase</span>
                            </div>
                            <h2 className="text-pink fw-800"><i class="text-price">$99</i><i className="sub-text text-sub-price">,00</i></h2>
                            <button className="btn btn-warning text-white px-4 py-3 rounded-pill btn-shop" style={{ width: '60%' }}>
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home-container position-relative">
                    <div className="background-box-gray"></div>
                    <div className="background-box-pink"></div>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center position-relative">
                            <img src="/image/Grupo-5.png" alt="home-page" className="img-fluid position-relative z-index-3"/>
                            <div className="button-container position-absolute d-flex align-items-center justify-content-center" style={{ bottom: '-8%', right: '13%', width: '100px', height: '50px' }}>
                                <div className="position-relative">
                                    <button className="btn btn-pink mx-1">
                                        <div className="row">
                                            <div className="col-6">
                                                <FontAwesomeIcon icon={faCircleLeft} style={{ fontSize: '28px', marginTop: '3px' }} />
                                            </div>
                                            <div className="col-6">
                                                <FontAwesomeIcon icon={faCircleRight} style={{ fontSize: '28px', marginTop: '3px' }} />
                                            </div>
                                        </div>
                                    </button>
                                    <div className="dots"></div>
                                    <div className="dots-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-7">
                <div className="row">
                    <div className="col-md-6 my-3">
                        <img src="/image/Grupo-8.png" alt="home-page" className="w-100"/>
                    </div>
                    <div className="col-md-6 my-3">
                        <img src="/image/Grupo-9.png" alt="home-page" className="w-100"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <Seller />
            </div>
            <div className="info-section my-7">
                <Schedule />
            </div>
            <div className="category-container position-relative">
                <Categories />
            </div>
            <div className="container my-7">
                <Details />
            </div>
            <div className="custom-background">
                <SectionShop />
            </div>
            <div className="container mt-5">
                <DetailsSecond />
            </div>
            <div className="star-container position-relative my-7">
                <Review />
            </div>
            <div className="container mt-5">
                <div className="text-center mb-5">
                    <h1 className="top-title">
                        <span className="our-container-2">Our</span> <span className="payment-container fw-800">payment methods</span>
                    </h1>
                </div>
                <div className="d-flex justify-content-between align-items-center image-row">
                    <img src="/image/visa.png" alt="home-page" className="payment-logo"/>
                    <img src="/image/american-express.png" alt="home-page" className="payment-logo"/>
                    <img src="/image/paypal.png" alt="home-page" className="payment-logo"/>
                    <img src="/image/discover.png" alt="home-page" className="payment-logo"/>
                    <img src="/image/diners-club.png" alt="home-page" className="payment-logo"/>
                    <img src="/image/jcb.png" alt="home-page" className="payment-logo"/>
                    <img src="/image/western-union.png" alt="home-page" className="payment-logo"/>
                </div>
            </div>
        </>
    );
};

export default Home;