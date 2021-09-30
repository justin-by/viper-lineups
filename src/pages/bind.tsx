import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import NavBar from './navbar';
import IPage from '../interfaces/page';


import './bind.css'


const BindPage: React.FunctionComponent<IPage> = props => {
    const icebox = {
        map: 'ICEBOX',
        region: 'RUSSIA',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM RAMP',
                desc: 'This lineup allows Viper to safely play for time by hiding behind A Ramp.',
                shortDesc: 'This lineup allows Viper to play for lineups by sitting besides A Stairs. This position allows Viper to quickly re-enter site.',
                video: 'YmT5g1QgVns',
                standImage: 'https://i.imgur.com/nfFxmKP.png',
                aimImage: 'https://i.imgur.com/MSFhVE0.png'
            },
            {
                id: 2,
                title: 'A SITE FROM MID',
                desc: 'This lineup allows Viper to safely play for time from mid.',
                shortDesc: 'This lineup allows Viper to play for lineups by sitting besides boiler. This position allows Viper to quickly re-enter site.',
                video: 'IZNky8EF1xA',
                standImage: 'https://i.imgur.com/JmFBuO1.png',
                aimImage: 'https://i.imgur.com/U3Qr6GZ.png'
            },
        ]
    }

    const [mapInfo, setMapInfo] = useState(icebox);
    const [currentLineup, setCurrentLineup] = useState(mapInfo.lineups[0])

    if (window.location.href === '/icebox') {
        setMapInfo(icebox)
    }









    return (
        <>
            <NavBar name={'NavBar'} />

            <div className='lineups-background'>
                <div className='lineups-left-container'>
                    {mapInfo && mapInfo.lineups.map(lineup => (

                        <div className='lineup-select' onClick={() =>
                            setCurrentLineup(lineup)
                        }>
                            <div className='lineup-select-text-wrapper'>
                                <div className='lineup-select-title'>
                                    {lineup.title}
                                </div>
                                <div className='lineup-select-desc'>
                                    {lineup.shortDesc}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='lineups-wrapper'>
                    <div className='lineups-background-text'>
                        {mapInfo.map}
                    </div>

                    <div className='lineups-center-map-header'>

                        <div className='lineups-header-text-wrapper'>
                            <div className='lineups-map-title'>
                                <p id='map-title-text'>{mapInfo.map}</p>
                                <p id='map-location'>{mapInfo.region}</p>
                            </div>
                        </div>
                    </div>

                    <div className='lineups-center-container'>
                        <div className='lineups-center-wrapper'>
                            <div className='lineups-center-header'>
                                <h2 id='lineups-center-header-text'>{currentLineup.title}</h2>
                            </div>
                            <div className='lineups-center-body'>
                                <p id='lineups-center-body-text'>
                                    {currentLineup.desc}
                                </p>
                                <div className='lineup-video-container'>
                                    <ReactPlayer url={`https://youtu.be/${currentLineup.video}`} playing={true} loop={true} muted={true} controls={true} className='lineup-video' />
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='lineups-right-container'>
                        <div className='lineup-step-image' style={{
                            backgroundImage: `url(${currentLineup.standImage})`
                        }} />
                        <div className='lineup-step-image' style={{
                            backgroundImage: `url(${currentLineup.aimImage})`
                        }} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default (BindPage);