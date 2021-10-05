import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import NavBar from './navbar';
import IPage from '../interfaces/page';


import './map.css'
import { SIGTERM } from 'constants';


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
                desc: 'Requires you to crouch! This lineup allows Viper to safely play for time from mid. One of the biggest strengths of this lineup is being extremely close to the spike while also being away from the expected, more standard lineup spots.',
                shortDesc: 'This lineup allows Viper to play for lineups by sitting besides boiler. This position allows Viper to quickly re-enter site.',
                video: 'IZNky8EF1xA',
                standImage: 'https://i.imgur.com/JmFBuO1.png',
                aimImage: 'https://i.imgur.com/U3Qr6GZ.png'
            },
            {
                id: 3,
                title: 'A SITE FROM BELT',
                desc: 'This lineup is very safe as it allows Viper to sit behind belt. Although it will be hard for enemies to run all the way to viper, it is equally long for Viper to re-enter site. However if the spike is positioned correctly Viper can hold from ontop of belt.',
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

    const bind = {
        map: 'BIND',
        region: 'MOROCCO',
        mapImage: 'https://i.imgur.com/yS2MMVM.png',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM SHORT',
                desc: 'This lineup is used from a common spot but provides decent protection from anyone pushing. Tucking into the cubby buys Viper a couple of extra seconds for her to use her lineups. It is worth noting that because the lineup is used so closely, it takes around 4 or more seconds for the poison to land.',
                shortDesc: 'This easy lineup allows Viper to control site while being super nearby.',
                video: 'gin4ZgrZmJM',
                standImage: 'https://i.imgur.com/hkxAjmG.png',
                aimImage: 'https://i.imgur.com/ZGjqBdw.png'
            },
            {
                id: 2,
                title: 'A SITE FROM SHOWER',
                desc: 'This lineup is great for being unexpected and is perfect for being a rotation lineup. This can be used immediately after the A Short lineup, preventing Viper from being caught.',
                shortDesc: 'This unexpected lineup is used outside of A Showers.',
                video: 'LZl2J_mWhVU',
                standImage: 'https://i.imgur.com/ecFAlng.png',
                aimImage: 'https://i.imgur.com/1YlHykI.png'
            },
            {
                id: 3,
                title: 'A SITE FROM SPAWN',
                desc: 'Although this lineup is rarely used, it can prove to be very helpful in some situations. This lineup can easily be used if Viper holds defender spawn or is flanking from B site.',
                shortDesc: "This tricky lineup is used from the enemy's spawnpoint.",
                video: '8nBW7qW4ai0',
                standImage: 'https://i.imgur.com/XfLrWGy.png',
                aimImage: 'https://i.imgur.com/NxJmyUK.png'
            },
            {
                id: 4,
                title: 'B SITE FROM HOOKAH',
                desc: "This is a standard lineup that's very useful for being close to the spike. Viper is able to quickly move into Hookah and easily peek the planted spike. Because this spot is so close to the site, expect that enemies may quickly push you.",
                shortDesc: "This is a standard lineup that's very useful for being close to the spike.",
                video: 'E6vNzK_k8PQ',
                standImage: 'https://i.imgur.com/Fzhx9Ok.png',
                aimImage: 'https://i.imgur.com/WSbcVki.png'
            },
            {
                id: 5,
                title: 'B SITE FROM LONG',
                desc: 'This lineup has the perfect amount of distance to protect Viper and allow her to peek the spike.',
                shortDesc: 'This easy lineup allows Viper to control site while being nearby.',
                video: 'DLTN_Wv1tLk',
                standImage: 'https://i.imgur.com/HGHbfYN.png',
                aimImage: 'https://i.imgur.com/DsSOicG.png'
            },
        ]
    }

    const haven = {
        map: 'HAVEN',
        region: 'BHUTAN',
        mapImage: 'https://i.imgur.com/7dBtv1T.png',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM LONG',
                desc: 'Because of this cubby in A Long, Viper is given protection from anyone pushing from site. The only angle Viper has to worry about is flank and A Short. Stand ontop of the sandbags in the first picture and aim on the first column in the second picture.',
                shortDesc: 'Standard lineup in which Viper is able to buy time from A Long.',
                video: 'Tei6dmbtJMI',
                standImage: 'https://i.imgur.com/5QVrANl.png',
                aimImage: 'https://i.imgur.com/E9202s4.png'
            },
            {
                id: 2,
                title: 'B SITE FROM SPAWN',
                desc: "This lineup is the most protective as it's used far away from the bomb site. After shooting both snake bites, run to mid window and hold bomb. Run into the corner with the pot in attacker spawn and shoot at the top of the golden bell. ",
                shortDesc: 'Although rarely used, this lineup can be used if spike is planted in the center of B Site.',
                video: 'quISQK3Yg3U',
                standImage: 'https://i.imgur.com/3fSDRGd.png',
                aimImage: 'https://i.imgur.com/BA31UjZ.png'
            },
            {
                id: 3,
                title: 'C SITE FROM LONG',
                desc: 'Many Viper lineups are used in C Long while this lineup provides a bit more protection by positioning outside of C Long. This also allows Viper to rotate to garage after shooting both Snike Bites for retake. Run to the item on the floor, against the wall as seen in the first picture. Then align the left side of the center line under the gas meter with the tip of the branch.',
                shortDesc: 'This lineup is used to buy time from outside C Long.',
                video: 'QGyGl9CXwY0',
                standImage: 'https://i.imgur.com/4niT5e6.png',
                aimImage: 'https://i.imgur.com/nePtP3W.png'
            },
            {
                id: 4,
                title: 'C SITE FROM MID',
                desc: 'The strength of this lineup is the ability for Viper to play post plant away from the expected and popular spots. Enemies will usually expect Viper to be positioned near C Long, but Viper can use this spot to avoid being pushed. Sit ontop of the corner of the bricks and align the gas meter bar to form a triangle.',
                shortDesc: 'Unexpected and unique lineup that will catch people off guard.',
                video: 'LJodRyQ0UuQ',
                standImage: 'https://i.imgur.com/YcU9Q7e.png',
                aimImage: 'https://i.imgur.com/87Avvlq.png'
            },
        ]
    }

    const split = {
        map: 'SPLIT',
        region: 'JAPAN',
        mapImage: 'https://i.imgur.com/tBXz3MG.png',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM MAIN',
                desc: 'Align yourself against the wall at the center of the right yellow beam. Position the gas meter count with the center of the metal colum bar. ',
                shortDesc: 'Standard lineup that allows Viper to place snike bots on A Site Default',
                video: 'zedcHWStJ0g',
                standImage: 'https://i.imgur.com/DaPAA3n.png',
                aimImage: 'https://i.imgur.com/sTSuGBS.png'
            },
            {
                id: 2,
                title: 'A SITE FROM MAIN (SCREEN)',
                desc: "Stand against the walls ontop of the flower plant in the corner. Position the bottom line/dot of Poison Cloud to be in the center of the two blue lines in the background and ontop of the metal bar at the bottom. ",
                shortDesc: 'This lineup is used to cover behind the screen on A Site',
                video: '5cQ7wrVJgnw',
                standImage: 'https://i.imgur.com/dPUHPGH.png',
                aimImage: 'https://i.imgur.com/fTrriTO.png'
            },
            {
                id: 3,
                title: 'B SITE FROM MAIN',
                desc: 'Position against the wall at the first metal column from the right. Aim at the bottom left corner of the L-shaped golden pipes.',
                shortDesc: 'Standard lineup to hold default on B Site',
                video: 'WUzKPUk3UMo',
                standImage: 'https://i.imgur.com/IcUuMqn.png',
                aimImage: 'https://i.imgur.com/AOdvxP6.png'
            },
            {
                id: 4,
                title: 'B SITE FROM HEAVEN',
                desc: "This lineup required control of B Heaven, but is strong especially in 1v1 scenarios. Align yourself at the center of the right metallic beam and aim at the center of the horizontal beam right before it meets the wall.",
                shortDesc: 'Unexpected lineup used to hold default from B Heaven',
                video: 'o-dN7E76D-U',
                standImage: 'https://i.imgur.com/fBT8nqO.png',
                aimImage: 'https://i.imgur.com/3dCm3Ga.png'
            },
        ]
    }





    const [mapInfo, setMapInfo] = useState(bind);
    const [currentLineup, setCurrentLineup] = useState(mapInfo.lineups[0])

    useEffect(() => {
        if (window.location.pathname === '/icebox') {
            setMapInfo(icebox)
        } else if (window.location.pathname === '/bind') {
            setMapInfo(bind)
        } else if (window.location.pathname === '/haven') {
            setMapInfo(haven)
        } else if (window.location.pathname === '/split') {
            setMapInfo(split)
        }
    }, [mapInfo])

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