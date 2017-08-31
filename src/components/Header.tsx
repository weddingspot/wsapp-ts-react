import * as React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../assets/img/logo-dark.png');

export interface Props {
    isLoggedIn: boolean;
    isLocationsOpen: boolean;
    toggleLocations: (isOpen: boolean) => void;
}

export function Header({isLoggedIn, isLocationsOpen, toggleLocations}: Props) {
    return (
        <div className="Header">
            <div className="Header--logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>

            <nav className="Header--nav">
                <div className="Header--nav-link">
                    <Link
                        to="/locations/"
                        onClick={e => {
                            e.preventDefault();
                            toggleLocations(!isLocationsOpen);
                        }}
                    >
                        Locations
                        <i className="fa fa-fw fa-caret-down" />
                    </Link>
                    <div className={'Header--dropdown' + (isLocationsOpen ? ' Header--dropdown__open' : '')}>
                        <ul className="Header--locations-nav">
                            <li><Link to="/">Alabama</Link></li>
                            <li><Link to="/">Alaska</Link></li>
                            <li><Link to="/">Arizona</Link></li>
                            <li><Link to="/">Arkanzaz</Link></li>
                            <li><Link to="/">California (Northern)</Link></li>
                            <li><Link to="/">California (Southern)</Link></li>
                            <li><Link to="/">Colorado</Link></li>
                            <li><Link to="/">Connecticut</Link></li>
                            <li><Link to="/">Delaware</Link></li>
                            <li><Link to="/">District of Columbia</Link></li>
                            <li><Link to="/">Florida</Link></li>
                        </ul>
                        <ul className="Header--locations-nav">
                            <li><Link to="/">Georgia</Link></li>
                            <li><Link to="/">Hawaii</Link></li>
                            <li><Link to="/">Idaho</Link></li>
                            <li><Link to="/">Illinois</Link></li>
                            <li><Link to="/">Indiana</Link></li>
                            <li><Link to="/">Iowa</Link></li>
                            <li><Link to="/">Kansas</Link></li>
                            <li><Link to="/">Kentucky</Link></li>
                            <li><Link to="/">Louisiana</Link></li>
                            <li><Link to="/">Maine</Link></li>
                            <li><Link to="/">Maryland</Link></li>
                        </ul>
                        <ul className="Header--locations-nav">
                            <li><Link to="/">Massachuesetts</Link></li>
                            <li><Link to="/">Michigan</Link></li>
                            <li><Link to="/">Minnesota</Link></li>
                            <li><Link to="/">Mississipi</Link></li>
                            <li><Link to="/">Missoury</Link></li>
                            <li><Link to="/">Montana</Link></li>
                            <li><Link to="/">Nebraska</Link></li>
                            <li><Link to="/">Nevada</Link></li>
                            <li><Link to="/">New Hampshire</Link></li>
                            <li><Link to="/">New Jersey</Link></li>
                            <li><Link to="/">New Mexico</Link></li>
                        </ul>
                        <ul className="Header--locations-nav">
                            <li><Link to="/">New York</Link></li>
                            <li><Link to="/">North Carolina</Link></li>
                            <li><Link to="/">North Dacota</Link></li>
                            <li><Link to="/">Ohio</Link></li>
                            <li><Link to="/">Oklahoma</Link></li>
                            <li><Link to="/">Oregon</Link></li>
                            <li><Link to="/">Pennsylvania</Link></li>
                            <li><Link to="/">Rhode Island</Link></li>
                            <li><Link to="/">South Carolina</Link></li>
                            <li><Link to="/">South Dakota</Link></li>
                            <li><Link to="/">Tennessee</Link></li>
                        </ul>
                        <ul className="Header--locations-nav">
                            <li><Link to="/">Texas</Link></li>
                            <li><Link to="/">Utah</Link></li>
                            <li><Link to="/">Vermont</Link></li>
                            <li><Link to="/">Virginia</Link></li>
                            <li><Link to="/">Washington</Link></li>
                            <li><Link to="/">West Virginia</Link></li>
                            <li><Link to="/">Wisconsin</Link></li>
                            <li><Link to="/">Wyoming</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="Header--nav fl-r">
                <div className="Header--nav-link Header--nav-link__muted">
                    <Link to="/locations/">Join as a Venue</Link>
                </div>

                <div className="Header--nav-link-separator" />

                <div className="Header--nav-link">
                    <Link to="/wedding-venues/">Browse Venues</Link>
                </div>
                <div className="Header--nav-link">
                    <Link to="/locations/">About</Link>
                </div>
                {!isLoggedIn &&
                    <div className="Header--nav-link">
                        <Link to="/signin/">Sign In</Link>
                    </div>
                }
            </nav>
        </div>
    );
}

export default Header;