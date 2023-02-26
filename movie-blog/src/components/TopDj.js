import React from 'react'
import { Link } from 'react-router-dom'

function TopDj() {
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
                                <span className="page-name">Top DJ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

            {/* <!-- team dj begin --> */}
            <div className="team-dj top-dj-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="add-space section-title text-center">
                                <h2>Top DJs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-dj">
                                <div className="part-img">
                                    <img src="assets/img/dj-1.jpg" alt="" />
                                    <div className="hover-effect">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-dj">
                                <div className="part-img">
                                    <img src="assets/img/dj-2.jpg" alt="" />
                                    <div className="hover-effect">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-dj">
                                <div className="part-img">
                                    <img src="assets/img/dj-3.jpg" alt="" />
                                    <div className="hover-effect">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-dj">
                                <div className="part-img">
                                    <img src="assets/img/dj-4.jpg" alt="" />
                                    <div className="hover-effect">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-dj">
                                <div className="part-img">
                                    <img src="assets/img/dj-5.jpg" alt="" />
                                    <div className="hover-effect">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-dj">
                                <div className="part-img">
                                    <img src="assets/img/dj-6.jpg" alt="" />
                                    <div className="hover-effect">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- team dj end --> */}

            {/* <!-- testimonial begin --> */}
            <div className="testimonial">
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
            </div>
            {/* <!-- testimonial end --> */}

            {/* <!-- about begin --> */}
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="about-area">
                                <div className="row no-gutters">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="part-text">
                                            <h2>Hello There!</h2>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the
                                                justo eg diam in posuere sollicit tincidunt nulla. Curabitur
                                                eleifend tempe gncelerisquest placerat velet phasellus
                                                eget sem id just the consequat gestass facilisis eleifend
                                                tempor metus.Phasellus vehicula justo egeted diames
                                                posuere sollicitu tincidunt nulla.Curaeatbitur eleifend
                                                tempeture.</p>
                                            <a href="#">explore more</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 d-xl-block d-lg-block d-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- about end --> */}
        </>
    )
}

export default TopDj