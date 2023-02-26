import React from 'react'

function Footer() {
    return (
        <>
            {/* <!-- footer begin --> */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4 d-xl-flex d-lg-flex align-items-center">
                            <div className="logo">
                                <a href="index-2.html"><img src="assets/img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <div className="footer-menu">
                                <nav className="navbar navbar-expand-lg">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="index-2.html">About <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="event.html">Event</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="gallery.html">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="top-dj.html">Top DJ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="schedule.html">Schedule</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="blog.html">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="faq.html">Faq</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer end --> */}
        </>
    )
}

export default Footer