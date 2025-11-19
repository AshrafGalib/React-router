import React from 'react';
import { useLoaderData } from 'react-router';
import Writer from '../Writer/Writer';

const Writers = () => {
    const writers = useLoaderData()
    //console.log(writers) 
    return (
        <>
         <div>
            <h3>Writers.</h3>
        </div>
        <div>
            {
            writers.map(writer=><Writer key={writer.id} writer={writer}></Writer>)
            }
        </div>
        </>
       
    );
};

export default Writers;