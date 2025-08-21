import { createContext, useEffect, useState  } from "react";
import App from "../App";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

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

    useEffect(()=>{
        fetchCourses();
    },[])
const value = {
    currency,allCourses,navigate,ratingCalculator,isEnducator,setIsEducator

}
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

