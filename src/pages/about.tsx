import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import IPage from '../interfaces/page';

import './about.css'


const AboutPage: React.FunctionComponent<IPage> = props => {



    return (
        <>
            <NavBar name={'NavBar'} />
            <div className='about-page-background'>
                <div className='about-container'>
                    <div className='about-message'>
                        <h2 className='about-title'>Message</h2>
                        <p className='about-message-text thank-message'>Thank you for visiting my web page!</p>
                        <p className='about-message-text'>I've had an amazing time developing this website and I'm glad to be able to share it. Valorant is my ultimate favorite game and I've always wanted
                            to create a project based on an aspect of it. At the moment this website only features Viper's post plants for default spots but I plan on adding additional lineups in the future. </p>
                    </div>
                    <div className='about-icon-links'>
                        <a href='https://github.com/justin-by' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github about-link"></i>
                        </a>

                        <a href='https://www.linkedin.com/in/j-sung/' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in about-link"></i>
                        </a>

                        <a href='https://angel.co/u/justin-by' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-angellist about-link"></i>
                        </a>
                    </div>

                    <div className='about-credits'>
                        <h2 className='about-title'>
                            Credits
                        </h2>

                        <p className='about-credits-text'>Design inspired by&nbsp;<a className='about-credit-link' href='https://brandonjoe.com/' target="_blank" rel="noopener noreferrer">Brandon Joe</a>&nbsp;and&nbsp;
                            <a className='about-credit-link' href='https://playvalorant.com/en-us/' target="_blank" rel="noopener noreferrer">Valorant's official website</a></p>
                        <p className='about-credits-text'>Images used from&nbsp; <a className='about-credit-link' href='https://dribbble.com/UnEpicKid' target="_blank" rel="noopener noreferrer">Dmitry Kiiashko</a>&nbsp;and&nbsp;
                            <a className='about-credit-link' href='https://valorant.fandom.com/wiki/VALORANT_Wiki' target="_blank" rel="noopener noreferrer">Valorant's Wiki page</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default (AboutPage);