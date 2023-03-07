import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { decodeBinaryImage } from '../utils/decodeBinaryCode';

function MovieDetails() {
    const [image, setImage] = useState()
    const movie = JSON?.parse(sessionStorage?.getItem("selectedMovie"));

    useEffect(() => {
        setImage(decodeBinaryImage(movie.image.data))

        // Create a new meta element
        var meta = document.createElement('meta');

        // Set the attributes of the meta element
        meta.setAttribute('name', movie.title);
        meta.setAttribute('content', movie.title);
        meta.setAttribute('og:description', movie.title);
        meta.setAttribute('og:type', movie.title);

        // Get the head element of the document
        var head = document.getElementsByTagName('head')[0];

        // Add the meta element to the head
        head.appendChild(meta);
        document.title = movie.title

    }, [])

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
                                <span className="page-name">Movie-Detail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrump end --> */}

            {/* <!-- single event begin --> */}
            <div className="single-event">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="part-img">
                                <img src={image} alt={movie.title} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block">
                            <div className="part-text">
                                <h3 className='text-capitalize mb-3'>{movie.title}</h3>
                                <ul className='segoe_font'>
                                    <li>
                                        <div className='d-flex align-items-center'>
                                            <img src="assets/img/imdb.png" height="50" alt="imdb" />
                                            <p className='ml-2 mb-0 h5'>{JSON.parse(movie.detail).imdb}/10</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='d-flex align-items-center'>
                                            <img src="assets/img/tommato.png" height="30" alt="imdb" />
                                            <p className='ml-2 mb-0 h5'>{JSON.parse(movie.detail).tommato}/10</p>
                                        </div>
                                    </li>
                                    <li className='mt-3'>
                                        <p className='h6 mb-0'> <b> Running time: </b> {JSON.parse(movie.detail).runningTime}</p>
                                    </li>
                                    <li>
                                        <p className='h6 mb-0 text-capitalize'> <b> Genre: </b> {JSON.parse(movie.detail).genre}</p>
                                    </li>
                                    <li>
                                        <p className='h6'> <b> Release date: </b> {JSON.parse(movie.detail).releaseDate} <span className='text-secondary'> (yyyy-MM-dd) </span></p>
                                    </li>
                                    {/* <li>
                                                <p className='h6'> <b> data: </b> { <div dangerouslySetInnerHTML={{ __html: description }}></div>}</p>
                                            </li> */}

                                </ul>
                                <div className="meta-info mt-4">
                                    <span className="eventor-name">Director</span>
                                    <span className="location text-capitalize">{JSON.parse(movie.detail).director}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 p-5 rounded mv_details" style={{ background: "#08121d" }}>
                    <div className="row">
                        <div className='col-sm-12'>
                            <div className='part-text'>

                                <h3 className='text-capitalize'>{movie.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: movie.description }} />
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            {/* <!-- single event end --> */}




        </>
    )
}

export default MovieDetails