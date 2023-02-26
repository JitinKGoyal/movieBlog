import { Editor } from '@tinymce/tinymce-react'
import React, { useRef, useState } from 'react'
import { baseUrl } from '../config';

function EditMovie() {

    const [formData, setFormData] = useState(JSON?.parse(sessionStorage?.getItem("updateMovie")))
    const [errors, setErrors] = useState([])
    const editorRef = useRef(null);

    const log = async (e) => {
        e.preventDefault()
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }

        const { _id, title, description, tag, imdb, tommato, runningTime, genre, director, releaseDate } = formData

        const response = await fetch(`${baseUrl}/movie`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: _id,
                title,
                description: editorRef.current.getContent(),
                tag,
                imdb,
                tommato,
                runningTime,
                genre,
                director,
                releaseDate
            })
        })
        const data = await response.json()

        if (data._id) {
            // navigate("/login")
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
            <div className='container mb-5'>

                <h2>Edit movie</h2>
                <form className='w-100'>
                    <div className='row'>

                        <div class="form-group col-md-4">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" placeholder="title" name='title' value={formData.title} onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="tag">Tag</label>
                            <input type="text" class="form-control" id="tag" placeholder="tag" name='tag' value={formData.tag} onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="director">Director</label>
                            <input type="text" class="form-control" id="director" placeholder="director" name='director' value={formData.director} onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="imdb">Imdb</label>
                            <input type="text" class="form-control" id="imdb" placeholder="imdb" name='imdb' value={formData.imdb} onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="tommato">Tommato</label>
                            <input type="text" class="form-control" id="tommato" placeholder="tommato" name='tommato' value={formData.tommato} onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="releaseDate">Release date</label>
                            <input type="date" class="form-control" id="releaseDate" placeholder="releaseDate" name='releaseDate' value={formData.releaseDate} onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="runningTime">RunningTime</label>
                            <input type="text" class="form-control" id="runningTime" placeholder="runningTime" name='runningTime' value={formData.runningTime} onChange={onChangeHandle} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="genre">Genre</label>
                            <input type="text" class="form-control" id="genre" placeholder="genre" name='genre' value={formData.genre} onChange={onChangeHandle} />
                        </div>
                    </div>

                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={formData.description}
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
                    <button type="submit" onClick={log} class="btn btn-primary">Update movie</button>
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

export default EditMovie