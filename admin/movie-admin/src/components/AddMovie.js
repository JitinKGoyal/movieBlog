import { Editor } from '@tinymce/tinymce-react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config';

function AddMovie() {

    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    const editorRef = useRef(null);

    const navigate = useNavigate()

    const log = async (e) => {
        e.preventDefault()
        // if (editorRef.current) {
        //     console.log(editorRef.current.getContent());
        // }

        formData.description = editorRef.current.getContent()

        const response = await fetch(`${baseUrl}/movie`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()

        if (data._id) {
            navigate("/movies")
            // document.getElementById("login-btn").click()
        } else {
            setErrors(data.errors)
            console.log(data.errors)
        }

    };

    const onChangeHandle = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    return (
        <>
            <div className='container'>
                <h2>Add a new movie</h2>
                <form className='w-100'>
                    <div className='row'>

                        <div class="form-group col-md-4">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" placeholder="Title" name='title' onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="tag">Tag</label>
                            <input type="text" class="form-control" id="tag" placeholder="Tag" name='tag' onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="director">Director</label>
                            <input type="text" class="form-control" id="director" placeholder="Director" name='director' onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="imdb">Imdb</label>
                            <input type="number" class="form-control" id="imdb" placeholder="Imdb" name='imdb' onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="tommato">Tommato</label>
                            <input type="number" class="form-control" id="tommato" placeholder="Tommato" name='tommato' onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="releaseDate">Release date</label>
                            <input type="date" class="form-control" id="releaseDate" placeholder="Release date" name='releaseDate' onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="runningTime">RunningTime</label>
                            <input type="text" class="form-control" id="runningTime" placeholder="Running time" name='runningTime' onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="genre">Genre</label>
                            <input type="text" class="form-control" id="genre" placeholder="Genre" name='genre' onChange={onChangeHandle} />
                        </div>
                    </div>


                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />

                    <button type="submit" onClick={log} class="btn btn-primary">Add Movie</button>
                </form>

                <ol className='mt-4'> 

                    {errors.map(({ msg }) => (
                        <li className='text-danger'>{msg}</li>
                    ))}

                </ol>
            </div>
        </>
    )
}

export default AddMovie