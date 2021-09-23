import IPage from '../interfaces/page';

const NavBar: React.FunctionComponent<IPage> = props => {
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
        </div>

    )
}

export default NavBar;