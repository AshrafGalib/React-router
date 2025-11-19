import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import './Address.css'
const Address = () => {
    const navigate =useNavigate()
    //console.log(street,city,zipcode)
    const {street,city,zipcode} = useLoaderData().address
    
    return (
        <div>
            <h2>Writer's address here:</h2>
           <div className='style'>
            <h2>Street : {street}</h2>
            <h2>City : {city}</h2>
            <h2>Zipcode : {zipcode}</h2>
            <button onClick={()=>navigate(-1)}>Go Home</button>
            </div>

        </div>
    );
};

export default Address;