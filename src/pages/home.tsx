import React, { useEffect } from 'react';
import IPage from '../interfaces/page';

import viperImg from '../images/viper1.png'
import snakeBite from '../images/first.png'

import NavBar from './navbar'

import './home.css'


const HomePage: React.FunctionComponent<IPage> = props => {

    return (
        <>
            <NavBar name={'NavBar'} />

            <div className='home-background'>
                <div className='home-container'>
                    <div className='home-background-text'>
                        vALORANT
                    </div>

                    <div className='left-home-box'>
                        <h1 className='left-home-box-title'>
                            <span className='side-desc-text'>
                                CONTROLLER &nbsp;&nbsp; //
                            </span>
                            <span className='side-desc-text'>
                                SABINE
                            </span>
                        </h1>
                    </div>
                    <div className='middle-home-box'>
                        <h1 className='viper-title-home'>
                            VIPER
                        </h1>
                        <div className='corner-container'>
                            <p className='corner-text'>
                                Viper is a brilliant scientist coming from the United States.
                                She earned a doctorate in chemistry and used her knowledge to heal others when she was younger.
                                She is the second member of the VALORANT Protocol, joining along with Brimstone.
                            </p>
                            <div className='corner-video-container'>
                                <video className='corner-video' src='https://i.imgur.com/LbscBPk.mp4' loop autoPlay muted />
                            </div>

                        </div>
                        <div className='abilities-container'>
                            <div className='ability-box'>
                                <div className='ability-pic-container'>
                                    <img src={snakeBite} className='ability-pic' />
                                </div>
                                <div className='ability-header'>
                                    <span className='ability-hotkey'>
                                        C
                                    </span>
                                    <span className='ability-title'>
                                        SNAKE BITE
                                    </span>
                                </div>
                                <div className='ability-desc'>
                                    
                                </div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                    <div className='middle-left-home-box'>
                        <img className='viper-image' alt='viper' src={viperImg}></img>

                    </div>
                    <div className='right-home-box'>
                        <div className='side-viper-text'>
                            VIPER
                        </div>
                        <div className='flip-side-viper-text'>
                            VIPER
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomePage;