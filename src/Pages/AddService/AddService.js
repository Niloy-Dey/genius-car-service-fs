import React from 'react';


const AddService = () => {
    const handleSubmit= event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const data = {name , price, description, img};
        console.log(data);


        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        } )
    }
    return (
        <div className=' mx-auto text-center'>
            <h1>AddService</h1>
            <div className='w-100 text-center'>
            <form onSubmit={handleSubmit} className="from-control">
                <input className="my-2" placeholder="name " type="text" name="name" id="" /><br />
                <input className="mb-2" placeholder=" description" type="text" name="description" id="" /><br />
                <input className="mb-2" placeholder="price " type="text" name='price'/><br />
                <input className="mb-2" placeholder="photo url " type="text" name='img'/><br />
                <input type="submit" value="add service" />
            </form>
            </div>
        </div>
    );
};

export default AddService;