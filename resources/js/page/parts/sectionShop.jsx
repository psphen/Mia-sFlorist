import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => {
    return (
        <button
            className="custom-arrow-category prev-arrow"
            onClick={onClick}
            style={{ position: 'absolute', left: '-45px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }}
        >
            <FontAwesomeIcon icon={faChevronCircleLeft} style={{ fontSize: '28px' }} />
        </button>
    );
};
const CustomNextArrow = ({ onClick }) => {
    return (
        <button
            className="custom-arrow-category next-arrow"
            onClick={onClick}
            style={{ position: 'absolute', right: '-45px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }}
        >
            <FontAwesomeIcon icon={faChevronCircleRight} style={{ fontSize: '28px' }} />
        </button>
    );
};

const SectionShop = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start z-index-3">
                        <div className="mbm-5">
                            <h1 className="fw-bold text-warning fw-800 text-start text-happy" style={{ fontSize: '5rem', color: '#ffaa01' }}><i>Happy</i></h1>
                            <h1 className="fw-bold text-warning fw-800 text-start text-thank" style={{ fontSize: '5rem', color: '#ffaa01' }}><i>Thanksgiving</i></h1>
                        </div>
                        <h5 className="text-gray">See the best decorations for this celebration</h5>
                        <div className="text-start">
                            <button className="btn px-4 py-3 rounded-pill btn-shop btn" style={{ width: '40%' }}>Shop now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Slider {...settings}>
                            <div className="p-3">
                                <div className="card product-card h-100 mx-3">
                                    <div className="card-img-wrapper-pink d-flex justify-content-center">
                                        <span className="new-badge fw-800">20% off</span>
                                        <img src="/image/flower-9.png" alt="home-page" className="img-fluid position-relative mt-3 img-happy"/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Thanksgiving rose decoration</h6>
                                        <i className="card-price text-pink fw-800">$89,00</i>
                                        <span className="text-muted ms-3" style={{ textDecoration: 'line-through' }}>$109,00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="card product-card h-100 mx-3">
                                    <div className="card-img-wrapper-pink d-flex justify-content-center">
                                        <span className="new-badge fw-800">60% off</span>
                                        <img src="/image/flower-10.png" alt="home-page" className="img-fluid position-relative mt-3 img-happy"/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Thanksgiving Pumpkin Decoration</h6>
                                        <i className="card-price text-pink fw-800">$49,00</i>
                                        <span className="text-muted ms-3" style={{ textDecoration: 'line-through' }}>$109,00</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionShop;