import * as React from 'react';
import { Link } from 'react-router-dom';

const newYorkLandscape = require('../assets/img/locations-grid/new-york-splash-landscape.jpg');
const manhattanSquare = require('../assets/img/locations-grid/manhattan-splash-square.jpg');

const longIslandSquare = require('../assets/img/locations-grid/long-island-splash-square.jpg');
const newJerseySquare = require('../assets/img/locations-grid/new-jersey-splash-landscape.jpg');

const brooklynLandscape = require('../assets/img/locations-grid/brooklyn-splash-landscape.jpg');
const philadelphiaSquare = require('../assets/img/locations-grid/philadelphia-splash-square.jpg');

const dcLandscape = require('../assets/img/locations-grid/dc-splash-landscape.jpg');
const bostonSquare = require('../assets/img/locations-grid/boston-splash-square.jpg');

export function LocationsGrid() {
    return (
        <div className="LocationsGrid">
            <div className="LocationsGrid--container">
                <h2 className="LocationsGrid--headline">
                    Plan Your Dream Wedding
                </h2>

                <div className="LocationsGrid--items">
                    <div className="LocationsGrid--item-wrapper LocationsGrid--item-wrapper-landscape">
                        <div className="LocationsGrid--item">
                            <img src={newYorkLandscape} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">NEW YORK</Link></h4>
                        </div>
                    </div>
                    <div className="LocationsGrid--item-wrapper">
                        <div className="LocationsGrid--item">
                            <img src={manhattanSquare} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">MANHATTAN</Link></h4>
                        </div>
                    </div>

                    <div className="LocationsGrid--item-wrapper">
                        <div className="LocationsGrid--item">
                            <img src={newJerseySquare} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">NEW JERSEY</Link></h4>
                        </div>
                    </div>

                    <div className="LocationsGrid--item-wrapper LocationsGrid--item-wrapper-landscape">
                        <div className="LocationsGrid--item">
                            <img src={longIslandSquare} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">LONG ISLAND</Link></h4>
                        </div>
                    </div>

                    <div className="LocationsGrid--item-wrapper LocationsGrid--item-wrapper-landscape">
                        <div className="LocationsGrid--item">
                            <img src={brooklynLandscape} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">BROOKLIN</Link></h4>
                        </div>
                    </div>

                    <div className="LocationsGrid--item-wrapper">
                        <div className="LocationsGrid--item">
                            <img src={philadelphiaSquare} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">PHILADELPHIA</Link></h4>
                        </div>
                    </div>

                    <div className="LocationsGrid--item-wrapper">
                        <div className="LocationsGrid--item">
                            <img src={bostonSquare} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">BOSTON</Link></h4>
                        </div>
                    </div>

                    <div className="LocationsGrid--item-wrapper LocationsGrid--item-wrapper-landscape">
                        <div className="LocationsGrid--item">
                            <img src={dcLandscape} alt="" />
                            <h4><Link to="/" className="LocationsGrid--link">DISTRICT OF COLUMBIA</Link></h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LocationsGrid;