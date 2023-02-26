import React from 'react'
import { Link } from 'react-router-dom'

function Schedule() {
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
                                <span className="page-name">Schedule</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

            {/* <!-- event schedule begin --> */}
            <div className="event-schedule">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title text-center">
                                <h2>Event Schedules</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                                    aria-controls="v-pills-home" aria-selected="true">Monday<span className="month-count">14 Feburary</span></a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                                    aria-controls="v-pills-profile" aria-selected="false">Tuesday<span className="month-count">15 Feburary</span></a>
                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
                                    aria-controls="v-pills-messages" aria-selected="false">Wednesday<span className="month-count">16 Feburary</span></a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
                                    aria-controls="v-pills-settings" aria-selected="false">Thursday<span className="month-count">17 Feburary</span></a>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-1.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Web Design Principles and Best Prectics</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>

                                            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-2.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>15 Free Productive Design Tools</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-3.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Getting Start With Sketch App</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div id="accordion2">
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false"
                                                aria-controls="collapse4" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-1.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Web Design Principles and Best Prectics</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>

                                            <div id="collapse4" className="collapse" data-parent="#accordion2">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" data-toggle="collapse" data-target="#collapse5" aria-expanded="true"
                                                aria-controls="collapse5" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-2.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>15 Free Productive Design Tools</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapse5" className="collapse show" data-parent="#accordion2">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapse6" aria-expanded="false"
                                                aria-controls="collapse6" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-3.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Getting Start With Sketch App</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapse6" className="collapse" data-parent="#accordion2">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div id="accordion3">
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapse7" aria-expanded="false"
                                                aria-controls="collapse7" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-1.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Web Design Principles and Best Prectics</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>

                                            <div id="collapse7" className="collapse" data-parent="#accordion3">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapse8" aria-expanded="false"
                                                aria-controls="collapse8" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-2.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>15 Free Productive Design Tools</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapse8" className="collapse" data-parent="#accordion3">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" data-toggle="collapse" data-target="#collapse9" aria-expanded="true"
                                                aria-controls="collapse9" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-3.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Getting Start With Sketch App</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapse9" className="collapse show" data-parent="#accordion3">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

                                    <div id="accordion4">
                                        <div className="card">
                                            <div className="card-header" data-toggle="collapse" data-target="#collapse10" aria-expanded="true"
                                                aria-controls="collapse10" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-1.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Web Design Principles and Best Prectics</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>

                                            <div id="collapse10" className="collapse show" data-parent="#accordion4">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapse11" aria-expanded="false"
                                                aria-controls="collapse11" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-2.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>15 Free Productive Design Tools</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapse11" className="collapse" data-parent="#accordion4">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false"
                                                aria-controls="collapse12" role="button">
                                                <div className="part-img">
                                                    <img src="assets/img/gallery-3.jpg" alt="" />
                                                </div>
                                                <div className="part-text">
                                                    <h3>Getting Start With Sketch App</h3>
                                                    <span className="time"><i className="fas fa-clock"></i> 10am - 12:30pm</span> <span className="location"><i className="fas fa-globe"></i> Location: Hall 1, Golden Road, Sylhet.BD</span>
                                                </div>
                                            </div>
                                            <div id="collapse12" className="collapse" data-parent="#accordion4">
                                                <div className="card-body">
                                                    <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere
                                                        phasellus eget sem just the consequat gestass facilisis eleifend tempor metus.
                                                        Phasellus vehicula justo egeted diames posuere sollicitu tincidunt nulla.</p>
                                                    <span className="name">Alison Burgass</span>
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
            {/* <!-- event schedule end --> */}

            {/* <!-- countdown begin --> */}
            <div className="countdown event-page">
                <div className="container">
                    <div className="row justify-content-xl-center justify-content-lg-center justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-lg-8 d-xl-flex d-lg-block align-items-center">
                            <div className="countdown-title">
                                <h2>Event Will Start In</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-lg-8">
                            <div className="part-countdown">
                                <div className="timer" data-date="29 April 2019 9:56:00 GMT+01:00">
                                    <div className="single-count">
                                        <span className="day"></span><span className="title">days</span>
                                    </div>
                                    <div className="single-count">
                                        <span className="hour"></span><span className="title">hours</span>
                                    </div>
                                    <div className="single-count">
                                        <span className="minute"></span><span className="title">minute</span>
                                    </div>
                                    <div className="single-count">
                                        <span className="second"></span><span className="title">second</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- countdown end --> */}

            {/* <!-- subscribe newsletter begin --> */}
            <div className="subscribe-newsletter">
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
            </div>
            {/* <!-- subscribe newsletter end --> */}

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

export default Schedule