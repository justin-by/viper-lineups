import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import IPage from '../interfaces/page';

import './bind.css'

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const BindPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {



    return (
        <>
            <NavBar name={'NavBar'} />

            <div className='lineups-background'>
                <div className='lineups-left-container'>
                A
                </div>
                <div className='lineups-wrapper'>
                    <div className='lineups-center-map-header'>

                    </div>
                    <div className='lineups-center-container'>

                    </div>
                    <div className='lineups-right-container'>

                    </div>
                </div>

            </div>
        </>
    );
}

export default withRouter(BindPage);