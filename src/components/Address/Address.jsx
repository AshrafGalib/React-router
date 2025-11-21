import React, { Suspense, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import './Address.css'
import Name from '../Name/Name';
const Address = () => {
    const navigate =useNavigate()
    //console.log(street,city,zipcode)
    const {street,city,zipcode} = useLoaderData().address
    const {id} = useLoaderData()
    //console.log(id)
    const [name,setName]=useState(false)
    const writerPromise =fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
    
    return (
        <div>
            <h2>Writer's address here:</h2>
           <div className='style'>
            <h2>Street : {street}</h2>
            <h2>City : {city}</h2>
            <h2>Zipcode : {zipcode}</h2>
            <button onClick={()=>setName(!name)}>{name ? 'Hide' : 'Show'} name</button>
            {
                name && <Suspense fallback={<span>Loading..</span>}>
                <Name writerPromise={writerPromise}></Name>
                </Suspense>
            }
            <button onClick={()=>navigate(-1)}>Go Home</button>
            </div>

        </div>
    );
};

export default Address;