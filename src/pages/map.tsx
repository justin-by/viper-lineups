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
                desc: 'Run to the corner of the right lamp and aim at where the stair meets the bottom-left corner of the highlighted triangle. This lineup allows Viper to safely play for time by hiding behind A Ramp. This lineup provides great protection and holds an element of surprise. Viper can quickly re-enter site through either stairs or screen.',
                shortDesc: 'This lineup allows Viper to play for lineups by sitting besides A Stairs. This position allows Viper to quickly re-enter site.',
                video: 'YmT5g1QgVns',
                standImage: 'https://i.imgur.com/nfFxmKP.png',
                aimImage: 'https://i.imgur.com/MSFhVE0.png'
            },
            {
                id: 2,
                title: 'A SITE FROM MID',
                desc: 'Requires you to crouch! Run to the corner of the box besides boiler and aim at the first open segment of the blue beams. This lineup allows Viper to safely play for time from mid. One of the biggest strengths of this lineup is being extremely close to the spike while also being away from the expected, more standard lineup spots.',
                shortDesc: 'This lineup allows Viper to play for lineups by sitting besides boiler. This position allows Viper to quickly re-enter site.',
                video: 'IZNky8EF1xA',
                standImage: 'https://i.imgur.com/JmFBuO1.png',
                aimImage: 'https://i.imgur.com/U3Qr6GZ.png'
            },
            {
                id: 3,
                title: 'A SITE FROM BELT',
                desc: 'Position against the ramp, right in front of the fourth arrow. Aim at the tip of the same fourth arrow.This lineup is very safe as it allows Viper to sit behind belt.',
                shortDesc: 'This lineup is very safe as it completely provides Viper cover.',
                video: 'kR6ukvC7eJA',
                standImage: 'https://i.imgur.com/q9MyU25.png',
                aimImage: 'https://i.imgur.com/tfrZMO6.png'
            },
            {
                id: 4,
                title: 'B SITE FROM CUBBY',
                desc: 'Position at the corner where the metal beams and wall meet. Align the left edge of the right short HUD line to the bottom right corner of the green box. This is the standard and popular lineup for B site. This spot provides a decent amount of protection from enemies trying to stop Viper but may still be vulernable to rushes.',
                shortDesc: 'This lineup is the standard lineup for B site.',
                video: 'iKjy5y19B4U',
                standImage: 'https://i.imgur.com/HmAaNuv.png',
                aimImage: 'https://i.imgur.com/KXtv8ax.png'
            },
            {
                id: 5,
                title: 'B SITE FROM MID',
                desc: 'Sit against the center of the blue box at mid. Aim at the very faint, small star that is to the top-left of the bigger star. Although this lineup seems very difficult, it becomes very easy to remember where to aim after practicing.',
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
                desc: 'Sit in the brick corner and align the crosshair to the right of the bottom-right edge of the metal roof. This lineup is used from a common spot but provides decent protection from anyone pushing. Tucking into the cubby buys Viper a couple of extra seconds for her to use her lineups.',
                shortDesc: 'This easy lineup allows Viper to control site while being super nearby.',
                video: 'gin4ZgrZmJM',
                standImage: 'https://i.imgur.com/hkxAjmG.png',
                aimImage: 'https://i.imgur.com/ZGjqBdw.png'
            },
            {
                id: 2,
                title: 'A SITE FROM SHOWER',
                desc: 'Align yourself at the corner of the smaller wooden box. Position the tip of the poison cloud icon to the bottom of the leaf. This lineup is great for being unexpected and is perfect for being a rotation lineup. This can be used immediately after the A Short lineup, preventing Viper from being caught.',
                shortDesc: 'This unexpected lineup is used outside of A Showers.',
                video: 'LZl2J_mWhVU',
                standImage: 'https://i.imgur.com/ecFAlng.png',
                aimImage: 'https://i.imgur.com/1YlHykI.png'
            },
            {
                id: 3,
                title: 'A SITE FROM SPAWN',
                desc: 'Position at the corner of where the barrels and wall meet. Position the top edge of the last segment line of the gas meter bar to the metal roof corner. Although this lineup is rarely used, it can prove to be very helpful in some situations. This lineup can easily be used if Viper holds defender spawn or is flanking from B site.',
                shortDesc: "This tricky lineup is used from the enemy's spawnpoint.",
                video: '8nBW7qW4ai0',
                standImage: 'https://i.imgur.com/XfLrWGy.png',
                aimImage: 'https://i.imgur.com/NxJmyUK.png'
            },
            {
                id: 4,
                title: 'B SITE FROM HOOKAH',
                desc: "Position at the corner of the box and angle the top-right line of the Health HUD to the top corner of the roof. This is a standard lineup that's very useful for being close to the spike. Viper is able to quickly move into Hookah and easily peek the planted spike. Because this spot is so close to the site, expect that enemies may quickly push you.",
                shortDesc: "This is a standard lineup that's very useful for being close to the spike.",
                video: 'E6vNzK_k8PQ',
                standImage: 'https://i.imgur.com/Fzhx9Ok.png',
                aimImage: 'https://i.imgur.com/WSbcVki.png'
            },
            {
                id: 5,
                title: 'B SITE FROM LONG',
                desc: 'Hug the corner of the fountain as shown in the first picture. Then align the top-right line of the Health HUD to the bottom of the camera. This lineup has the perfect amount of distance to protect Viper and allow her to peek the spike.',
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
                desc: "Run into the corner with the pot in attacker spawn and shoot at the top of the golden bell. This lineup is the most protective as it's used far away from the bomb site. After shooting both snake bites, run to mid window and hold the spike.",
                shortDesc: 'Although rarely used, this lineup can be used if spike is planted in the center of B Site',
                video: 'quISQK3Yg3U',
                standImage: 'https://i.imgur.com/3fSDRGd.png',
                aimImage: 'https://i.imgur.com/BA31UjZ.png'
            },
            {
                id: 3,
                title: 'C SITE FROM LONG',
                desc: 'Run to the item on the floor, against the wall as seen in the first picture. Then align the left side of the center line under the gas meter with the tip of the branch. Many Viper lineups are used in C Long while this lineup provides a bit more protection by positioning outside of C Long.',
                shortDesc: 'This lineup is used to buy time from outside C Long',
                video: 'QGyGl9CXwY0',
                standImage: 'https://i.imgur.com/4niT5e6.png',
                aimImage: 'https://i.imgur.com/nePtP3W.png'
            },
            {
                id: 4,
                title: 'C SITE FROM MID',
                desc: 'Sit ontop of the corner of the bricks and align the gas meter bar to form a triangle. The strength of this lineup is the ability for Viper to play post plant away from the expected and popular spots. Enemies will usually expect Viper to be positioned near C Long, but Viper can use this spot to avoid being pushed. ',
                shortDesc: 'Unexpected and unique lineup that will catch people off guard',
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
                desc: "Align yourself at the center of the right metallic beam and aim at the center of the horizontal beam right before it meets the wall. This lineup requires control of B Heaven, but is strong especially in 1v1 scenarios.",
                shortDesc: 'Unexpected lineup used to hold default from B Heaven',
                video: 'o-dN7E76D-U',
                standImage: 'https://i.imgur.com/fBT8nqO.png',
                aimImage: 'https://i.imgur.com/3dCm3Ga.png'
            },
        ]
    }

    const ascent = {
        map: 'ASCENT',
        region: 'ITALY',
        mapImage: 'https://i.imgur.com/G3xyT7A.png',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM MAIN',
                desc: 'Align yourself against the center of the bycicle. Aim at where the tip of the flag pole and roof column meet. This lineup provides decent protection as enemies have to push main to stop Viper. ',
                shortDesc: 'This standard lineup is used to cover A Site Default',
                video: 'W9RuuYmlYH4',
                standImage: 'https://i.imgur.com/QG6pSBO.png',
                aimImage: 'https://i.imgur.com/auOBhk2.png'
            },
            {
                id: 2,
                title: 'A SITE FROM CAT',
                desc: "Position yourself at the corner of cat and angle the top-right corner of the gas meter bar with the top-right corner of the metal pipe.",
                shortDesc: 'This lineup can catch enemies off guard by positioning on Cat',
                video: '64HJGx82uCY',
                standImage: 'https://i.imgur.com/vK5PFWw.png',
                aimImage: 'https://i.imgur.com/orzpd1D.png'
            },
            {
                id: 3,
                title: 'B SITE FROM OUTSIDE MAIN',
                desc: 'Position yourself at the corner of the wooden boxes on the ground. Position the left edge of the health hud line on the small black dot of the wooden roof. This lineup may seem difficult to learn but the spot is easily remembered once you use it.',
                shortDesc: 'This lineup is very effective by providing a lot of protection and room for Viper to retake site',
                video: '3vs9ojoC5o0',
                standImage: 'https://i.imgur.com/EiCwXbU.png',
                aimImage: 'https://i.imgur.com/uMRRKgt.png'
            },
            {
                id: 4,
                title: 'B SITE FROM PIZZA',
                desc: "Position yourself at the corner of Pizza and aim at where the top-left and bottom-right corners of the metal roof meet.",
                shortDesc: 'This lineup allows Viper to play away from common spots and hold site from Pizza',
                video: 'PBxjAyqNhOY',
                standImage: 'https://i.imgur.com/r4lL6sT.png',
                aimImage: 'https://i.imgur.com/81BRWAM.png'
            },
        ]
    }

    const breeze = {
        map: 'BREEZE',
        region: 'ATLANTIC OCEAN',
        mapImage: 'https://i.imgur.com/5KjR8hE.png',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM CAVE',
                desc: 'Position at the corner ontop of the boulders. Aim at the big gap indicated in the second image. This lineup seems difficult but it gets much easier the more you practice.',
                shortDesc: 'Standard lineup used to cover A Site from outside cave',
                video: 'zpBtBDHAF9Q',
                standImage: 'https://i.imgur.com/SKSoMAV.png',
                aimImage: 'https://i.imgur.com/qplnqGk.png'
            },
            {
                id: 2,
                title: 'A SITE FROM CAVE (MIDDLE)',
                desc: "Position at the corner ontop of the boulders. There are two similar leaves sticking out, aim at the tip of the first one. This lineup is similar to the default lineup but will cover the spot in between the two pyramids.",
                shortDesc: 'Variation of the A Site Default lineup to cover in between the two pyramids on site',
                video: 'G8ekMvRGUTY',
                standImage: 'https://i.imgur.com/SKSoMAV.png',
                aimImage: 'https://i.imgur.com/3aanUDu.png'
            },
            {
                id: 3,
                title: 'B SITE FROM OUTSIDE MAIN',
                desc: 'Align yourself at the wall where the pointy mark is. Position the gas meter count above the cannon. This lineup is very easy but can be exposed to enemies flanking.',
                shortDesc: 'This standard lineup covers default on B Site',
                video: '4NZWIJVrvw8',
                standImage: 'https://i.imgur.com/x8iqmJR.png',
                aimImage: 'https://i.imgur.com/0MwzwZR.png'
            },
            {
                id: 4,
                title: 'B SITE FROM SPAWN',
                desc: "Requires jump throw! Position yourself against the wall at the center of the white bricks. Align the top-left corner of the gas meter bar with the top-left corner of the brick wall.",
                shortDesc: 'This lineup is far away from site but provides protection against enemies flanking',
                video: 'OtmaYBDjEDc',
                standImage: 'https://i.imgur.com/aU0MoLx.png',
                aimImage: 'https://i.imgur.com/b2MWivA.png'
            },
        ]
    }

    const fracture = {
        map: 'FRACTURE',
        region: 'USA',
        mapImage: 'https://i.imgur.com/jR9u5Qm.png',
        lineups: [
            {
                id: 1,
                title: 'A SITE FROM DISH',
                desc: 'Align yourself at the line ontop of the left boulders on the image. Aim at the center of the metal column.',
                shortDesc: 'This lineup allows Viper to control default on A Site from Attacker Side Bridge.',
                video: 'cGQqwgYb5xs',
                standImage: 'https://i.imgur.com/aDeQ6lY.png',
                aimImage: 'https://i.imgur.com/klYEZHC.png'
            },
            {
                id: 2,
                title: 'A SITE FROM ROPE',
                desc: "Position at the corner line right besides door. Align the bottom-right corner of the gas meter bar to the bottom-right corner on the metal roof.",
                shortDesc: 'This lineup allows Viper to play A Site from Rope on Attacker Side Spawn',
                video: 'CaNF3zXl41Q',
                standImage: 'https://i.imgur.com/DGlGV1V.png',
                aimImage: 'https://i.imgur.com/Ky3OhRn.png'
            },
            {
                id: 3,
                title: 'B SITE FROM ARCADE',
                desc: 'Position at the corner ontop of the plant and aim at the big gap below the second leaf from the left.',
                shortDesc: 'This lineup allows Viper to play for B Site at Arcade on Attacker Side Bridge.',
                video: 'tFdgcum-PwI',
                standImage: 'https://i.imgur.com/FsgH3qt.png',
                aimImage: 'https://i.imgur.com/fNYcPjv.png'
            },
            {
                id: 4,
                title: 'B SITE FROM SPAWN',
                desc: "Position against the wall at the line. Align the top edge of the Snake Bite ability icon with the metal edge sticking out from the top of the wall.",
                shortDesc: 'This lineup is used from Tree to cover B Site from Attacker Side Spawn.',
                video: 'fN6fkditAas',
                standImage: 'https://i.imgur.com/s6K2Qur.png',
                aimImage: 'https://i.imgur.com/PafjzbC.png'
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
        } else if (window.location.pathname === '/ascent') {
            setMapInfo(ascent)
        } else if (window.location.pathname === '/breeze') {
            setMapInfo(breeze)
        } else if (window.location.pathname === '/fracture') {
            setMapInfo(fracture)
        }
    }, [])

    useEffect(() => {
        setCurrentLineup(mapInfo.lineups[0])
    },[mapInfo])

    return (
        <>
            <NavBar name={'NavBar'} />

            <div className='lineups-background'>
                <div className='lineups-left-container'>
                    {mapInfo && mapInfo.lineups.map(lineup => (

                        <div className='lineup-select' onClick={() => {
                            setCurrentLineup(lineup)
                        }
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
                                    <ReactPlayer url={`https://youtu.be/${currentLineup.video}`} loop={true} muted={false} controls={true} width='100%' height='100%' className='lineup-video' />
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