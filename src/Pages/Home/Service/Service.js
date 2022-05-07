import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    // console.log(service);
    const {_id , name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetails = (id) =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service m-3'>
            <img src={img} alt="" />
            <h2>{name} </h2>
            <h4>price : {price} </h4>
            <h5>Description: {description} </h5>  
            <button onClick={() => navigateToServiceDetails(_id)}>Book Now</button>          
        </div>
    );
};

export default Service;