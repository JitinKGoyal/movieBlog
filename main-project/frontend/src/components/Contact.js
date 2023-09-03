import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
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
                                <span className="page-name">Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

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

            <div className="direct-contact d-none">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="add-space section-title text-center">
                                <h2>Direct Contact Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="address-area">
                                <ul>
                                    <li><i className="fas fa-id-card"></i> 4653 Angus Road, New York</li>
                                    <li><i className="fas fa-phone"></i> 567-987-1234</li>
                                    <li><i className="fas fa-envelope"></i> Yourmail95h@demo.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact