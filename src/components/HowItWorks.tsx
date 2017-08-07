import * as React from 'react';
import { Link } from 'react-router-dom';

const searchImg = require('../assets/img/how-it-works/search.png');
const priceImg = require('../assets/img/how-it-works/price-tag.png');
const piggyBankImg = require('../assets/img/how-it-works/piggy-bank.png');

export function HowItWorks() {
    return (
        <div className="HowItWorks">
            <h3 className="HowItWorks--headline">How It Works</h3>

            <div className="HowItWorks--column">
                <img src={searchImg} alt="" className="HowItWorks--icon" />
                <h4 className="HowItWorks--column-headline">Search</h4>
                <p className="HowItWorks--text">
                    Find your perfect wedding venue
                    without all the stress. Search
                    by location, budget, styles,
                    and capacity.
                </p>

                <p className="HowItWorks--text">
                    <Link to="/search/" className="HowItWorks--link">Learn More</Link>
                </p>
            </div>

            <div className="HowItWorks--column">
                <img src={priceImg} alt="" className="HowItWorks--icon" />
                <h4 className="HowItWorks--column-headline">Price</h4>
                <p className="HowItWorks--text">
                    Build out your ideal wedding
                    and get a budget
                    estimate based on your guest count and selected options.
                </p>
                <p className="HowItWorks--text">
                    <Link to="/search/" className="HowItWorks--link">Learn More</Link>
                </p>
            </div>

            <div className="HowItWorks--column">
                <img src={piggyBankImg} alt="" className="HowItWorks--icon" />
                <h4 className="HowItWorks--column-headline">Discounts</h4>
                <p className="HowItWorks--text">
                    Get access to exclusive deals
                    and discounts and save money on venue fees.
                </p>

                <p className="HowItWorks--text">
                    <Link to="/search/" className="HowItWorks--link">Learn More</Link>
                </p>
            </div>
        </div>
    );
}

export default HowItWorks;