import React from 'react';

const Schedule = () => {
    return (
        <>
            <div className="container main-content">
                <div className="d-flex">
                    <div className="info-card">
                        <div className="info-image">
                            <img src="/image/7125203.png" alt="Map Icon" className="img-fluid" style={{ width: '35rem' }}/>
                        </div>
                        <div className="info-text">
                            <h4>Flower delivery to:</h4>
                            <p>East Hartford, Hartford, Manchester, Glastonbury, Bolton, Willimantic, West</p>
                            <a href="#" className="info-link">Track your order.</a>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-image">
                            <img src="/image/activo-2.png" alt="Schedule Icon" className="img-fluid" style={{ width: '20rem' }}/>
                        </div>
                        <div className="info-text">
                            <h4>Our schedule:</h4>
                            <p>
                                From <strong className="fw-800">09:00 am</strong> to <strong className="fw-800">04:00 pm</strong><br/>
                                Monday to Friday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-only">
                <div className="row">
                    <div className="col-12 text-center mb-2">
                        <div className="d-flex align-items-center">
                            <div className="info-image">
                                <img src="/image/7125203.png" alt="Map Icon" className="img-fluid" style={{ width: '26rem' }}/>
                            </div>
                            <div className="info-text text-start">
                                <h4>Flower delivery to:</h4>
                                <p>East Hartford, Hartford, Manchester, Glastonbury, Bolton, Willimantic, West</p>
                                <a href="#" className="info-link">Track your order.</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-2">
                        <div className="d-flex align-items-center">
                            <div className="info-image">
                                <img src="/image/activo-2.png" alt="Schedule Icon" className="img-fluid" style={{ width: '10rem' }}/>
                            </div>
                            <div className="info-text text-start">
                                <h4>Our schedule:</h4>
                                <p>
                                    From <strong className="fw-800">09:00 am</strong> to <strong className="fw-800">04:00 pm</strong><br/>
                                    Monday to Friday
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Schedule;