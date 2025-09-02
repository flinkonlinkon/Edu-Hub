// import Quill from 'quill';
// import React, { useEffect, useRef, useState } from 'react';
// import { assets } from '../../assets/assets';

// const AddCoures = () => {

//     const quillRef = useRef(null)
//     const editorRef = useRef(null)

//     const [cousrseTitle ,setCousrseTitle] = useState('')

//     const [cousrsePrice,setCousrsePrice] = useState(0)

//     const [discount ,setDiscount] = useState(0)

//     const [image,setImage] = useState(null)
//     const [chapter,setChapter] = useState([])

//     const [showPopup,setShowPopup] = useState(false)

//     const [currentChapterId,setCurrentChapterId] = useState(null)

//     const [lectureDetails,setLectureDetails] = useState({
//         lectureTitle: '',
//         lectureDuration: '',
//         lectureUrl: '',
//         isPreviewFree: false,
//     })


//     const handleChapter = (action,chapterId)=>{

//         if(action == 'add'){
//             const title = prompt('Enter the chapter name:')
//             if(title){
//                 const newChapter = {
//                     chapterId: uniqid(),
//                     chapterTitle: title,
//                     chapterContent: [],
//                     collapsed: false,
//                     chapterOrder : chapter.length > 0 ? chapter.slice(-1)[0].chapterOrder + 1 : 1, 

//                 }

//                 setChapter([...chapter,newChapter])
//             }

//         } else if(action =='remove'){
//             setChapter(chapter.filter((chapters)=> chapters.chapterId !== chapterId))
//         } else if(action == 'toggle'){
//             setChapter(
//                 chapter.map((chapters)=> chapters.chapterId == chapterId ? {...chapters,collapsed:!chapters.collapsed} : chapters)
//             )

//         }

//     }

// useEffect(()=>{
//     if(!quillRef.current && editorRef.current){
//         quillRef.current = new Quill(editorRef.current,{
//             theme: 'snow',
//         })
//     }
// },[])


//     return (
//         <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4  pt-8 pb-0'>

//             <form className='flex flex-col gap-4 max-w-md w-full text-gray-500'>
//                 <div className='flex flex-col gap-1'>
//                     <p>Course Title</p>

//                     <input onChange={e => setCousrseTitle(e.target.value)} value={cousrseTitle} placeholder='Type here' required type="text" className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' />

//                 </div>
//                 <div className='flex flex-col gap-1'>
//                     <p>Course Description</p>
//                     <div ref={editorRef}></div>

//                 </div>
//                 <div className='flex items-center justify-between flex-wrap'>
//                     <div className='flex flex-col gap-1'>
//                         <p>Course Price</p>
//                         <input onChange={e => setCousrsePrice(e.target.value)} value={cousrsePrice} placeholder='0' className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' type="number" required/>

//                     </div>
//                     <div className='flex md:flex-row flex-col items-center gap-3'>
//                         <p>Course Thumbnail</p>

//                         <label htmlFor="thumbnailImage" className='flex items-center gap-3'>
//                             <img src={assets.file_upload_icon} alt="" className='p-3 bg-blue-500 rounded'/>
//                             <input type="file" id='thumbnailImage' onChange={e => setImage(e.target.files[0])} accept='image/*' hidden />

//                             <img className='max-h-10' src={image ? URL.createObjectURL(image) : ''} alt="" />
//                         </label>

//                     </div>

//                 </div>
//                 <div className='flex flex-col gap-1'>
//                     <p>DISCOUNT %</p>
//                     <input onChange={e => setDiscount(e.target.value)} placeholder='0' min={0} max={100} value={discount} type="number" className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' required />

//                 </div>

//                 <div>
//                     {
//                         chapter.map((chapters,chapterIndex)=>(
//                             <div className='bg-white border rounded-lg mb-4' key={chapterIndex}>
//                                 <div className='flex justify-between items-center p-4 border-b'>
//                                     <div className='flex items-center'>
//                                         <img src={assets.dropdown_icon} width={14} alt="" className={`mr-2 cursor-pointer transition-all ${chapters.collapsed && "-rotate-90"}`} />
//                                         <span className='font-semibold'>{chapterIndex + 1} {chapters.chapterTitle}</span>

