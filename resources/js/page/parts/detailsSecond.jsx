import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => {
    return (
        <button
            className="custom-arrow prev-arrow"
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
            className="custom-arrow next-arrow"
            onClick={onClick}
            style={{ position: 'absolute', right: '-45px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }}
        >
            <FontAwesomeIcon icon={faChevronCircleRight} style={{ fontSize: '28px' }} />
        </button>
    );
};

const DetailsSecond = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
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
            <div className="text-center mb-5">
                <h1 className="top-title">
                    <span className="our-container">Our</span> <span className="categories-container fw-800">best datails</span>
                </h1>
            </div>
            <div>
                <Slider {...settings}>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-pink d-flex justify-content-center">
                                <span className="new-badge fw-800">20% off</span>
                                <img src="/image/flower-11.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Flower arrangement and teddy bear</h5>
                                <i className="card-price text-pink fw-800">$129,00</i>
                                <span className="text-muted ms-3" style={{ textDecoration: 'line-through' }}>$199,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-blue d-flex justify-content-center">
                                <span className="new-badge fw-800">60% off</span>
                                <img src="/image/flower-12.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Happy Birthday flower arrangement</h5>
                                <i className="card-price text-pink fw-800">$49,00</i>
                                <span className="text-muted ms-3" style={{ textDecoration: 'line-through' }}>$109,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-pink d-flex justify-content-center">
                                <span className="new-badge">60% off</span>
                                <img src="/image/flower-7.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Bouquet of Pink and White roses</h5>
                                <i className="card-price text-pink fw-800">$49,00</i>
                                <span className="text-muted ms-3" style={{ textDecoration: 'line-through' }}>$109,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-blue d-flex justify-content-center">
                                <span className="new-badge fw-800">10% off</span>
                                <img src="/image/flower-13.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Arrangement of yellow and pink roses</h5>
                                <i className="card-price text-pink fw-800">$99,00</i>
                                <span className="text-muted ms-3" style={{ textDecoration: 'line-through' }}>$109,00</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default DetailsSecond;