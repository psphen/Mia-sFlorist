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

const Seller = () => {
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
                    <span className="top-container">Top</span> <span className="sellers-container fw-800">sellers</span>
                </h1>
            </div>
            <div>
                <Slider {...settings}>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-pink text-center d-flex justify-content-center">
                                <i className="new-badge fw-800">New</i>
                                <img src="/image/Grupo9122.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h6 className="card-title">Floral arrangement Roses in Lux</h6>
                                <i className="card-price text-pink fw-800">$99,00</i>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-blue text-center d-flex justify-content-center">
                                <img src="/image/Grupo9123.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h6 className="card-title">Floral arrangement of the Day Roses in Black</h6>
                                <i className="card-price text-pink fw-800">$89,00</i>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-pink text-center d-flex justify-content-center">
                                <i className="new-badge fw-800">60% off</i>
                                <img src="/image/flower-7.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h6 className="card-title">Floral bouquet of Pink and White roses</h6>
                                <i className="card-price text-pink fw-800">$49,00</i>
                                <span className="text-muted ms-3" style={{ textDecoration: 'line-through' }}>$109,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="card product-card h-100">
                            <div className="card-img-wrapper-blue text-center d-flex justify-content-center">
                                <img src="/image/Grupo9124.png" alt="home-page" className="img-fluid position-relative mt-3" style={{ height: '224px' }}/>
                            </div>
                            <div className="card-body text-center">
                                <h6 className="card-title">Floral arrangement of Roses of the Day in a Golden</h6>
                                <i className="card-price text-pink fw-800">$99,00</i>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Seller;