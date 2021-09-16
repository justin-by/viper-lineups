import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import IPage from '../interfaces/page';
import viperImg from '../images/viper1.png'

import './home.css'


const HomePage: React.FunctionComponent<IPage> = props => {

    return (
        <div className='navbar'>
            <ul className='nav-buttons'>
                <li className='nav-logo'>
                    <a href='/'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAATlBMVEUAAAD+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7////////+/v7+/v7+/v7+/v7+/v7+/v7+/v7////7+/v+/v7+/v7+/v7+/v7/////XD+bAAAAGXRSTlMA3Pw4SnVF8+3QEAqEK7WpUiGmIlMst1Qb94EzkwAAALZJREFUSMftkkE
                        SgjAQBANKRI1BVNT9/0f1NgnD7t6p9JGqJjWdhEbjkILLEGulf3lG7I+1IqebbcyjrBXpLpZxPQsrki3lIVuKJGO6bCtIwNMVBQl4uqIgAU3XFcnKdEORpEw3lP7O0x0FCTDdUJCAp7OyCMj1dBBDxSQgldPBW2mPBJiu3dlzFEowl9+WlUB/pJM/ymutEwwdGP5Vv+xwAsZNwHgJGD8B4ydg9p+gcKbQaJT8AL5WJzJ+xEFZAAAAAElFTkSuQmCC' alt='val logo' />
                    </a>
                </li>
                <li>
                    <div className='nav-dropdown'>
                        <button className='nav-dropdown-button'>Maps</button>
                    </div>
                </li>
                <a className='nav-about' href='/about'>
                    <div className='nav-about-text'>
                        About
                    </div>
                </a>
            </ul>
            <div className='home-background'>
                <div className='home-container'>
                    <div className='home-background-text'>
                        vALORANT
                    </div>

                    <div className='left-home-box'>
                        <h1 className='left-home-box-title'>
                            <span>
                                CONTROLLER &nbsp;&nbsp; //
                            </span>
                            <span>
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

        </div>
    )
}

export default HomePage;