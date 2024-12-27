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

const Categories = () => {
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
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <>
            <div className="background-box-category"></div>
            <div className="container">
                <div className="text-center my-4">
                    <h1 className="top-title">
                        <span className="our-container">Our</span> <span className="categories-container fw-800">categories</span>
                    </h1>
                </div>
                <div>
                    <Slider {...settings}>
                        <div className="p-3">
                            <div className="text-center">
                                <img src="/image/rosas-3.png" alt="home-page" className="img-fluid position-relative mt-3"/>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="text-center">
                                <img src="/image/categorie-3.png" alt="home-page" className="img-fluid position-relative mt-3"/>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="text-center">
                                <img src="/image/rosas-4.png" alt="home-page" className="img-fluid position-relative mt-3"/>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="text-center">
                                <img src="/image/rosas-2.png" alt="home-page" className="img-fluid position-relative mt-3"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Categories;