//                                     </div>
//                                     <span className='text-gray-500'>{chapters.chapterContent.length} Lectures</span>
//                                     <img src={assets.cross_icon} alt="" className='cursor-pointer'/>
//                                 </div>
//                                 {!chapters.collapsed && (
//                                     <div className='p-4'>
//                                         {
//                                             chapters.chapterContent.map((lecture,idex)=>(
//                                                 <div className='flex justify-between items-center mb-2' key={idex}>
//                                                     <span>{idex + 1} {lecture.lectureTitle} - {lecture.lectureDuration} min - <a href={lecture.lectureUrl} target='_blank' className='text-blue-500'>Link</a>
//                                                      - {lecture.isPreviewFree ? 'Free preview' : 'Paid'}
//                                                     </span>
//                                                     <img src={assets.cross_icon} className='cursor-pointer' alt="" />

//                                                 </div>
//                                             ))
//                                         }

//                                         <div className='inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2'>
//                                          + Add Lecture
//                                         </div>
//                                     </div>
//                                 )}


//                             </div>
//                         ))
//                     }

//                     <div className='flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer' onClick={()=> handleChapter('add')}>
//                          + Add Chapter
//                     </div>

//                     {
//                         showPopup && (
//                             <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
//                                 <div className='bg-white text-gray-700 p-4 rounded relative w-full max-w-80'>
//                                     <h2 className='text-lg font-semibold mb-4'>Add Lecture</h2>

//                                     <div className='mb-2'>
//                                         <p>Lecture Title</p>
//                                         <input className='mt-1 block w-full border rounded py-1 px-2' value={lectureDetails.lectureTitle} onClick={e => setLectureDetails({...lectureDetails,lectureTitle: e.target.value})} type="text" />
//                                     </div>
//                                     <div className='mb-2'>
//                                         <p>Duration (minutes)</p>
//                                         <input className='mt-1 block w-full border rounded py-1 px-2' value={lectureDetails.lectureDuration} onClick={e => setLectureDetails({...lectureDetails,lectureDuration: e.target.value})} type="number" />
//                                     </div>

//                                     <div className='mb-2'>
//                                         <p>Lecture Url</p>
//                                         <input className='mt-1 block w-full border rounded py-1 px-2' value={lectureDetails.lectureUrl} onClick={e => setLectureDetails({...lectureDetails,lectureUrl: e.target.value})} type="text" />
//                                     </div>

//                                     <div className='flex gap-2 my-4'>
//                                         <p>Is Preview Free?</p>
//                                         <input type="checkbox" className='mt-1 scale-125' checked={lectureDetails.isPreviewFree}
//                                         onChange={e => setLectureDetails({...lectureDetails,isPreviewFree: e.target.checked})} />
//                                     </div>

//                                     <button className='w-full bg-blue-400 text-white px-4 py-2 rounded' type='button'>Add</button>

//                                     <img onClick={()=> showPopup(false)} className='absolute top-4 right-4 w-4 cursor-pointer' src={assets.cross_icon} alt="" />

//                                 </div>

//                             </div>
//                         )
//                     }
//                 </div>

//                 <button type='submit' className='bg-black text-white w-max py-2.5 px-8 rounded my-4'>
//                     ADD
//                 </button>
//             </form>
           
//         </div>
//     );
// }

// export default AddCoures;



// use chatGpt


import Quill from 'quill';
import React, { useEffect, useRef, useState } from 'react';
import uniqid from 'uniqid';
import { assets } from '../../assets/assets';

