import React from 'react'
import { Link } from 'react-router-dom'

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
                                            <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" to="/events">Event</Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/gallery">Gallery</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/top-movies">Top Movies</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" href="schedule.html">Schedule</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/blog">Blog</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" href="faq.html">Faq</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
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