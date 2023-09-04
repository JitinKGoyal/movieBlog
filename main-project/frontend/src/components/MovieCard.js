import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config';
import { decodeBinaryImage } from '../utils/decodeBinaryCode';

function MovieCard(e) {

    const [image, setImage] = useState()
    const [imageLoader, setImageLoader] = useState(true)

    const navigate = useNavigate();

    const findOutMore = (movie) => {
        sessionStorage.setItem("selectedMovie", JSON.stringify(movie));
        navigate("/movie-detail");
    }

    const getImage = () => {

        fetch(`${baseUrl}/movie/image/${e.id}`)
            .then(res => res.json())
            .then(data => {
                if (data[0].image.data) {
                    setImage(decodeBinaryImage(data[0]?.image?.data))
                    setImageLoader(false)
                }
            }).catch(err => {
                console.log('error in getting image for movie' + e.id, err)
                setImage('https://i.pinimg.com/originals/d1/e3/f9/d1e3f96c4d6fed8cd48ef9693da53bda.jpg')
                setImageLoader(false)
            })
    }

    useEffect(() => {
        getImage();
    }, [])


    return (
        <>
            <div className='my-3 mx-2'>
                <div className="single-ticket-price pt-3 pr-3 pl-3 ">

                    {!imageLoader ? <img src={image} alt="" className='rounded' /> : "loading..."}

                    <div className="part-feature">
                        <div className='d-flex align-items-center'>

                            <img src="assets/img/icons8-movie-projector-64.png" height="30" alt="movie icon" />
                            <span className="price text-capitalize" style={{ fontSize: "30px" }}>{e.title}</span>
                        </div>

                        <ul className='segoe_font'>
                            <div className='row align-items-center'>

                                <li className='col-md-6 mb-0'>
                                    <div className='d-flex align-items-center'>
                                        <img src="assets/img/imdb.png" height="40" alt="imdb" />
                                        <p className='ml-2 mb-0 h6'>{JSON.parse(e.data).imdbRating}/10</p>
                                    </div>
                                </li>
                                <li className='col-md-6'>
                                    <div className='d-flex align-items-center'>
                                        <img src="assets/img/tommato.png" height="20" alt="imdb" />
                                        <p className='ml-2 mb-0 h6'>{JSON.parse(e.data).rottenTomatoRating}/100</p>
                                    </div>
                                </li>
                            </div>
                            <li className='mt-3'>
                                <p className='h6'> <b> Running time: </b> {JSON.parse(e.data).runningTime}</p>
                            </li>
                            <li>
                                <p className='h6'> <b> Genre: </b> {JSON.parse(e.data).genre}</p>
                            </li>
                            <li>
                                <p className='h6'> <b> Release date: </b> {JSON.parse(e.data).releaseDate}</p>
                            </li>

                        </ul>

                    </div>
                    <div className="part-button">
                        <a href="/movie-detail" onClick={() => findOutMore(e)}>Find out more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard