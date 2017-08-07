import * as React from 'react';
import { Link } from 'react-router-dom';

const weddingSpotLogo = require('../assets/img/footer/logo.png');
const honeybookLogo = require('../assets/img/footer/honeybook-logo.png');

const facebookIcon = require('../assets/img/footer/facebook.png');
const instagramIcon = require('../assets/img/footer/instagram.png');
const twitterIcon = require('../assets/img/footer/twitter.png');
const linkedinIcon = require('../assets/img/footer/linkedin.png');
const pinterestIcon = require('../assets/img/footer/pinterest.png');

export function Footer() {
    return (
        <div className="Footer">
            <div className="Footer--container">

                <div className="Footer--trademarks">
                    <div className="Footer--logo-wrapper">
                        <Link to="/" className="Footer--ws-logo"><img src={weddingSpotLogo} alt="" /></Link>
                        <span className="Footer--trademarks-separator">|</span>
                        <Link to="/" className="Footer--honeybook-logo"><img src={honeybookLogo} alt="" /></Link>
                    </div>
                    <div className="Footer--copyright">© 2017 HoneyBook Inc.</div>
                    <div className="Footer--terms-links">
                        <Link to="/">privacy policy</Link>
                        <span className="Footer--terms-links-separator">|</span>
                        <Link to="/">terms of use</Link>
                    </div>
                    <div className="Footer--socials-wrapper">
                         <Link to="/" className="Footer--social-link">
                             <img src={facebookIcon} alt="" />
                         </Link>
                         <Link to="/" className="Footer--social-link">
                             <img src={instagramIcon} alt="" />
                         </Link>
                         <Link to="/" className="Footer--social-link">
                             <img src={twitterIcon} alt="" />
                         </Link>
                         <Link to="/" className="Footer--social-link">
                             <img src={linkedinIcon} alt="" />
                         </Link>
                         <Link to="/" className="Footer--social-link">
                             <img src={pinterestIcon} alt="" />
                         </Link>
                    </div>
                </div>

                <div className="Footer--nav">
                    <ul>
                        <li className="Footer--nav-headline">Wedding Spot</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Careers</Link></li>
                    </ul>
                    <ul>
                        <li className="Footer--nav-headline">Services</li>
                        <li><Link to="/">Find Venue</Link></li>
                        <li><Link to="/">Venues By Region</Link></li>
                        <li><Link to="/">Guest List Manager</Link></li>
                    </ul>
                    <ul>
                        <li className="Footer--nav-headline">News</li>
                        <li><Link to="/">Press Realeases</Link></li>
                        <li><Link to="/">In The News</Link></li>
                        <li><Link to="/">Spot Blog</Link></li>
                    </ul>
                    <ul>
                        <li className="Footer--nav-headline">Terms</li>
                        <li><Link to="/">Terms Of Use</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                    <ul>
                        <li className="Footer--nav-headline">Contact Us</li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">How It Works</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;