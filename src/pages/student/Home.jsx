import React from 'react';
import Hero from '../../components/student/Hero';
import Compatines from '../../components/student/Compatines';
import CourseSection from '../../components/student/CourseSection';

const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-center'>
            <Hero></Hero>
            <Compatines></Compatines>
            <CourseSection></CourseSection>
        </div>
    );
}

export default Home;
