import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import './Root.css'
import Footers from '../Footers/Footers';
const Root = () => {
    return (
        <div>
            <Header></Header>
           <div className='Flex'>
            <aside>
                <p>Side Nav -1</p>
                <p>Side Nav -2</p>
                <p>Side Nav -3</p>
            </aside>
             <Outlet></Outlet>
           </div>
            <Footers></Footers>
        </div>
    );
};

export default Root;