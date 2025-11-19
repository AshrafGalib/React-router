import React from 'react';
import './Writer.css'
import { Link, useNavigate } from 'react-router';
import Address from '../Address/Address';



const Writer = ({writer}) => {
    const{id,name,username}=writer 
   //const{street,city,zipcode}  =writer.address
   //console.log(street,city,zipcode)
    const navigate =useNavigate()
    const handleNavigate=()=>{
        navigate(`${id}/address`);
         
    }
   // console.log(writer)
   
  
    return (
        <div className='style'>
            <h2>NAME:{name}</h2>
            <h2>USERNAME:{username}</h2>
            <Link to={`/users/${id}`} >Show details</Link>
            <button onClick={handleNavigate}>Address</button>
        </div>
    );
};

export default Writer;