import * as React from 'react';
import { Link } from 'react-router-dom';

const huffingtonLogo = require('../assets/img/featured/huffington-white.png');
const pandoLogo = require('../assets/img/featured/pando-white.png');
const mashableLogo = require('../assets/img/featured/mashable-white.png');
const ventureLogo = require('../assets/img/featured/venturebeat-white.png');
const refineryLogo = require('../assets/img/featured/refinery29-white.png');
const sfchronicleLogo = require('../assets/img/featured/sfchronicle-white.png');
const sfBusinessTimesLogo = require('../assets/img/featured/sf-business-times-white.png');
const essenceLogo = require('../assets/img/featured/essence-white.png');
const nymagLogo = require('../assets/img/featured/nymag-white.png');
const incLogo = require('../assets/img/featured/inc-white.png');

export function Feautured() {
    return (
        <div className="Featured">
            <div className="Featured--container">
                <div className="Featured--headline">AS FEATURED IN</div>
                <div className="Featured--items-table">
                    <div className="Featured--row mt-15">
                        <div className="Featured--item">
                            <Link to="/" ><img src={huffingtonLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={pandoLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={mashableLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={ventureLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={refineryLogo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="Featured--row">
                        <div className="Featured--item">
                            <Link to="/" ><img src={sfchronicleLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={sfBusinessTimesLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={essenceLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={nymagLogo} alt="" /></Link>
                        </div>
                        <div className="Featured--item">
                            <Link to="/" ><img src={incLogo} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feautured;