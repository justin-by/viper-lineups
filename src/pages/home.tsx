import React, { useEffect } from 'react';
import IPage from '../interfaces/page';

import viperImg from '../images/viper1.png'
import snakeBite from '../images/first.png'
import poisonCloud from '../images/second.png'
import toxicScreen from '../images/third.png'
import viperPit from '../images/fourth.png'

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
                                <video className='corner-video' id='myVideo' src='https://i.imgur.com/LbscBPk.mp4' loop autoPlay muted />
                            </div>

                        </div>
                        <div className='abilities-container'>

                            <div className='ability-box'>
                                <div className='ability-pic-container'>
                                    <img src={snakeBite} className='ability-pic' />
                                </div>
                                <div className='wrapper'>
                                    <div className='ability-header'>
                                        <span className='ability-hotkey'>
                                            C
                                        </span>
                                        <span className='ability-title'>
                                            SNAKE BITE
                                        </span>
                                    </div>
                                    <p className='ability-desc'>
                                        EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor,
                                        creating a lingering chemical zone that damages and applies Vulnerable.
                                    </p>
                                </div>
                            </div>

                            <div className='ability-box'>
                                <div className='ability-pic-container'>
                                    <img src={poisonCloud} className='ability-pic' />
                                </div>
                                <div className='wrapper'>
                                    <div className='ability-header'>
                                        <span className='ability-hotkey'>
                                            C
                                        </span>
                                        <span className='ability-title'>
                                            POISON CLOUD
                                        </span>
                                    </div>
                                    <p className='ability-desc'>
                                        EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round.
                                        RE-USE the ability to create a toxic gas cloud at the cost of fuel.
                                    </p>
                                </div>
                            </div>

                            <div className='ability-box'>
                                <div className='ability-pic-container'>
                                    <img src={toxicScreen} className='ability-pic' />
                                </div>
                                <div className='wrapper'>
                                    <div className='ability-header'>
                                        <span className='ability-hotkey'>
                                            C
                                        </span>
                                        <span className='ability-title'>
                                            TOXIC SCREEN
                                        </span>
                                    </div>
                                    <p className='ability-desc'>
                                        EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters.
                                        RE-USE the ability to create a tall wall of toxic gas at the cost of fuel.
                                        This ability can be RE-USED more than once.
                                    </p>
                                </div>
                            </div>

                            <div className='ability-box'>
                                <div className='ability-pic-container'>
                                    <img src={viperPit} className='ability-pic' />
                                </div>
                                <div className='wrapper'>
                                    <div className='ability-header'>
                                        <span className='ability-hotkey'>
                                            C
                                        </span>
                                        <span className='ability-title'>
                                            VIPER'S PIT
                                        </span>
                                    </div>
                                    <p className='ability-desc'>
                                        EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a
                                        large cloud that reduces vision range of players and maximum health of enemies.
                                    </p>
                                </div>
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

    );
}

export default HomePage;