import React, { useEffect, useRef, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import RightBar from './../components/imageManagement/RightBar';
import { getAllImages } from '../networkManager/movieImages';
import { getMovies, updateMovie } from '../networkManager/movies';
import MainSegment from '../components/imageManagement/MainSegment';
import toast from 'react-hot-toast';

function ImagesManagement() {

    const [allImages, setAllImages] = useState([])
    const [movie, setMovie] = useState({})
    const [imageQuery, setImageQuery] = useState('');

    const imageBtn = useRef()

    const onDragEnd = (result) => {
        const { source, destination } = result

        if (destination.droppableId === 'movie' && source.droppableId === 'imageList') {
            if (!movie?.data?.images?.includes(allImages[source.index])) {
                movie.data.images = movie?.data?.images?.concat(allImages[source.index]) || [allImages[source.index]];
                toast.success('Image added successfully')
            } else {
                toast('Image already exists', {
                    icon: '👏',
                    position: 'top-right'
                },
                );
            }
        }

        setMovie({ ...movie })
    };

    return <>
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-9">
                        <MainSegment
                            movie={movie}
                            setMovie={setMovie}
                            setImageQuery={setImageQuery}
                            imageBtn={imageBtn}
                        />
                    </div>

                    <div className="col-md-3">
                        <RightBar
                            allImages={allImages}
                            onDragEnd={onDragEnd}
                            setAllImages={setAllImages}
                            imageQuery={imageQuery}
                            setImageQuery={setImageQuery}
                            imageBtn={imageBtn}
                        />
                    </div>
                </div>
            </div>
        </DragDropContext>
    </>
}

export default ImagesManagement
