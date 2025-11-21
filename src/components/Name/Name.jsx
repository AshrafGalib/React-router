import React, { use } from 'react';

const Name = ({writerPromise}) => {
    const {name} =use(writerPromise)
   
    return (
        <div>
            <h4>Writer Name : {name} </h4>
        </div>
    );
};

export default Name;