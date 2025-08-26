import Quill from 'quill';
import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../assets/assets';

const AddCoures = () => {

    const quillRef = useRef(null)
    const editorRef = useRef(null)

    const [cousrseTitle ,setCousrseTitle] = useState('')

    const [cousrsePrice,setCousrsePrice] = useState(0)

    const [discount ,setDiscount] = useState(0)

    const [image,setImage] = useState(null)
    const [chapter,setChapter] = useState([])

    const [showPopup,setShowPopup] = useState(false)

    const [currentChapterId,setCurrentChapterId] = useState(null)

    const [lectureDetails,setLectureDetails] = useState({
        lectureTitle: '',
        lectureDuration: '',
        lectureUrl: '',
        isPreviewFree: false,
    })

useEffect(()=>{
    if(!quillRef.current && editorRef.current){
        quillRef.current = new Quill(editorRef.current,{
            theme: 'snow',
        })
    }
},[])


    return (
        <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4  pt-8 pb-0'>

            <form className='flex flex-col gap-4 max-w-md w-full text-gray-500'>
                <div className='flex flex-col gap-1'>
                    <p>Course Title</p>

                    <input onChange={e => setCousrseTitle(e.target.value)} value={cousrseTitle} placeholder='Type here' required type="text" className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' />

                </div>
                <div className='flex flex-col gap-1'>
                    <p>Course Description</p>
                    <div ref={editorRef}></div>

                </div>
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='flex flex-col gap-1'>
                        <p>Course Price</p>
                        <input onChange={e => setCousrsePrice(e.target.value)} value={cousrsePrice} placeholder='0' className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' type="number" required/>

                    </div>
                    <div className='flex md:flex-row flex-col items-center gap-3'>
                        <p>Course Thumbnail</p>

                        <label htmlFor="thumbnailImage" className='flex items-center gap-3'>
                            <img src={assets.file_upload_icon} alt="" className='p-3 bg-blue-500 rounded'/>
                            <input type="file" id='thumbnailImage' onChange={e => setImage(e.target.files[0])} accept='image/*' hidden />

                            <img className='max-h-10' src={image ? URL.createObjectURL(image) : ''} alt="" />
                        </label>

                    </div>

                </div>
                <div className='flex flex-col gap-1'>
                    <p>DISCOUNT %</p>
                    <input onChange={e => setDiscount(e.target.value)} placeholder='0' min={0} max={100} value={discount} type="number" className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' required />

                </div>

                <div>
                    {
                        chapter.map((chapters,chapterIndex)=>(
                            <div className='bg-white border rounded-lg mb-4' key={chapterIndex}>
                                <div className='flex justify-between items-center p-4 border-b'>
                                    <div className='flex items-center'>
                                        <img src={assets.dropdown_icon} width={14} alt="" className={`mr-2 cursor-pointer transition-all ${chapters.collapsed && "-rotate-90"}`} />
                                        <span className='font-semibold'>{chapterIndex + 1} {chapters.chapterTitle}</span>

                                    </div>
                                    <span className='text-gray-500'>{chapters.chapterContent.length} Lectures</span>
                                    <img src={assets.cross_icon} alt="" className='cursor-pointer'/>
                                </div>
                                {!chapters.collapsed && (
                                    <div className='p-4'>
                                        {
                                            chapters.chapterContent.map((lecture,idex)=>(
                                                <div className='flex justify-between items-center mb-2' key={idex}>
                                                    <span>{idex + 1} {lecture.lectureTitle} - {lecture.lectureDuration} min - <a href={lecture.lectureUrl} target='_blank' className='text-blue-500'>Link</a>
                                                     - {lecture.isPreviewFree ? 'Free preview' : 'Paid'}
                                                    </span>
                                                    <img src={assets.cross_icon} className='cursor-pointer' alt="" />

                                                </div>
                                            ))
                                        }

                                        <div className='inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2'>
                                         + Add Lecture
                                        </div>
                                    </div>
                                )}


                            </div>
                        ))
                    }

                    <div className='flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer'>
                         + Add Chapter
                    </div>

                    {
                        showPopup && (
                            <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
                                <div className='bg-white text-gray-700 p-4 rounded relative w-full max-w-80'>
                                    <h2 className='text-lg font-semibold mb-4'>Add Lecture</h2>

                                </div>

                            </div>
                        )
                    }
                </div>
            </form>
           
        </div>
    );
}

export default AddCoures;
