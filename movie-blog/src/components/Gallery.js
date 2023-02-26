import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
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
                                <span className="page-name">Gallery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

            {/* <!-- gallery begin --> */}
            <div className="gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="add-space section-title text-center">
                                <h2>Photo Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-img">
                                <img src="assets/img/gallery-1.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="single-img">
                                <img src="assets/img/gallery-5.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-img">
                                <img src="assets/img/gallery-2.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="single-img">
                                <img src="assets/img/gallery-3.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="single-img">
                                <img src="assets/img/gallery-6.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 d-xl-block d-lg-block d-none">
                            <div className="single-img">
                                <img src="assets/img/gallery-4.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="single-img">
                                <img src="assets/img/gallery-7.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- gallery end --> */}
        </>
    )
}

export default Gallery