import React, { useEffect, useRef, useState } from 'react'
import { baseUrl } from '../config';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function MainSearch() {

    const [queryResult, setQueryResult] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false)
    const dropdownContent = useRef()
    const navigate = useNavigate()

    const handleFilterChange = event => {
        const { value } = event.target;

        if (value) {
            setSearchLoading(true)
            fetch(`${baseUrl}/movie?query=${value}`)
                .then(res => res.json())
                .then(data => {
                    setQueryResult(data.data)
                })
                .catch(err => console.log(err))
                .finally(() => setSearchLoading(false))
        } else {
            setQueryResult([])
        }
    };

    const viewMovieDetail = (movie) => {
        sessionStorage.setItem("selectedMovie", JSON.stringify(movie));
        navigate("/movie-detail");
    }

    const handleClickOutside = (event) => {
        if (!dropdownContent.current.contains(event.target)) {
            setQueryResult([]);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div class="container ">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12">
                        <div class="card p-2">
                            <label htmlFor="">
                                {/* <h3 class="heading text-center m-0 text-white">Hi! Find out your movies here?</h3> */}
                                <div class="d-flex justify-content-center px-5 ">
                                    <div class="search shadow movie_search" ref={dropdownContent} >
                                        <input type="text" id='movie_search' class="search-input" placeholder="Search..." onFocus={handleFilterChange} onChange={handleFilterChange} />
                                        <button class="btn search-icon" >
                                            {searchLoading ?
                                                <Loader height={10} />
                                                :
                                                <i class="fa fa-search"></i>
                                            }
                                        </button>
                                        {queryResult.length > 0 && <div className='query_result'>
                                            <ul>
                                                {queryResult.map(movie => {
                                                    return <li onClick={() => viewMovieDetail(movie)}> {movie.title}</li>
                                                })}
                                            </ul>
                                        </div>}
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default MainSearch