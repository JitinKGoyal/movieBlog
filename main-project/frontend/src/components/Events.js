import React from 'react'
import { Link } from 'react-router-dom'

function Events() {
    return (
        <>
            {/* <!-- breadcrump begin --> */}
            <div className="breadcrump">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="breadcrump-content">
                                <Link to='/'><span className="page-name">Home </span></Link>
                                <span className="icon"><i className="fas fa-chevron-right"></i></span>
                                <span className="page-name">Event</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

            {/* <!-- single event begin --> */}
            <div className="single-event">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="part-img">
                                <img src="assets/img/single-event.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="part-text">
                                <h3>Dj Party Song</h3>
                                <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam
                                    in posuere phasellus eget sem just the consequat gestass facilisis
                                    eleifend tempor metus. Phasellus vehicula justo egeteddiames
                                    posuere sollicitu tincidunt nulla. A versatil web designer. Phasellus vehicula the justo eg diam
                                    in posuere phasellus eget sem just the consequat gestass facilisis
                                    eleifend tempor metus.</p>
                                <div className="meta-info">
                                    <span className="eventor-name">Alison Burgass</span>
                                    <span className="location">Location: Hall 1, Golden Road, Sylhet.Vutan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- single event end --> */}

            {/* <!-- ticket price begin --> */}
            {/* <div className="ticket-price">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title text-center">
                                <h2>Event Tickets</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">49</span>
                                    <h3>Basic Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular
                                            Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable
                                            Seat</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee
                                            Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One
                                            Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span
                                            className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">59</span>
                                    <h3>Stardard Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular
                                            Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable
                                            Seat</span>
                                        </li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee
                                            Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One
                                            Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span
                                            className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">79</span>
                                    <h3>Premium Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular
                                            Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable
                                            Seat</span>
                                        </li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee
                                            Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One
                                            Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span
                                            className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">99</span>
                                    <h3>Business Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular
                                            Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable
                                            Seat</span>
                                        </li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee
                                            Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One
                                            Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span
                                            className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- ticket price end --> */}

            {/* <!-- testimonial begin --> */}
            {/* <div className="testimonial event-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title text-center">
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="testimonial-slider">
                                <div className="single-testimonial">
                                    <div className="row no-gutters">
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-12 col-12">
                                            <div className="part-img"></div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-sm-8 col-md-12 col-12">
                                            <div className="part-text">
                                                <div className="bio">
                                                    <span className="name">Alison Burgas</span>
                                                    <span className="position">CEO @google</span>
                                                </div>
                                                <div className="social">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                                </div>
                                                <div className="text">
                                                    <p>Phasellus vehicula the justo egdiam
                                                        posu phase eget sem just the
                                                        consequat gesta facilisis eleifend
                                                        tempor metus. Phasellus vehicula is
                                                        diames posuere sollicitu.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="row no-gutters">
                                        <div className="col-xl-4 col-lg-4 col-sm-4 col-md-12 col-12">
                                            <div className="part-img two"></div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-sm-8 col-md-12 col-12">
                                            <div className="part-text">
                                                <div className="bio">
                                                    <span className="name">Abu Ubaidah</span>
                                                    <span className="position">CEO @google</span>
                                                </div>
                                                <div className="social">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                                </div>
                                                <div className="text">
                                                    <p>Phasellus vehicula the justo egdiam
                                                        posu phase eget sem just the
                                                        consequat gesta facilisis eleifend
                                                        tempor metus. Phasellus vehicula is
                                                        diames posuere sollicitu.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- testimonial end --> */}
        </>
    )
}

export default Events