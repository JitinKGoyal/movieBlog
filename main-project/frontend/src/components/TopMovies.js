import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config';
import MovieCard from './MovieCard';

// function TopMovies() {
function TopMovies() {

    const [allMovies, setAllMovies] = useState([])
    const [movies, setMovies] = useState([])
    const [value, setValue] = useState("")
    const [cinema, setCinema] = useState("hollywood")
    const [category, setCategory] = useState("movie")

    const getMovies = () => {
        fetch(`${baseUrl}/movie`)
            .then(res => res.json())
            .then(data => setAllMovies(data))
    }

    const handleFilterChange = event => {
        const { value } = event.target;
        setValue(value)
    };

    useEffect(() => {
        getMovies()
    }, [])

    const handleFilter = () => {

        let arr = allMovies.filter(e => {
            return e.detail.category == category && e.detail.cinema == cinema
        })
        setMovies(arr);

    }

    useEffect(() => {
        handleFilter()
    }, [allMovies, cinema, category])


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
                                <span className="page-name">Top Movies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}
            {/* <!-- movie card begin --> */}
            <div className="ticket-price">
                <div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title text-center mb-0">
                                <h2> Top Movies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="filter_input d-flex justify-content-end">

                        {/* <input type="search" value={value} className="p-2 h5" onChange={handleFilterChange} /> */}

                        <div class="container ">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12">
                                    <div class="card p-2">
                                        {/* <h3 class="heading text-center m-0 text-white">Hi! Find out your movies here?</h3> */}
                                        <div class="d-flex justify-content-center px-5">
                                            <div class="search shadow">
                                                <input type="text" class="search-input" placeholder="Search..." name="" value={value} onChange={handleFilterChange} />
                                                <a class="search-icon">
                                                    <i class="fa fa-search"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex justify-content-between align-items-center'>

                        <div className="event-schedule py-3">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="nav d-flex justify-content-center nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link py-2 px-4 active " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                                            aria-controls="v-pills-home" aria-selected="true" onClick={() => setCategory("movie")}>Movie</a>
                                        <a className="nav-link py-2 px-4" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="false" onClick={() => setCategory("webSeries")}>Web-series</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="event-schedule py-3">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="nav d-flex justify-content-center nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link py-2 px-4 active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                                            aria-controls="v-pills-home" aria-selected="true" onClick={() => setCinema("hollywood")}>Hollywood</a>
                                        <a className="nav-link py-2 px-4" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="false" onClick={() => setCinema("bollywood")}>Bollywood</a>
                                        <a className="nav-link py-2 px-4" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
                                            aria-controls="v-pills-messages" aria-selected="false" onClick={() => setCinema("southIndian")}>South</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {/* <FilterResults
                            value={value}
                            data={movies}
                            renderResults={results => (
                                <>
                                    {results.length != 0 ? results.map(e => (
                                        <MovieCard {...e} />
                                    )) : <div className='h1 p-5'>0 result found with <span className='text-white'> {value} </span></div>}
                                </>
                            )}
                        /> */}

                        {/* {movies.map((e) => (
                            <MovieCard {...e} />
                        ))} */}

                    </div>
                </div>
            </div>
            {/* <!-- movie card end --> */}
            {/* <!-- team dj begin --> */}
            {/* <div className="team-dj top-dj-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="add-space section-title text-center">
                                <h2>Top Movies</h2>
                            </div>
                        </div>
                    </div> */}
            {/* <div className="row">
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
                    </div> */}
            {/* </div>
            </div> */}
            {/* <!-- team dj end --> */}

            {/* <!-- testimonial begin --> */}
            {/* <div className="testimonial">
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
            </div> */}
            {/* <!-- testimonial end --> */}

            {/* <!-- about begin --> */}
            {/* <div className="about">
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
            </div> */}
            {/* <!-- about end --> */}
        </>
    )
}

export default TopMovies