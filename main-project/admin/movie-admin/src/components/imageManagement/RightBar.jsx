import React, { useEffect, useState } from 'react'
import { AiOutlineBoxPlot } from 'react-icons/ai'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { getAllImages } from '../../networkManager/movieImages';

function RightBar({ allImages, setAllImages, onDragEnd, imageQuery, setImageQuery, imageBtn }) {

    const [offset, setOffset] = useState(0);
    const limit = 20;

    const [totalImages, setTotalImages] = useState(0)

    const rightBarImageDblClick = (droppableId, index) => {

        const obj = {
            source: {
                droppableId,
                index
            },
            destination: {
                droppableId: "movie"
            }
        }

        onDragEnd(obj);
    }

    function getImages() {
        imageQuery && getAllImages(imageQuery, offset, limit)
            .then(res => {
                setAllImages(res.data)
                setTotalImages(res.total);
            })
            .catch(err => console.log(err))
    }

    const handleImageQuerySubmit = (e) => {
        e.preventDefault()
        if (offset) {
            setOffset(0);
            setTotalImages(0);
        }
        else {
            getImages()
        }
    }

    const currentPage = () => {
        return offset / limit + 1
    }

    const totalPages = () => {
        return Math.ceil(totalImages / limit)
    }

    useEffect(() => {
        getImages();
    }, [offset])


    return (
        <div className='w-100 shadow vh-100 overflow-auto'>

            <div className='p-2'>
                <form className='d-flex'>
                    <input className='form-control me-2 border-0 border-bottom font_sm' placeholder='Search images' type="search" value={imageQuery} onChange={e => setImageQuery(e.target.value)} />
                    <button ref={imageBtn} className='btn btn-dark font_sm' onClick={handleImageQuerySubmit}>Search</button>
                </form>
            </div>

            <div className='px-3'>
                <AiOutlineBoxPlot fontSize={20} /> <span className='font_sm'> {totalImages} </span>
            </div>
            <hr />

            <Droppable droppableId='imageList'>
                {(provided) => {
                    return <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {Array.isArray(allImages) && allImages.map((image, index) => {
                            return (
                                <Draggable key={image} draggableId={image} index={index}>
                                    {(provided) => {
                                        return <div
                                            className='m-2 p-2 rounded_corner shadow-sm rightbar_box'
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <img src={image} alt={image} className='w-100 rounded_corner' onDoubleClick={() => rightBarImageDblClick('imageList', index)} />
                                            <div className='p-1'>
                                                <a href={image} target='_blank' className='font_sm text-decoration-none text-dark' rel="noreferrer">{image.split('/')[image.split('/').length - 1].replaceAll('-', ' ')}</a>
                                            </div>
                                        </div>
                                    }}
                                </Draggable>
                            )
                        })}
                    </div>
                }}

            </Droppable >

            <hr />

            {!!totalImages && <div className='d-flex justify-content-between align-items-center p-2'>
                <button className='btn btn-sm btn-outline-info ' disabled={offset <= 0} onClick={() => setOffset(e => e - limit)}>Previous</button>
                <div> {currentPage() + '/' + totalPages()}</div>
                <button className='btn btn-sm btn-outline-info ' disabled={offset + limit >= totalImages} onClick={() => setOffset(e => e + limit)}>Next</button>
            </div>}

        </div>
    )
}

export default RightBar