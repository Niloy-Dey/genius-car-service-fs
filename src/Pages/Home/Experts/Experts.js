import React from 'react';

import experts1 from '../../../Image/Experts/expert-1.jpg';
import experts2 from '../../../Image/Experts/expert-2.jpg';
import experts3 from '../../../Image/Experts/expert-3.jpg';
import experts4 from '../../../Image/Experts/expert-4.jpg';
import experts5 from '../../../Image/Experts/expert-5.jpg';
import experts6 from '../../../Image/Experts/expert-6.png';
import Expert from '../Expert/Expert';


const experts =[
    {id: 1, name: 'will smith' , img: experts1 },
    {id: 2, name: 'chris rock' , img: experts2 },
    {id: 3, name: 'dwayne rock' , img: experts3 },
    {id: 4, name: 'will fokirni' , img: experts4 },
    {id: 5, name: 'hello biden' , img: experts5 },
    {id: 6, name: 'levenda ' , img: experts6 },
]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center  my-5 '>our experts </h1>
            <div className='row'>
               {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
               }
            </div>
        </div>
    );
};

export default Experts;