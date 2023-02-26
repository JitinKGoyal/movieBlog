import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from '../config';
import MovieCard from './MovieCard';
import FilterResults from 'react-filter-search';


function Home() {

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
            {/* <!-- preloader begin --> */}
            {/* <div className="preloader">
                <div className="loader">
                    <hr />
                    <hr />
                </div>
            </div> */}
            {/* <!-- preloader end --> */}



            {/* <!-- banner begin --> */}
            <div className="banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner-content">
                                <h1>Dgocky</h1>
                                <h4>DJ Party & Night Club</h4>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="banner-bottom">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 d-xl-block d-lg-block d-md-none">
                                        <div className="part-img">
                                            <img src="assets/img/banner-bottom-img.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 d-xl-flex d-lg-flex d-md-block align-items-center">
                                        <div className="promo-video">
                                            <div className="part-icon">
                                                <a className="play-button venobox mfp-iframe" href="https://www.youtube.com/watch?v=GT6-H4BRyqQ"><i className="fas fa-play"></i></a>
                                            </div>
                                            <div className="part-text">
                                                <h3>promo videos</h3>
                                                <span className="intro">Watch our intro</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 d-xl-flex d-lg-flex d-md-flex align-items-center">
                                        <div className="banner-buttons">
                                            <a href="#">get ticket</a>
                                            <a href="#">explore more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <!-- banner end --> */}

            {/* <!-- countdown begin --> */}
            <div className="countdown">
                <div className="container">
                    <div className="row justify-content-xl-center justify-content-lg-center justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-lg-8 d-xl-flex d-lg-block align-items-center">
                            <div className="countdown-title">
                                <h2>“I'm the king of the world!” </h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-lg-8">
                            <div className="part-countdown">
                                <div className="timer w-100" data-date="29 April 2019 9:56:00 GMT+01:00">
                                    <div className="single-count w-100">
                                        <span className="title">-Titanic, 1997</span>
                                    </div>
                                    {/* <div className="single-count">
                                        <span className="hour"></span><span className="title">hours</span>
                                    </div>
                                    <div className="single-count">
                                        <span className="minute"></span><span className="title">minute</span>
                                    </div>
                                    <div className="single-count">
                                        <span className="second"></span><span className="title">second</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- countdown end --> */}



            {/* <!-- movie card begin --> */}
            <div className="ticket-price">
                <div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title text-center mb-0">
                                <h2>Movies</h2>
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

                        <FilterResults
                            value={value}
                            data={movies}
                            renderResults={results => (
                                <>
                                    {results.length != 0 ? results.map(e => (
                                        <MovieCard {...e} />
                                    )) : <div className='h1 p-5'>0 result found with <span className='text-white'> {value} </span></div>}
                                </>
                            )}
                        />

                        {/* {movies.map((e) => (
                            <MovieCard {...e} />
                        ))} */}

                    </div>
                </div>
            </div>
            {/* <!-- movie card end --> */}



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

            {/* <!-- event schedule begin --> */}
            <div className="event-schedule">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="nav d-flex justify-content-center nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
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
                </div>
            </div>
            {/* <!-- event schedule end --> */}

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
                        </div>
                        <div className="col-xl-4 col-lg-4 d-xl-block d-lg-block d-none">
                            <div className="single-img">
                                <img src="assets/img/gallery-4.jpg" alt="" />
                                <div className="hover-effect">
                                    <a href="#"><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- gallery end --> */}

            {/* <!-- team dj begin --> */}
            <div className="team-dj">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="add-space section-title text-center">
                                <h2>Top DJs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="dj-slider">
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
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- team dj end --> */}

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
                                    Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled.</p>
                                <a href="#">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- about venu end --> */}

            {/* <!-- ticket price begin --> */}
            <div className="ticket-price">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title text-center">
                                <h2>Event Tickets</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">49</span>
                                    <h3>Basic Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable Seat</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">59</span>
                                    <h3>Stardard Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable Seat</span>
                                        </li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">79</span>
                                    <h3>Premium Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable Seat</span>
                                        </li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-ticket-price">
                                <div className="part-feature">
                                    <span className="price">99</span>
                                    <h3>Business Pass</h3>
                                    <ul>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Regular Seating</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Confortable Seat</span>
                                        </li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Coffee Break</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">One Workshop</span></li>
                                        <li><span className="icon"><i className="fas fa-check"></i></span><span className="text">Certificate</span></li>
                                    </ul>
                                </div>
                                <div className="part-button">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ticket price end --> */}

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
                                            <img src="assets/img/blog-1.jpg" alt="" />
                                            <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                                        <div className="part-text">
                                            <h3>Web Design Principles and Best Prectics</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p className="last-line">Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Rex Rifat</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span>
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
                                            <h3>15 Free Productive Design Tools</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p>Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Abu Ubaidah</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 order-xl-last order-lg-last order-first">
                                        <div className="part-img">
                                            <img src="assets/img/blog-2.jpg" alt="" />
                                            <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div>
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
                                            <img src="assets/img/blog-3.jpg" alt="" />
                                            <div className="date-on-img">
                                                <span className="date">04 may</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                                        <div className="part-text">
                                            <h3>Getting Start With Sketch App</h3>
                                            <p>Garcia, a versatil web designer. Phasellus vehicula the justo eg
                                                diam in posuere phasellus eget sem just the consequat gestass
                                                facilisis eleifend tempor metus. Phasellus vehicula justo egeted
                                                diames posuere.</p>
                                            <p>Phasellus vehicula the justo eg
                                                diam in posuere.<a href="blog-details.html">Read More!</a></p>
                                            <span className="poster">Abir Khan</span>
                                            <span className="date">20.02.2019 Sunday, 10:30am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- blog end --> */}

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
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1"
                                                aria-expanded="true" aria-controls="collapse1">
                                                How can i get help?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading2">
                                        <h5>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse2"
                                                aria-expanded="false" aria-controls="collapse2">
                                                User Guide ; Getting started
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading3">
                                        <h5>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse3"
                                                aria-expanded="false" aria-controls="collapse3">
                                                Did you plan to open a branch in Dhaka?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
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
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                                How can i get help by agency?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent=".accordion2">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <h5>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                                How long your contract term?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent=".accordion2">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingsix">
                                        <h5>
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesix"
                                                aria-expanded="true" aria-controls="collapsesix">
                                                What about loan and bank advantage?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapsesix" className="collapse show" aria-labelledby="headingsix" data-parent=".accordion2">
                                        <div className="card-body">
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital need Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
                                            Digital Marketing Agency all foundational tool need inbound success. With module there no need to go another day.
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
            <div className="subscribe-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            <div className="section-title text-center">
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

export default Home