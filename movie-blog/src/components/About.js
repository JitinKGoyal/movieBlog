import React from 'react'
import { Link } from 'react-router-dom'

function About() {
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
                                <span className="page-name">About</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

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

            {/* <!-- counter begin --> */}
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-counter">
                                <span className="number">1854</span>
                                <span className="title">Project Finished</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-counter">
                                <span className="number">3254</span>
                                <span className="title">Line Of Coding</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-counter">
                                <span className="number">584</span>
                                <span className="title">Award Won</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-counter">
                                <span className="number">1731</span>
                                <span className="title">Satisfied Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- counter end --> */}

            {/* <!-- about venu begin --> */}
            <div className="about-venu">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 d-xl-block d-lg-block d-md-none">
                            <div className="part-img">
                                <img src="assets/img/about-venu.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="part-text">
                                <h3>About Venue</h3>
                                <p>Garcia versatil web designer. Phasellus vehicula the justo
                                    diam in posuere sollicit tincidunt nulla. Curabitur eleifend
                                    tempe gncelerisquest placerat velet phasellus eget sem
                                    just the consequat gestass facilisis eleifend tempor mets.</p>
                                <p>Phasellus vehicula justo egeted diames posuere sollicitu
                                    tincidunt nulla. Curaeatbitur eleifend tempeture.</p>
                                <p>Tincidunt nulla. Curaeatbitur eleifend tempeture.
                                    Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets
                                    enabled.</p>
                                <a href="#">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- about venu end --> */}

            {/* <!-- faq begin --> */}
            <div className="faq about-page">
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

            {/* <!-- subscribe newsletter begin --> */}
            {/* <div className="subscribe-newsletter about-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            <div className="add-space section-title text-center">
                                <h2>Subscribe Our Newslatter</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="form">
                                <form className="newsletter-form">
                                    <input className="newsletter-input" type="text" placeholder="Enter your email here" />
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- subscribe newsletter end --> */}


        </>
    )
}

export default About