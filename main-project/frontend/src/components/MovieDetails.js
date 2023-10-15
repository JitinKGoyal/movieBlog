import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config';
import { decodeBinaryImage } from '../utils/decodeBinaryCode';
import { capitalize } from './../utils/capitaliza';
import { chooseColor } from '../utils/keyColors';

function MovieDetails() {
    const [image, setImage] = useState()
    const [imageLoader, setImageLoader] = useState(true)

    const movie = JSON?.parse(sessionStorage?.getItem("selectedMovie"));
    const movieData = JSON?.parse(movie?.data);

    const [showData, setShowData] = useState({})

    const getImage = () => {
        fetch(`${baseUrl}/movie/image/${movie.id}`)
            .then(res => res.json())
            .then(data => {
                if (data[0].image.data) {
                    setImage(decodeBinaryImage(data[0]?.image?.data))
                    setImageLoader(false)
                }
            }).catch(err => {
                console.log('error in getting image for movie Id:' + movie.id, err)
                setImage('https://i.pinimg.com/originals/d1/e3/f9/d1e3f96c4d6fed8cd48ef9693da53bda.jpg')
                setImageLoader(false)
            })
    }

    useEffect(() => {
        getImage()
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

        setShowData(movieData)

    }, [])

    const handleHeadingClick = (key) => {
        setShowData({ [key]: movieData[key] })
    }

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
                            <div className="part-img movie_detail_img">
                                {!imageLoader ? <img src={image} alt={movie.title} className='rounded' /> : <p className='text-center'>Loading...</p>}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block">
                            <div className="part-text">
                                <h3 className='text-capitalize mb-3'>{movie.title}</h3>
                                <ul className='segoe_font'>
                                    <li>
                                        <div className='d-flex align-items-center'>
                                            <img src="assets/img/imdb.png" height="50" alt="imdb" />
                                            <p className='ml-2 mb-0 h5'>{JSON.parse(movie.data).imdbRating}/10</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='d-flex align-items-center'>
                                            <img src="assets/img/tommato.png" height="30" alt="imdb" />
                                            <p className='ml-2 mb-0 h5'>{JSON.parse(movie.data).rottenTomatoRating}/100</p>
                                        </div>
                                    </li>
                                    <li className='mt-3'>
                                        {/* <div className='key shadow' style={{ background: chooseColor() }} >{capitalize(key)} </div> */}

                                        <p className='h6 mb-0'> <span className='key shadow mr-3' style={{ background: chooseColor() }}> Running time </span> {JSON.parse(movie.data).runningTime}</p>
                                    </li>
                                    <li>
                                        <p className='h6 mb-0 text-capitalize'> <span className='key shadow mr-3' style={{ background: chooseColor() }}> Genre </span> {JSON.parse(movie.data).genre}</p>
                                    </li>
                                    <li>
                                        <p className='h6'> <span className='key shadow mr-3' style={{ background: chooseColor() }}  > Release date </span> {JSON.parse(movie.data).releaseDate}</p>
                                    </li>
                                    {/* <li>
                                                <p className='h6'> <b> data: </b> { <div dangerouslySetInnerHTML={{ __html: description }}></div>}</p>
                                            </li> */}

                                </ul>
                                <div className="meta-info mt-4">
                                    <span className="eventor-name">Director</span>
                                    <span className="location text-capitalize">{JSON.parse(movie.data).director}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className='row'>


                        <div className='col-md-2 mt-5'>
                            {Object.entries(movieData).map(([key, value], i) => {
                                return <div className='key shadow mt-1' style={{ background: chooseColor() }} onClick={() => handleHeadingClick(key)}>{capitalize(key)} </div>
                            })}
                        </div>

                        <div className='col-md-10'>

                            <div className="container p-5 ounded mv_details" style={{ background: "#08121d" }}>
                                <div className="row">


                                    <div className='col-sm-12'>
                                        <div className='part-text'>

                                            <h3 className='text-capitalize'>{movie.title}</h3>
                                            {/* <div dangerouslySetInnerHTML={{ __html: movie.description }} /> */}

                                            <div className='row'>

                                                {Object.entries(showData).map(([key, value], i) => {
                                                    return key !== 'title' && (
                                                        <div key={i} className='col-md-6 p-2'>
                                                            <div className='movie_detail_prt p-3'>
                                                                <div className='key shadow' style={{ background: chooseColor() }} >{capitalize(key)} </div>
                                                                <div className='value'>
                                                                    {Array.isArray(value) ? value.map((e, index) => {
                                                                        return <span key={index} className='btn btn-sm btn-outline-light m-1'>{e}</span>
                                                                    }) :
                                                                        typeof value === "string" ? value : JSON.stringify(value)
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
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