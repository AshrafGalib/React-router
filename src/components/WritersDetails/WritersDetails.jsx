import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import './WritersDetails.css'
const WritersDetails = () => {
    const WriterDetails =useLoaderData()
    //console.log(WriterDetails)
    return (
        <div>
            <h2>Writer Details here:</h2>
            
            <Suspense fallback='Loading...'>
<div className='style'>
            <h2>NAME : {WriterDetails.name}</h2>
            <h2>EMAIL : {WriterDetails.email}</h2>
            <h2>PHONE : {WriterDetails.phone}</h2>
            <h2>WEBSITE : {WriterDetails.website}</h2>
            </div>
            </Suspense>
            

        </div>
    );
};

export default WritersDetails;