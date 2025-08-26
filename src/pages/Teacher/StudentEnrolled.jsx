import React, { useEffect, useState } from 'react';
import { dummyCourses, dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentEnrolled = () => {

    const [enrolledStudents,setEnrolledStudents] = useState(null)

    const fechEnroll = async ()=>{
        setEnrolledStudents(dummyStudentEnrolled)
    }

    useEffect(()=>{
        fechEnroll()
    },[])


    return enrolledStudents ? (
        <div>
            <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
                <table className='md:table-auto table-fixed w-full overflow-hidden'>
                     <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
                            <tr>
                                <th className='px-4 py-3 font-semibold truncate'>#</th>
                                <th className='px-4 py-3 font-semibold truncate'>Student Name</th>
                                <th className='px-4 py-3 font-semibold truncate'>Course Title</th>
                                <th className='px-4 py-3 font-semibold truncate'>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                enrolledStudents.map((item,index)=>(
                                    <tr key={index} className='border-b border-gray-500/20'>
                                       <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                                       <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                                        <img src={item.student.imageUrl} alt="" className='w-9 h-9 rounded-full'/>
                                        <span className='truncate'>{item.student.name}</span>
                                        </td> 
                                        <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                                        <td className='px-4 py-3 hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                </table>
            </div>
        </div>
    ) : <Loading></Loading>
}

export default StudentEnrolled;
