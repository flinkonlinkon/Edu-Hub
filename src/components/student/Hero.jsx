import React from 'react';
import { assets } from '../../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-cyan-100/70 pt-20 md:pt-36 w-full px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
            <h1 className='md:text-home-hading-large tex-home-hading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the 
courses designed to <span className='text-blue-600'> fit your choice.</span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
        </div>
    );
}

export default Hero;
