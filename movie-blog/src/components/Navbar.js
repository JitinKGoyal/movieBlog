import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            {/* <!-- header begin --> */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-xl-flex d-lg-flex align-items-center">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-6 d-xl-block d-lg-block d-flex align-items-center">
                                    <div className="logo">
                                        <Link to="/"><img src="assets/img/logo.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="d-xl-none d-lg-none d-block col-6">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="mainmenu">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/about">About <span className="sr-only">(current)</span></Link>
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
                                                <Link className="nav-link" to="/schedule">Schedule</Link>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/blog">Blog</Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" to="/faq">Faq</Link>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- header end --> */}
        </>
    )
}

export default Navbar