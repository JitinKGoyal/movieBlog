import { Remove, RemoveCircleOutline, RemoveCircleOutlineSharp, RemoveCircleRounded, RemoveDone, RemoveFromQueue } from '@mui/icons-material';
import { Editor } from '@tinymce/tinymce-react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config';

function EditMovie() {

    const sessionData = JSON.parse(sessionStorage?.getItem("updateMovie"));

    const [formData, setFormData] = useState(JSON.parse(sessionData.detail))
    const [inputImage, setInputImage] = useState()
    const [imageLoader, setImageLoader] = useState(false)
    const [error, setError] = useState(false)
    const [sizeErr, setSizeErr] = useState(false)
    const [typeErr, setTypeErr] = useState(false)
    const [generalErr, setGeneralErr] = useState("")

    const editorRef = useRef(null);
    const navigate = useNavigate();

    const log = async (e) => {
        e.preventDefault()
        let resData = {};

        if (!sizeErr && formData.title && formData.director && formData.imdb && formData.tommato && formData.releaseDate && formData.runningTime && formData.genre && formData.cinema && formData.category && editorRef.current.getContent() ) {
            resData.id = sessionData.id
            resData.image = inputImage
            resData.title = formData.title
            resData.detail = formData;
            resData.description = editorRef.current.getContent()

            const response = await fetch(`${baseUrl}/movie`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(resData)
            })
            const data = await response.json()

            if (response.status == 200) {
                setGeneralErr("")
                sessionStorage.removeItem("updateMovie")
                navigate("/movies")
            } else {
                setGeneralErr(data?.errors[0]?.msg)
                setError(false)
            }
        } else {
            setError(true)
        }

    };

    const onChangeHandle = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleInputImage = (e) => {

        if (!(e.target.files[0].type).includes("image")) {
            setTypeErr(true)
        } else {
            setTypeErr(false)
            if (e.target.files[0].size >= 1000000) {
                setSizeErr(true)
            } else {
                setSizeErr(false)
                setImageLoader(true)
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                    const binaryString = reader.result;
                    setInputImage(binaryString)
                    setImageLoader(false);
                };
            }
        }
    }

    const removeImage = () => {
        setInputImage()
        document.getElementById("inputImage").value = ""
        setSizeErr()
        setTypeErr()
    }

    return (
        <>
            <div className='container'>
                <h2>Edit a movie</h2>
                {error && <div className='alert alert-danger text-danger' id='err'>Please fill all the fields</div>}
                {generalErr != "" && <div className='alert alert-danger text-danger' id='err'>{generalErr}</div>}

                <form className='w-100'>
                    <div className='row'>

                        <div className="form-group col-md-4">
                            <div htmlFor="inputImage" style={{ display: "flex", alignItems: "center" }}>Image {imageLoader && <span className='text-success imageLoader ml-3'></span>}</div>
                            <input type="file" className="mt-2" id="inputImage" placeholder="inputImage" name='inputImage' onChange={handleInputImage} />
                            {inputImage && <span className='btn' onClick={removeImage} style={{cursor:"pointer"}} title="Remove selected Image"> <RemoveCircleRounded htmlColor="#ff6961"/></span>}
                            {typeErr && <div className='text-danger mt-2' style={{ fontSize: "12px" }}>Warning: File should be an image</div>}
                            {sizeErr && <div className='text-danger mt-2' style={{ fontSize: "12px" }}>Warning: Image is greater then 1MB</div>}
                            {!sizeErr && <div className='text-info mt-2' style={{ fontSize: "12px" }}>Info: Image should be less then 1MB</div>}

                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Title" name='title' value={formData.title} onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="tag">Tag</label>
                            <input type="text" className="form-control" id="tag" placeholder="Tag" value={formData.tag} name='tag' onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="director">Director</label>
                            <input type="text" className="form-control" id="director" placeholder="Director" name='director' value={formData.director} onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="imdb">Imdb</label>
                            <input type="number" className="form-control" id="imdb" placeholder="Imdb" name='imdb' value={formData.imdb} onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="tommato">Tommato</label>
                            <input type="number" className="form-control" id="tommato" placeholder="Tommato" name='tommato' value={formData.tommato} onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="releaseDate">Release date</label>
                            <input type="date" className="form-control" id="releaseDate" placeholder="Release date" name='releaseDate' value={formData.releaseDate} onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="runningTime">RunningTime</label>
                            <input type="text" className="form-control" id="runningTime" placeholder="Running time" name='runningTime' value={formData.runningTime} onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="genre">Genre</label>
                            <input type="text" className="form-control" id="genre" placeholder="Genre" name='genre' value={formData.genre} onChange={onChangeHandle} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="cinema">Cinema</label>
                            <select className='form-control' name="cinema" id="cinema" value={formData.cinema} onChange={onChangeHandle}>
                                <option value=""  >--Select cinema--</option>
                                <option value="hollywood">Hollywood</option>
                                <option value="bollywood">Bollywood</option>
                                <option value="southIndian">South indian</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="category">category</label>
                            <select className='form-control' name="category" id="category" value={formData.category} onChange={onChangeHandle}>
                                <option value=""  >--Select category--</option>
                                <option value="movie">Movie</option>
                                <option value="webSeries">Web series</option>
                            </select>
                        </div>
                    </div>


                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={sessionData.description}
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

                    <button type="submit" onClick={log} className="btn btn-primary">Edit Movie</button>
                </form>
                {/* 
                <ol className='mt-4'>

                    {errors.map(({ msg }) => (
                        <li className='text-danger'>{msg}</li>
                    ))}

                </ol> */}


            </div>
        </>
    )
}

export default EditMovie