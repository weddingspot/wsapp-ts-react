import * as React from 'react';
import { Link } from 'react-router-dom';

export function WeddingRegions() {
    return (
        <div className="WeddingRegions">
            <div className="WeddingRegions--container">
                <h3 className="WeddingRegions--headline">Where is Wedding Spot?</h3>
                <div className="WeddingRegions--row">
                    <div className="WeddingRegions--column">
                        <ul>
                            <li><Link to="/">Atlanta Wedding Venues</Link></li>
                            <li><Link to="/">Austin Wedding Venues</Link></li>
                            <li><Link to="/">Bay Area Wedding Venues</Link></li>
                            <li><Link to="/">Boston Wedding Venues</Link></li>
                            <li><Link to="/">Brooklyn Wedding Venues</Link></li>
                            <li><Link to="/">Chicago Wedding Venues</Link></li>
                            <li><Link to="/">Dallas Wedding Venues</Link></li>
                        </ul>
                    </div>
                    <div className="WeddingRegions--column">
                        <ul>
                            <li><Link to="/">Detroit Wedding Venues</Link></li>
                            <li><Link to="/">Hawaii (Big Island) Wedding Venues</Link></li>
                            <li><Link to="/">Houston Wedding Venues</Link></li>
                            <li><Link to="/">Kauai Wedding Venues</Link></li>
                            <li><Link to="/">Lake Tahoe Wedding Venues</Link></li>
                            <li><Link to="/">Long Island Wedding Venues</Link></li>
                            <li><Link to="/">Los Angeles Wedding Venues</Link></li>
                        </ul>
                    </div>
                    <div className="WeddingRegions--column">
                        <ul>
                            <li><Link to="/">Maryland Wedding Venues</Link></li>
                            <li><Link to="/">Massachusetts Wedding Venues</Link></li>
                            <li><Link to="/">Maui Wedding Venues</Link></li>
                            <li><Link to="/">Monterey Wedding Venues</Link></li>
                            <li><Link to="/">Napa Valley Wedding Venues</Link></li>
                            <li><Link to="/">New Jersey Wedding Venues</Link></li>
                            <li><Link to="/">New York Wedding Venues</Link></li>
                        </ul>
                    </div>
                    <div className="WeddingRegions--column">
                        <ul>
                            <li><Link to="/">New York City Wedding Venues</Link></li>
                            <li><Link to="/">Oauhu Wedding Venues</Link></li>
                            <li><Link to="/">Orange Country Wedding Venues</Link></li>
                            <li><Link to="/">Pennsylvania Wedding Venues</Link></li>
                            <li><Link to="/">Philadelphia Wedding Venues</Link></li>
                            <li><Link to="/">Portland Wedding Venues</Link></li>
                            <li><Link to="/">Sacramento Wedding Venues</Link></li>
                        </ul>
                    </div>
                    <div className="WeddingRegions--column">
                        <ul>
                            <li><Link to="/">San Antonio Wedding Venues</Link></li>
                            <li><Link to="/">San Diego Wedding Venues</Link></li>
                            <li><Link to="/">San Francisco Wedding Venues</Link></li>
                            <li><Link to="/">San Jose Wedding Venues</Link></li>
                            <li><Link to="/">Santa Barbara Wedding Venues</Link></li>
                            <li><Link to="/">Seattle Wedding Venues</Link></li>
                            <li><Link to="/">Virginia Wedding Venues</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="WeddingRegions--link-wrapper">
                     <Link to="/"> See all regions</Link>
                </div>
            </div>
        </div>
    );
}

export default WeddingRegions;