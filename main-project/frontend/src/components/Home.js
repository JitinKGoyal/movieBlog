import React, { useEffect, useState } from 'react'
import { baseUrl } from '../config';
import MovieCard from './MovieCard';
import FilterResults from 'react-filter-search';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';


function Home() {
    const perPageMovies = 10;

    const [allMovies, setAllMovies] = useState([])
    const [movies, setMovies] = useState([])
    const [value, setValue] = useState("")
    const [cinema, setCinema] = useState("Hollywood")
    const [type, setType] = useState("Movie")
    const [totalCount, setTotalCount] = useState(0)

    const [hasMore, setHasMore] = useState(true);

    const breakPointObj = {
        default: 4,
        3000: 4,
        2000: 4,
        1200: 3,
        1000: 2,
        500: 1
    }

    const getMovies = () => {
        fetch(`${baseUrl}/movie/pagination/0/20`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.data)
            })
    }

    const getMoviesCount = () => {
        fetch(`${baseUrl}/movie/totalCount`)
            .then(res => res.json())
            .then(data => setTotalCount(data.data))
            .catch((err) => console.log(err))
    }

    const handleFilterChange = event => {
        const { value } = event.target;
        setValue(value)
    };

    // const handleFilter = () => {

    //     let arr = allMovies.filter(e => {
    //         return JSON.parse(e.data)?.type === type && JSON.parse(e.data)?.cinema === cinema
    //     })

    //     setMovies(arr)
    //     // let searched = arr.filter(e =>{
    //     //     return JSON.stringify(e).includes(value)
    //     // })

    //     // setMovies(searched);
    // }

    // useEffect(() => {
    //     handleFilter()
    // }, [allMovies, cinema, type])

    useEffect(() => {
        getMovies()
        getMoviesCount()
        document.title = "Dgoncky.com - 4k Dual Audio Movies, Ultra HD movies, 1080p Movies, 2160 Movies, 2160p Movies, 1080p 60FPS Movies, 4k HEVC Movies, 1080p 10Bit Movies, 1080p x265 Hevc, 4k Bluray Movies, WeB-DL Series, WeB-DL Movies, High Quality Audio Movies"
    }, [])

    const getContentType = () => {
        return [...new Set(allMovies.map(e => JSON.parse(e.data)?.type))]
    }

    const fetchData = () => {
        fetch(`${baseUrl}/movie/pagination/${movies.length}/${perPageMovies}`)
            .then(res => res.json())
            .then(data => {
                if (data.data.length === 0) {
                    setHasMore(false);
                }
                setMovies(movies.concat(data.data))
            })
    }

    return (
        <>
            {/* <!-- movie card begin --> */}
            <div className="ticket-price">
                <div className="container" >

                    <div className="filter_input d-flex justify-content-end">

                        {/* <input type="search" value={value} className="p-2 h5" onChange={handleFilterChange} /> */}

                        <div className='d-flex flex-column justify-content-center'>
                            <p className='m-0' style={{ fontSize: '10px', width: "fit-content" }}>Total</p>
                            <h4>{totalCount}</h4>
                        </div>
                        <div class="container ">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12">
                                    <div class="card p-2">
                                        <label htmlFor="movie_search">
                                            {/* <h3 class="heading text-center m-0 text-white">Hi! Find out your movies here?</h3> */}
                                            <div class="d-flex justify-content-center px-5">
                                                <div class="search shadow">
                                                    <input type="text" id='movie_search' class="search-input" placeholder="Search..." value={value} onChange={handleFilterChange} />
                                                    <a class="search-icon" style={{ cursor: "pointer" }} >
                                                        <i class="fa fa-search"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </label>
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
                                        {/* {getContentType().map((contentType, i) => {
                                            return <a key={i} className={`nav-link py-2 px-4 ${contentType === type && 'active'}`} id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                                                aria-controls="v-pills-home" aria-selected="true" onClick={() => setType(contentType)}>{contentType}</a>
                                        })} */}
                                        {/* <a className="nav-link py-2 px-4" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="false" onClick={() => setCategory("Web Series")}>Web-series</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="event-schedule py-3">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="nav d-flex justify-content-center nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {/* <a className="nav-link py-2 px-4 active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                                            aria-controls="v-pills-home" aria-selected="true" onClick={() => setCinema("Hollywood")}>Hollywood</a> */}
                                        {/* <a className="nav-link py-2 px-4" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="false" onClick={() => setCinema("Bollywood")}>Bollywood</a>
                                        <a className="nav-link py-2 px-4" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
                                            aria-controls="v-pills-messages" aria-selected="false" onClick={() => setCinema("southIndian")}>South</a> */}
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
                                <> */}
                        {movies.length !== 0 ?
                            <InfiniteScroll
                                dataLength={movies.length} //This is important field to render the next data
                                next={fetchData}
                                hasMore={hasMore}
                                loader={<h4>Loading...</h4>}

                            >
                                <Masonry className='d-flex w-100' breakpointCols={breakPointObj}>
                                    {movies.map(e => (
                                        <MovieCard key={e.id} {...e} />
                                    ))}
                                </Masonry>
                            </InfiniteScroll>

                            :
                            <div className='h1 p-5' style={{ marginBottom: "70vh" }}>
                                no results found with <span className='text-white'> {value} </span>
                            </div>}
                        {/* </>
                            )}
                        /> */}
                    </div>
                </div>
            </div>
            {/* <!-- movie card end --> */}






        </>
    )
}

export default Home