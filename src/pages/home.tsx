import React, { useEffect } from 'react';
import IPage from '../interfaces/page';

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

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;