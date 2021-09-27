import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import IPage from '../interfaces/page';

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    


    return (
        <>
            <NavBar name={'NavBar'} />
        </>
    );
}

export default withRouter(AboutPage);