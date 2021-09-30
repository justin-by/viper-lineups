import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import NavBar from './navbar';
import IPage from '../interfaces/page';


import './map.css'


const MapPage: React.FunctionComponent<IPage> = props => {
    const icebox = {
        map: 'ICEBOX',
        region: 'RUSSIA',
        mapImage: 'https://i.imgur.com/xFFkDUC.png',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM STAIRS',
                desc: 'This lineup allows Viper to safely play for time by hiding behind A Ramp. This lineup provides great protection and holds an element of surprise. Viper can quickly re-enter site through either stairs or screen.',
                shortDesc: 'This lineup allows Viper to play for lineups by sitting besides A Stairs. This position allows Viper to quickly re-enter site.',
                video: 'YmT5g1QgVns',
                standImage: 'https://i.imgur.com/nfFxmKP.png',
                aimImage: 'https://i.imgur.com/MSFhVE0.png'
            },
            {
                id: 2,
                title: 'A SITE FROM MID',
                desc: 'Requires you to crouch! This lineup allows Viper to safely play for time from mid. One of the biggest strengths of this lineup is being extremely close to the bomb sight while also being away from the expected, more standard lineup spots.',
                shortDesc: 'This lineup allows Viper to play for lineups by sitting besides boiler. This position allows Viper to quickly re-enter site.',
                video: 'IZNky8EF1xA',
                standImage: 'https://i.imgur.com/JmFBuO1.png',
                aimImage: 'https://i.imgur.com/U3Qr6GZ.png'
            },
            {
                id: 3,
                title: 'A SITE FROM BELT',
                desc: 'This lineup is very safe as it allows Viper to sit behind belt. Although it will be hard for enemies to run all the way to viper, it is equally long for Viper to re-enter site. However if the bomb is positioned correctly Viper can hold from ontop of belt.',
                shortDesc: 'This lineup is very safe as it completely provides Viper cover.',
                video: 'kR6ukvC7eJA',
                standImage: 'https://i.imgur.com/q9MyU25.png',
                aimImage: 'https://i.imgur.com/tfrZMO6.png'
            },
            {
                id: 4,
                title: 'B SITE FROM CUBBY',
                desc: 'This is the standard and popular lineup for B site. This spot provides a decent amount of protection from enemies trying to stop Viper but may still be vulernable to rushes.',
                shortDesc: 'This lineup is the standard lineup for B site.',
                video: 'iKjy5y19B4U',
                standImage: 'https://i.imgur.com/HmAaNuv.png',
                aimImage: 'https://i.imgur.com/KXtv8ax.png'
            },
            {
                id: 5,
                title: 'B SITE FROM MID',
                desc: 'Although this lineup seems very difficult, it becomes very easy to remember where to aim after practicing. This lineup requires you to aim at a small star aligned to the top-left of the bigger brighter star. The strength of this lineup is that it is very unexpected and can possible be used during rotation right after the standard B site lineup.',
                shortDesc: 'This unexpected lineup allows Viper to control site from mid.',
                video: 'dIQuNvjSmAM',
                standImage: 'https://i.imgur.com/ElNw4dd.png',
                aimImage: 'https://i.imgur.com/vNA3glV.png'
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

                    <div className='lineups-center-map-header' style={{
                        backgroundImage: `url(${mapInfo.mapImage})`
                    }}>

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
                                    <ReactPlayer url={`https://youtu.be/${currentLineup.video}`} loop={true} muted={false} controls={true} className='lineup-video' />
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

export default (MapPage);