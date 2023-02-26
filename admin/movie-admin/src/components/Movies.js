
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
            field: 'imdb',
            headerName: 'Imdb',
            type: 'number'
        },
        {
            field: 'tommato',
            headerName: 'Tommato',
            type: 'number'
        },
        {
            field: 'runningTime',
            headerName: 'Running Time',
            width: "150"
        },
        {
            field: 'genre',
            headerName: 'Genre'
        },
        {
            field: 'tag',
            headerName: 'Tag'
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

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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