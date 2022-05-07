// import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { Toast } from 'bootstrap';
const Checkout = () => {
   const {service_Id} = useParams();
   const [service] = useServiceDetail(service_Id);
   const [user] = useAuthState(auth);
   console.log(user);
//    console.log(service_Id);
  const handlePlaceOrder = event =>{
      event.preventDefault();
      const order = {
          service: service.name,
          serviceId: service_Id,
          address: event.target.address.value,
          phone:event.target.phone.value,
      }
    //   console.log(order);
      axios.post('http://localhost:5000/order', order)
      .then(response =>{
        //   console.log(response);
        const {data} =response;
        if(data.insertedId){
            Toast('your order is booked')
            event.target.reset();
        }
      })
  }



   /* const [user, setUser] = useState({
       name:'niloy dey',
       email: 'niloydeyce@gmail.com',
       address: 'chittagong',
       phone: '080890987'
   });

   const handleAddressChange = event =>{
        console.log(event.target.value);
        const {address, ...rest} = user;
        // console.log(address, rest);
        const newAddress = event.target.value;
        const newUser = {newAddress, ...rest};
        setUser(newUser);

   } */

    return (
        <div className='mt-5 pt-5 w-50 mx-auto '> 
            <h1>please order</h1>

            <form action="" onSubmit={handlePlaceOrder}>
                <input  className='w-100 mb-2 ' type="text" name="name" id=""   placeholder='name'  required/>
                <input className='w-100 mb-2 ' type="email"  name="email" id=""  placeholder='email'   required/>
                <input  className='w-100 mb-2 'type="text" value={service.name} name="service" id="" placeholder='service'  required/>
                <input   className='w-100 mb-2 'type="text"  name="address" id="" placeholder='address' autoComplete='off'  required/>
                <input className='w-100 mb-2 ' type="text"  name="phone" id="" placeholder='phone'  required/>
                <input className='w-100 mb-2 btn-primary' type="submit" value="please order" />
            </form>
        </div>
    );
};

export default Checkout;