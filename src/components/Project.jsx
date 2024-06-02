import React from 'react';
import ProjectItem from './ProjectItem';
import projectRv from '../assets/project-1.png';
import projectRealtor from '../assets/project-2.png';

const Project = () => {
    return (
        <div id='Project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Project</h1>
        <p className='text-center py-8'>
        I worked on a couple of projects in the past year to gain some hands-on experience.
        </p>
            <div className='grid sm:grid-cols-2 gap-12'> 
                <ProjectItem img={projectRv} title='RV WebPage' />
                <ProjectItem img={projectRealtor} title='Realtor WebPage' />
            </div>
        </div>
    )
}

export default Project;