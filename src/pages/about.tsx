import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    // const [message, setMessage] = useState<string>('');


    return (
        <div>
            <p>HOME!</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    );
}

export default withRouter(AboutPage);