const AddCoures = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [cousrseTitle, setCousrseTitle] = useState('');
  const [cousrsePrice, setCousrsePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapter, setChapter] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  });

  // ✅ Chapter handling
  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter the chapter name:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapter.length > 0 ? chapter.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapter([...chapter, newChapter]);
      }
    } else if (action === 'remove') {
      setChapter(chapter.filter((chapters) => chapters.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapter(
        chapter.map((chapters) =>
          chapters.chapterId === chapterId
            ? { ...chapters, collapsed: !chapters.collapsed }
            : chapters
        )
      );
    }
  };

  // ✅ Lecture handling
  const handleLectureAdd = () => {
    if (!currentChapterId) return;

    const newLecture = {
      lectureId: uniqid(),
      ...lectureDetails,
    };

    setChapter(
      chapter.map((chapters) =>
        chapters.chapterId === currentChapterId
          ? {
              ...chapters,
              chapterContent: [...chapters.chapterContent, newLecture],
            }
          : chapters
      )
    );

    // reset + close popup
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    });
    setShowPopup(false);
    setCurrentChapterId(null);
  };

  const handleLectureRemove = (chapterId, lectureId) => {
    setChapter(
      chapter.map((chapters) =>
        chapters.chapterId === chapterId
          ? {
              ...chapters,
              chapterContent: chapters.chapterContent.filter(
                (lec) => lec.lectureId !== lectureId
              ),
            }
          : chapters
      )
    );
  };

  // ✅ Init Quill editor
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <div className="h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <form className="flex flex-col gap-4 max-w-md w-full text-gray-500">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            onChange={(e) => setCousrseTitle(e.target.value)}
            value={cousrseTitle}
            placeholder="Type here"
            required
            type="text"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        {/* Price + Thumbnail */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              onChange={(e) => setCousrsePrice(e.target.value)}
              value={cousrsePrice}
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
              type="number"
              required
            />
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3">
              <img
                src={assets.file_upload_icon}
                alt=""
                className="p-3 bg-blue-500 rounded"
              />
              <input
                type="file"
                id="thumbnailImage"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                hidden
              />
              <img
                className="max-h-10"
                src={image ? URL.createObjectURL(image) : ''}
                alt=""
              />
            </label>
          </div>
        </div>

        {/* Discount */}
        <div className="flex flex-col gap-1">
          <p>DISCOUNT %</p>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="0"
            min={0}
            max={100}
            value={discount}
            type="number"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
            required
          />
        </div>

        {/* Chapters */}
        <div>
          {chapter.map((chapters, chapterIndex) => (
            <div
              className="bg-white border rounded-lg mb-4"
              key={chapters.chapterId}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  <img
                    src={assets.dropdown_icon}
                    width={14}
                    alt=""
                    className={`mr-2 cursor-pointer transition-all ${
                      chapters.collapsed && '-rotate-90'
                    }`}
                    onClick={() => handleChapter('toggle', chapters.chapterId)}
                  />
                  <span className="font-semibold">
                    {chapterIndex + 1} {chapters.chapterTitle}
                  </span>
                </div>
                <span className="text-gray-500">
                  {chapters.chapterContent.length} Lectures
                </span>
                <img
                  src={assets.cross_icon}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => handleChapter('remove', chapters.chapterId)}
                />
              </div>

              {/* Lectures */}
              {!chapters.collapsed && (
                <div className="p-4">
                  {chapters.chapterContent.map((lecture, idex) => (
                    <div
                      className="flex justify-between items-center mb-2"
                      key={lecture.lectureId}
                    >
                      <span>
                        {idex + 1} {lecture.lectureTitle} -{' '}
                        {lecture.lectureDuration} min -{' '}
                        <a
                          href={lecture.lectureUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500"
                        >
                          Link
                        </a>{' '}
                        - {lecture.isPreviewFree ? 'Free preview' : 'Paid'}
                      </span>
                      <img
                        src={assets.cross_icon}
                        className="cursor-pointer"
                        alt=""
                        onClick={() =>
                          handleLectureRemove(
                            chapters.chapterId,
                            lecture.lectureId
                          )
                        }
                      />
                    </div>
                  ))}

                  <div
                    className="inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2"
                    onClick={() => {
                      setCurrentChapterId(chapters.chapterId);
                      setShowPopup(true);
                    }}
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add Chapter */}
          <div
            className="flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer"
            onClick={() => handleChapter('add')}
          >
            + Add Chapter
          </div>

          {/* Lecture Popup */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
                <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>

                <div className="mb-2">
                  <p>Lecture Title</p>
                  <input
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureTitle}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureTitle: e.target.value,
                      })
                    }
                    type="text"
                  />
                </div>
                <div className="mb-2">
                  <p>Duration (minutes)</p>
                  <input
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureDuration}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureDuration: e.target.value,
                      })
                    }
                    type="number"
                  />
                </div>

                <div className="mb-2">
                  <p>Lecture Url</p>
                  <input
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureUrl}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureUrl: e.target.value,
                      })
                    }
                    type="text"
                  />
                </div>

                <div className="flex gap-2 my-4">
                  <p>Is Preview Free?</p>
                  <input
                    type="checkbox"
                    className="mt-1 scale-125"
                    checked={lectureDetails.isPreviewFree}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        isPreviewFree: e.target.checked,
                      })
                    }
                  />
                </div>

                <button
                  className="w-full bg-blue-400 text-white px-4 py-2 rounded"
                  type="button"
                  onClick={handleLectureAdd}
                >
                  Add
                </button>

                <img
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 w-4 cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white w-max py-2.5 px-8 rounded my-4"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCoures;
