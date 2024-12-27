import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMap, faShoppingCart, faEllipsisV, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <nav className="navbar-top bg-white shadow-sm py-3" style={{ position: 'fixed', zIndex: '100', width: '100%' }}>
            <div className="main-content">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="col-4 align-items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-pink me-2" />
                        <span className="fw-bold">+1 (800) 312 - 2121</span>
                    </div>
                    <div className="col-4 text-center">
                        <h3 className="navbar-brand m-0">
                            <span className="fw-bold">MIA'S</span><br/><span className="fw-bold">FLORIST</span>
                        </h3>
                    </div>
                    <div className="col-4 text-end">
                        <FontAwesomeIcon icon={faMap} className="text-pink me-2" />
                        <span className="fw-bold me-3">172 14th Street, Office 503, NY</span>
                    </div>
                </div>
                <div className="container d-flex justify-content-center align-items-center mt-3">
                    <ul className="col-4 nav justify-content-start">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-muted ps-0">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-muted">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-muted">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-muted">Contact</Link>
                        </li>
                    </ul>
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search"/>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <button className="btn btn-light btn-car position-relative me-4">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-black" style={{ fontSize: '1.3rem' }} />
                            <span className="number-car badge rounded-pill ms-3" style={{ fontSize: '1rem' }}>
                                0
                            </span>
                        </button>
                        <FontAwesomeIcon icon={faEllipsisV} className="text-muted" style={{ fontSize: '2.2rem' }} />
                    </div>
                </div>
            </div>
             <div className="mobile-only">
                <div className="row">
                    <div className="col-12 text-center">
                        <FontAwesomeIcon icon={faPhone} className="text-pink me-2" />
                        <span className="fw-bold">+1 (800) 312 - 2121</span>
                    </div>
                    <div className="col-4">
                        <h3 className="navbar-brand m-0">
                            <span className="fw-bold">MIA'S</span><br/><span className="fw-bold">FLORIST</span>
                        </h3>
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" style={{ fontSize: '1.3rem' }} />
                    </div>
                    <div className="col-5 d-flex justify-content-end align-items-center">
                        <button className="btn btn-light btn-car position-relative me-4">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-black" style={{ fontSize: '1.3rem' }} />
                            <span className="number-car badge rounded-pill ms-3" style={{ fontSize: '1rem' }}>
                                1
                            </span>
                        </button>
                        <FontAwesomeIcon icon={faBars} className="text-muted" style={{ fontSize: '2.2rem' }} onClick={toggleMenu}/>
                    </div>
                </div>
                {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
                <div className={`offcanvas-menu ${menuOpen ? "open" : ""}`}>
                    <ul className="nav flex-column p-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-muted">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link text-muted">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-muted">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-muted">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;