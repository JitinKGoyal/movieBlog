import React from 'react'
import { Link } from 'react-router-dom'

function Faq() {
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
                                <span className="page-name">Faq</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

            {/* <!-- faq begin --> */}
            <div className="faq">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title text-center">
                                <h2>FAQ</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="heading1">
                                        <h5>
                                            <button className="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                How can i get help?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapse1" className="collapse show" aria-labelledby="heading1"
                                        data-parent="#accordionExample">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module
                                            there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading2">
                                        <h5>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                User Guide ; Getting started
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module
                                            there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading3">
                                        <h5>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                Did you plan to open a branch in Dhaka?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module
                                            there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="accordion2">
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h5>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How can i get help by agency?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent=".accordion2">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module
                                            there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <h5>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                How long your contract term?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent=".accordion2">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module
                                            there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingsix">
                                        <h5>
                                            <button className="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
                                                What about loan and bank advantage?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapsesix" className="collapse show" aria-labelledby="headingsix"
                                        data-parent=".accordion2">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module
                                            there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there
                                            no need to go another day.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- faq end --> */}

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

            {/* <!-- contact begin --> */}
            <div className="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            <div className="add-space section-title text-center">
                                <h2>Drop A Message</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="contact-form">
                                <form>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <input type="text" placeholder="Enter your name" />
                                            <span></span>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <input type="email" placeholder="Enter your email" />
                                            <span></span>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <input type="text" placeholder="Enter your subject" />
                                            <span></span>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <textarea placeholder="Write a message"></textarea>
                                            <span className="textarea"></span>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <button>Send Us Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- contact end --> */}
        </>
    )
}

export default Faq