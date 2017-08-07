import * as React from 'react';
import { Link } from 'react-router-dom';
import { first } from '../utils/fp';

import { WeddingVenuesState } from '../types';
import { Loader } from './Loader';

const FILTER_ICONS = {
    Regions: 'map-marker',
    Styles: 'glass',
    Budget: 'database',
    Guests: 'users',
    Services: 'spoon',
    'Alcohol & Beverages': 'glass',
};

const venueIconImage = require('../assets/img/wedding-venues/icon.png');

export function WeddingVenues({venues, filters, selectedFilters, isLoading}: WeddingVenuesState) {
    return (
        <div className="WeddingVenues">
            {isLoading && <Loader />}
            <div className="WeddingVenues--container">
                <h1 className="WeddingVenues--headline">
                    Wedding Venues in Northern California
                </h1>

                <p className="WeddingVenues--results-count">932 matching your search</p>

                <div className="WeddingVenues--top-nav">
                    <div className="fl-l">
                        <div className="Pagination">
                            <a href="#" className="Pagination--prev">«</a>
                            <a href="#" className="Pagination--num">Prev</a>
                            <a href="#" className="Pagination--num">1</a>
                            <a href="#" className="Pagination--num active">2</a>
                            <a href="#" className="Pagination--num">3</a>
                            <a href="#" className="Pagination--num">4</a>
                            <a href="#" className="Pagination--num">5</a>
                            <a href="#" className="Pagination--num">Next</a>
                            <a href="#" className="Pagination--next">»</a>
                        </div>
                    </div>

                    <div className="fl-r">
                        <a href="#" className="WeddingVenues--list-toggler">
                            <i className="fa fa-list" /> List view
                        </a>
                        <a href="#" className="WeddingVenues--map-toggler">
                            <i className="fa fa-map" /> Map view
                        </a>
                    </div>
                </div>

                <div className="WeddingVenues--filters">
                    <a href="#" className="WeddingVenues--filters-clear">CLEAR ALL FILTERS</a>
                    {filters.map((groupFilter) => (
                        <div className="WeddingVenues--filters-group" key={groupFilter.id}>

                            <div className="WeddingVenues--filters-headline">
                                <h2>
                                    <i className={'fa fa-fw fa-' + FILTER_ICONS[groupFilter.name]} />
                                    {groupFilter.name}
                                    <i className="fa fa-fw fa-angle-down fl-r" />
                                </h2>
                            </div>

                            {groupFilter.children.length > 0 && groupFilter.children.map((filter) => (
                                <div key={filter.id}>
                                    {!filter.children.length ?
                                        <div className="">
                                            <input type="checkbox" name="filter" id={'checkbox_filter_' + filter.id} />
                                            <label htmlFor={'checkbox_filter_' + filter.id} >{filter.name}</label>
                                        </div>
                                        :
                                        <div >
                                            <div className="WeddingVenues--filters-subheadline">
                                                {filter.name}
                                            </div>
                                            {filter.children.map((subGroupFilter) => (
                                                <div
                                                    key={subGroupFilter.id}
                                                    className="WeddingVenues--filters-subgroup"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="filter"
                                                        id={'checkbox_filter_' + subGroupFilter.id}
                                                    />
                                                    <label htmlFor={'checkbox_filter_' + subGroupFilter.id} >
                                                        {subGroupFilter.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="WeddingVenues--venues">
                    {venues.map(venue => (
                        <div className="Venue" key={venue.id} >
                            <Link to={'/venue/' + venue.id + '/'} className="Venue--wrapper-link">
                                <div className="Venue--pic-wrapper">
                                    <img src={venue.image} alt="" />
                                </div>
                                <div className="Venue--details">
                                    <div className="Venue--headline">
                                        <div className="Venue--icon">
                                            <img src={venueIconImage} alt="" />
                                        </div>
                                        <div className="Venue--title">
                                            <h2 className="Venue--name">{venue.name}</h2>
                                            <h4 className="Venue--location">{venue.city} {venue.state}</h4>
                                        </div>
                                        <span className="Venue--favorite-btn">
                                            <i className="fa fa-heart" />
                                        </span>
                                    </div>
                                    <div className="Venue--meta">
                                        <div>
                                            <strong className="Venue--meta-name">Style:</strong>
                                            <span className="Venue--meta-value">
                                                {venue.styles.map(style => style.name).join(', ')}
                                            </span>
                                        </div>
                                        <div>
                                            <strong className="Venue--meta-name">Budget:</strong>
                                            <span className="Venue--meta-value">
                                                Starting from ${first(venue.prices).minPrice} to
                                                ${' ' + first(venue.prices).maxPrice + ' '}
                                                for {first(venue.prices).maxGuests} guests
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Venue--description">
                                        {venue.description}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WeddingVenues;