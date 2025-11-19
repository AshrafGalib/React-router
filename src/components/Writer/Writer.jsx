import React from 'react';
import './Writer.css'
import { Link } from 'react-router';

const Writer = ({writer}) => {
   // console.log(writer)
   const{id,name,username}=writer   
    return (
        <div className='style'>
            <h2>NAME:{name}</h2>
            <h2>USERNAME:{username}</h2>
            <Link to={`/users/${id}`} >Show details</Link>
        </div>
    );
};

export default Writer;