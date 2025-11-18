import React from 'react';
import { useLoaderData } from 'react-router';

const Writers = () => {
    const writers = useLoaderData()
    console.log(writers) 
    return (
        <div>
            <h3>Writers.</h3>
        </div>
    );
};

export default Writers;