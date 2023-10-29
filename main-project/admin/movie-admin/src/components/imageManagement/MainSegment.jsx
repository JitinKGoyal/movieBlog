import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { getMovies, updateMovie } from '../../networkManager/movies';
import { useState } from 'react';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc'

function MainSegment({ movie, setMovie, setImageQuery, imageBtn }) {

    const [movieQuery, setMovieQuery] = useState('')
    const [movies, setMovies] = useState([]);

    const mainSegmentImageDblClick = (index) => {
        movie.data.images.splice(index, 1)
        setMovie({ ...movie })
        toast.success('Removed successfully');
    }

    const onMovieQuerySubmit = (e) => {
        e.preventDefault();
        getMovies(movieQuery)
            .then(res => {
                let data = res.data;
                setMovies(data)
                setMovie({})
            })
            .catch(err => console.log(err))
    }

    const onImagesSubmit = (e) => {
        updateMovie(movie.id, movie.data)
            .then(res => {
                toast.success('Success')
            })
            .catch(err => {
                toast.success('Something went wrong')
            })
    }

    const handleMovieChoose = (movie) => {
        movie.data = JSON.parse(movie.data)
        setImageQuery(movie.title.replaceAll(' ', '-').replaceAll(':', ''),)
        setMovie(movie);
    }

    useEffect(() => {
        // if (movie?.title) {
        //     setMovies([])
        //     imageBtn.current.click()
        // }
    }, [movie])


    return (

        <>
            <Droppable droppableId={'movie'}>
                {(provided) => (
                    <div
                        className='w-100 border overflow-auto vh-100'
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className='p-3'>

                            <div>
                                <form className='d-flex'>
                                    <input className='form-control me-2 border-0 border-bottom' placeholder='Search' type="search" onChange={e => setMovieQuery(e.target.value)} />
                                    <button className='btn btn-dark' onClick={onMovieQuerySubmit} data-bs-toggle="modal">Search</button>
                                </form>
                            </div>

                            {movie.title && <div className='p-4 mt-4 shadow rounded_corner'>

                                <div className='d-flex justify-content-between '>

                                    <div className='d-flex align-items-center '>
                                        <h4 className='m-0 me-3'>
                                            {movie?.title}
                                        </h4>
                                        <a className='d-flex align-items-center text-decoration-none' href={`https://google.com/search?q=${movie.title}+movie+wallpaper`} target='_blank' rel="noreferrer">
                                            <FcGoogle fontSize={25} />
                                        </a>
                                    </div>

                                    <button className='btn btn-outline-info' onClick={onImagesSubmit}>Post</button>

                                </div>

                                <hr />

                                <div className='d-flex flex-wrap'>
                                    {movie?.data?.images?.map((src, i) => {
                                        return <div className='movie_img' key={i} onDoubleClick={() => mainSegmentImageDblClick(i)}>
                                            <img src={src} alt="" className='rounded_corner m-2 shadow' />
                                        </div>

                                    })}
                                </div>

                            </div>}

                            {movies.length > 0 &&
                                <div className='p-3'>
                                    <h3>Choose a movie</h3>
                                    <ol>
                                        {movies.map((m, i) => {
                                            return <li className='movie' key={i}>
                                                <button className='btn btn-sm m-1 btn-outline-dark' onClick={() => handleMovieChoose(m)}>
                                                    {m.title}
                                                </button>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            }

                        </div>
                        {provided.placeholder}
                    </div >
                )}
            </Droppable >


        </>
    );
}

export default MainSegment