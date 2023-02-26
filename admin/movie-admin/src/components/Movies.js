
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteForever, Edit } from '@mui/icons-material';
import { baseUrl } from '../config';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


function Movies() {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    const columns = [
        {
            field: 'serial',
            headerName: "S. no.",
            width: "70"
        },
        {
            field: 'title',
            headerName: 'Title',
            // width: "100px"
        },
        {
            field: 'description',
            headerName: 'Content',
        },
        {
            field: "imdb",
            headerName: 'Imdb',
            type: 'number',
            renderCell: (row) => {
                return <>
                    <span>{row.row.detail.imdb}</span>
                </>
            }
        },
        {
            field: "tommato",
            headerName: 'Tommato',
            type: 'number',
            renderCell: (row) => {
                return <>
                    <span>{row.row.detail.tommato}</span>
                </>
            }
        },
        {
            field: 'runningTime',
            headerName: 'Running Time',
            width: "150",
            renderCell: (row) => {
                return <>
                    <span>{row.row.detail.runningTime}</span>
                </>
            }
        },
        {
            field: 'genre',
            headerName: 'Genre',
            renderCell: (row) => {
                return <>
                    <span>{row.row.detail.genre}</span>
                </>
            }
        },
        {
            field: 'tag',
            headerName: 'Tag',
            renderCell: (row) => {
                return <>
                    <span>{row.row.detail?.tag}</span>
                </>
            }
        },
        {
            field: 'date',
            headerName: 'Creation date',
            width: "200"
        },
        {
            field: 'Action',
            renderCell: (row) => {
                return <>
                    <button className='border-0 bg-white mx-1' onClick={() => deleteMovie(row.row._id)}><DeleteForever htmlColor='#e20e0e' /> </button>
                    <button className='border-0 bg-white mx-1' onClick={() => editMovie(row.row)}><Edit htmlColor='#0097e3' /> </button>
                </>
            }
        },


    ];

    async function deleteMovie(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this movie!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    const response = await fetch(`${baseUrl}/movie`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id
                        })
                    })
                    const data = await response.json()
                    getMovies()

                    swal("Poof! Your movie has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your movie is safe!");
                }
            });
    }

    function editMovie(e) {
        console.log(e)
        sessionStorage.setItem("updateMovie", JSON.stringify(e))
        navigate("/editMovie")
    }

    const getMovies = () => {
        fetch(`http://localhost:3004/api/movie`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {

                for (let i = 0; i < data.length; i++) {
                    data[i]["serial"] = i + 1
                }

                console.log(data)

                setMovies(data)

            })
    }


    useEffect(() => {

        getMovies()

    }, [])

    return (
        <>
            <h2 className='mb-4 mt-1'>List of all movies</h2>

            <div style={{ height: 600 }}>
                <DataGrid
                    getRowId={(movies) => movies._id}
                    rows={movies}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                />
            </div>
        </>
    )
}

export default Movies