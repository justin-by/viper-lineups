import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import IPage from '../interfaces/page';

import './bind.css'


const BindPage: React.FunctionComponent<IPage> = props => {



    return (
        <>
            <NavBar name={'NavBar'} />

            <div className='lineups-background'>
                <div className='lineups-left-container'>
                    <div>
                        
                    </div>
                </div>
                <div className='lineups-wrapper'>
                    <div className='lineups-center-map-header'>

                    </div>
                    <div className='lineups-center-container'>

                    </div>
                    <div className='lineups-right-container'>

                    </div>
                </div>

            </div>
        </>
    );
}

export default (BindPage);