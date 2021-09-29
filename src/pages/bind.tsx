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
                    <div className='lineup-select'>
                        <div className='lineup-select-text-wrapper'>
                            <div className='lineup-select-title'>
                                A SITE FROM RAMP
                            </div>
                            <div className='lineup-select-desc'>
                                This lineup allows Viper to safely play for time by hiding behind A Ramp.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lineups-wrapper'>
                    
                    <div className='lineups-center-map-header'>

                        <div className='lineups-header-text-wrapper'>
                            <div className='lineups-map-title'>
                                <p id='map-title-text'>ICEBOX</p>
                                <p id='map-location'>TEMP</p>
                            </div>
                        </div>

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