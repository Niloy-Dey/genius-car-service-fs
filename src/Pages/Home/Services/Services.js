import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data =>setServices(data));
    } , [])

    return (
        <div>
            <h1 style={{textAlign:'center', color:'blue'}}>Our service</h1>
            <div  className='services-container container'>
                {
                    services.map(service => <Service key={service._id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;