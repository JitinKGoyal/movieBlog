import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
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
                                <span className="page-name">Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

            {/* <!-- blog begin --> */}
            <div className="blog">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="add-space section-title text-center">
                                <h2>On The Blogs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="single-blog">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="part-img">
                                            {/* <img src="assets/img/blog-1.jpg" alt="" /> */}
                                            <img src="assets/img/9420.jpg" alt="" />

                                            {/* <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                                        <div className="part-text">
                                            <h3>“I'm sure anyone who likes a good crime, provided it is not the victim.”

</h3>
                                            {/* <h3>Web Design Principles and Best Prectics</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p>Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Rex Rifat</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span> */}
                                            <span className="poster"> ― Alfred Hitchcock
</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                            <div className="single-blog">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                                        <div className="part-text">
                                            <h3>“I write from experience, and then I add fiction.”</h3>
                                            {/* <h3>15 Free Productive Design Tools</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p>Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Abu Ubaidah</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span> */}
                                            <span className="poster">― Drue Grit</span>

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 order-xl-last order-lg-last order-first">
                                        <div className="part-img">
                                            {/* <img src="assets/img/blog-2.jpg" alt="" /> */}
                                            <img src="assets/img/21816308.jpg" alt="" />

                                            {/* <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                            <div className="single-blog">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="part-img">
                                            {/* <img src="assets/img/blog-3.jpg" alt="" /> */}
                                            <img src="assets/img/3359004.jpg" alt="" />
                                            {/* <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                                        <div className="part-text">
                                            <h3>“You are like a stage set director through which you arrange then play out life's scenes.”
</h3>
                                            {/* <h3>Getting Start With Sketch App</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p>Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Abir Khan</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span> */}
                                            <span className="poster">― Steven Redhead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                            <div className="single-blog">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                                        <div className="part-text">
                                            <h3>“Nature is a cinema.
God, the cinematographer.”
</h3>
                                            {/* <h3>15 Free Productive Design Tools</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p>Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Abu Ubaidah</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span> */}
                                            <span className="poster">― Michael Bassey Johnson</span>

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 order-xl-last order-lg-last order-first">
                                        <div className="part-img">
                                            {/* <img src="assets/img/blog-4.jpg" alt="" /> */}
                                            <img src="assets/img/7189272.jpg" alt="" />

                                            {/* <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                            <div className="single-blog">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="part-img">
                                            {/* <img src="assets/img/blog-5.jpg" alt="" /> */}
                                            <img src="assets/img/5099266.jpg" alt="" />

                                            {/* <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                                        <div className="part-text">
                                            <h3>“Formulaic thinking is the antithesis of art.”
</h3>
                                            {/* <h3>Getting Start With Sketch App</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p>Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Abir Khan</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span> */}
                                            <span className="poster">― James Morcan
</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- blog end --> */}

        </>
    )
}

export default Blog