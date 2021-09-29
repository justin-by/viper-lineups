import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import NavBar from './navbar';
import IPage from '../interfaces/page';

import astairstand from '../images/iceboxlineups/astairstand.png'

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
                                <p id='map-location'>RUSSIA</p>
                            </div>
                        </div>
                    </div>

                    <div className='lineups-center-container'>
                        <div className='lineups-center-wrapper'>
                            <div className='lineups-center-header'>
                                <h2 id='lineups-center-header-text'>A SITE FROM RAMP</h2>
                            </div>
                            <div className='lineups-center-body'>
                                <p id='lineups-center-body-text'>
                                    This lineup allows Viper to safely play for time by hiding behind A Ramp.
                                    This lineup allows Viper to safely play for time by hiding behind A Ramp.
                                    This lineup allows Viper to safely play for time by hiding behind A Ramp.
                                </p>
                                <div className='lineup-video-container'>
                                    <ReactPlayer url='https://youtu.be/YmT5g1QgVns' playing={true} loop={true} muted={true} controls={true} className='lineup-video' />
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='lineups-right-container'>
                        <div className='lineup-step-image' style={{
                            backgroundImage: `url(${astairstand})`
                        }} />
                        <div className='lineup-step-image' />
                    </div>
                </div>

            </div>
        </>
    );
}

export default (BindPage);