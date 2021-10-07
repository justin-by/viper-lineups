import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import IPage from '../interfaces/page';

import './about.css'


const AboutPage: React.FunctionComponent<IPage> = props => {



    return (
        <>
            <NavBar name={'NavBar'} />
            <div className='about-page-background'>
            </div>
        </>
    );
}

export default (AboutPage);