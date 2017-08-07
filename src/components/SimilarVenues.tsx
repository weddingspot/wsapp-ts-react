import * as React from 'react';
import { Link } from 'react-router-dom';

import * as types from '../types';

export interface SimilarVenueProps {
    id: number;
    image: string;
    name: string;
    city: string;
    price: types.Price;
}

export interface Props {
    venues: Array<SimilarVenueProps>;
}

export function SimilarVenues({venues}: Props) {
    return (
        <div className="SimilarVenues" >
            <h3 className="SimilarVenues--headline">
                You May Also Like These Similar Venues
            </h3>
            {venues.map(({image, name, city, price, id}: SimilarVenueProps) => (
                <div className="SimilarVenues--venue" key={id}>
                    <Link to="/">
                        <img src={image} alt="" className="SimilarVenues--image" />
                        <h4 className="SimilarVenues--name">{name}</h4>
                        <h2 className="SimilarVenues--city">{city}</h2>
                        <span className="SimilarVenues--price">
                            from ${price.minPrice} for {price.maxGuests} guests
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SimilarVenues;