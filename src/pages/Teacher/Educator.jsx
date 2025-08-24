import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Teacher/Navbar';
import SideBar from '../../components/Teacher/SideBar';
import Footer from '../../components/Teacher/Footer';

const Educator = () => {
    return (
        <div className='text-default min-h-screen bg-white'>
           <Navbar></Navbar>
           <div className='flex'>
            <SideBar></SideBar>
            <div className='flex-1'>
<Outlet></Outlet>
            </div>
           </div>

           <Footer></Footer>
            
        </div>
    );
}

export default Educator;
