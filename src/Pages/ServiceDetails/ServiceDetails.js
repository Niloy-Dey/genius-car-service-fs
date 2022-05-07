// import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail  from "../../hooks/useServiceDetail";
const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='text-center'>
            <h1>you are about to book : {service.name} </h1>
            <h1>{serviceId} </h1>
            <div >
            <Link to={`/checkout/${serviceId}`}>
                    <button > proceed checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;