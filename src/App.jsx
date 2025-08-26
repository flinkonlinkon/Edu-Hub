import React from 'react';
import { Route, Routes,useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CouresListe from './pages/student/CouresListe';
import CourseDeatials from './pages/student/CourseDeatials';
import MyEnrollMents from './pages/student/MyEnrollMents';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './pages/Teacher/Educator';
import DashBord from './pages/Teacher/DashBord';
import AddCoures from './pages/Teacher/AddCoures';
import MyCourses from './pages/Teacher/MyCourses';
import StudentEnrolled from './pages/Teacher/StudentEnrolled';
import Navbar from './components/student/Navbar';
import "quill/dist/quill.snow.css";


function App() {
  

  const isCourseListPage = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isCourseListPage && <Navbar />}
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CouresListe />} />
        <Route path="/course-list/:input" element={<CouresListe />} />

        <Route path="/course/:id" element={<CourseDeatials />} />
        <Route path="/my-enrollment" element={<MyEnrollMents />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

       <Route path="/educator" element={<Educator />}>
  
  <Route index element={<DashBord />} />
  <Route path="add-course" element={<AddCoures />} />
  <Route path="my-courses" element={<MyCourses />} />
  <Route path="student-enrolled" element={<StudentEnrolled />} />
</Route>


        


        

        

      </Routes>
      </div>
  )
}

export default App
