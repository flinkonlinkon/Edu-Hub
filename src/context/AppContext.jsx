import { createContext, useEffect, useState  } from "react";
import App from "../App";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([]);
    const [isEnducator, setIsEducator] = useState(true);

    const fetchCourses = async () => {
        setAllCourses(dummyCourses);
    }

    const ratingCalculator = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        })

        return totalRating / course.courseRatings.length;
    }

    const calculateChapterTime = (chapter)=>{

        let time = 0;
        chapter.chapterContent.map((lecture)=>{
            time += lecture.lectureDuration
            
        })

        return humanizeDuration(time * 60 * 1000,{units: ['h','m']})

    }


    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter)=> chapter.chapterContent.map(
            (lecture)=> time += lecture.lectureDuration
        ))

         return humanizeDuration(time * 60 * 1000,{units: ['h','m']})
    }


    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length;
            }
        })

        return totalLectures;
    }

    useEffect(()=>{
        fetchCourses();
    },[])
const value = {
    currency,allCourses,navigate,ratingCalculator,isEnducator,setIsEducator,calculateNoOfLectures,calculateCourseDuration,calculateChapterTime

}
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

