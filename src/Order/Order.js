import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    console.log(order);
    useEffect(() =>{
       const getOrders = async() => {
           const email= user.email;
           const url = `http://localhost:5000/order`;
           const {data} = await axios.get(url);
           setOrder(data);
       }
       getOrders();
    }, [])
    return (
        <div>
            <h1>your order {order.length} </h1>

        </div>
    );
};

export default Order;