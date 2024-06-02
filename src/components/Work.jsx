import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'Customer Service Representative',
        duration: '2 years',
        detail: 
        'Act as a liaison, provide product/services information, answer questions, and resolve any emerging problems that our customer accounts might face with accuracy and efficiency'
    },  
    
    {
        year: 2021,
        title: 'Collections Contact Officer',
        duration: '1 year',
        detail: 
        'Notify debtors of overdue payments and accounts by telephone, mail, and registered mail, and continue the notification process if reply is not received'
    },  
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Service</h1>
            {data.map((item, idx)=>(
                <WorkItem key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                detail= {item.detail}/>

            ))}

            
    
        </div>
    );
};

export default Work