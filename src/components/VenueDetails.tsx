import * as React from 'react';
import { Link } from 'react-router-dom';
import * as types from '../types';
import Loader from './Loader';
import SimilarVenues from './SimilarVenues';
import ContactVenueModal from './ContactVenueModal';

export interface Props extends types.VenueDetailsState {
    selectImage: (imageId: number) => void;
    selectTab: (tabNum: number) => void;
}

export function VenueDetails(
    {
        selectImage,
        selectTab,
        currentImage,
        isLoading,

        images,
        ceremony,
        mapUrl,
        latitude,
        longtitude,
        timeRestricionOptions,
        reception,
        cateringOptions,
        alcoholOptions,
        currentImageId,
        similarVenues,
        name,
        styles,
        maxCapacity,
        services,
        amenities,
        capacities,
        catering,
        currentTab,
        alcohol,
        description,
        timeRestrictions,
        weddingCost,
        rentalFees,
        city,
        state,
        isContactModalOpen,
        address,
        postalCode,
    }: Props) {

    return (
        <div className="VenueDetails">

            {isLoading && <Loader />}

            <div className="Breadcrumbs">
                <ul className="fl-l">
                    <li><Link to="/">Northern California</Link></li>
                    <li><Link to="/">Monterey/Carmel Valley Wedding Venues</Link></li>
                    <li><Link to="/">{name}</Link></li>
                </ul>
                <div className="fl-r">
                    <Link to="/" className="Breadcrumbs--btn-link">BACK TO SEARCH RESULTS</Link>
                    <Link to="/" className="Breadcrumbs--btn-link">MY SAVED ESTIMATES</Link>
                </div>
            </div>

            <div className="VenueDetails--container">
                <div className="VenueDetails--main">
                    <div className="VenueDetails--headline">
                        <h2 className="VenueDetails--name">{name}</h2>
                        <h4 className="VenueDetails--location">{city}</h4>
                        <a href="#" className="fl-r VenueDetails--report">
                            <i className="fa fa-fw fa-flag" /> Report
                        </a>
                    </div>
                    <div className="Gallery">
                        <div className="Gallery--current">
                            <img src={currentImage.preview} alt="" />
                        </div>
                        <div className="Gallery--thumbnails-wrapper">
                            {images.map(({thumbnail, id}) => (
                                <div
                                    className="Gallery--thumbnail"
                                    key={id}
                                    onMouseEnter={(e: React.SyntheticEvent<HTMLElement>) => selectImage(id)}
                                >
                                    <img src={thumbnail} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="Gallery--meta">
                            <span className="Gallery--credits">Provided by {currentImage.credits}</span>
                            <Link to="/" className="Gallery--show-all-link fl-r">
                                SHOW ALL 50 PHOTOS <i className="fa fa-fw fa-search-plus" />
                            </Link>
                        </div>

                        <div className="mt-20" />

                        <SimilarVenues venues={similarVenues} />

                        <div className="VenueDetails--details">
                            <h3 className="VenueDetails--tabs-headline">{name} Details</h3>
                            <div className="VenueDetails--tabs-wrapper">

                                <div className="VenueDetails--tab-togglers">
                                    <a
                                        href="#"
                                        className={currentTab === 0 ? 'active' : ''}
                                        onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
                                            e.preventDefault();
                                            selectTab(0);
                                        }}
                                    >
                                        OVERVIEW
                                    </a>
                                    <a
                                        href="#"
                                        className={currentTab === 1 ? 'active' : ''}
                                        onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
                                            e.preventDefault();
                                            selectTab(1);
                                        }}
                                    >
                                        AMENITIES
                                    </a>
                                    <a
                                        href="#"
                                        className={currentTab === 2 ? 'active' : ''}
                                        onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
                                            e.preventDefault();
                                            selectTab(2);
                                        }}
                                    >
                                        VIDEOS
                                    </a>
                                </div>

                                <div
                                    className={'VenueDetails--tab' + (
                                        currentTab === 0 ? ' VenueDetails--tab__open' : '')}
                                >
                                    <h4>Description</h4>
                                    <p>
                                        {description}
                                    </p>

                                    <h4>Venue Style</h4>
                                    <p>
                                        {styles.map((style: types.Style) => style.name).join(', ')}
                                    </p>

                                    <h4>Services</h4>
                                    <p>
                                        {services.map((service: types.Service) => service.name).join(', ')}
                                    </p>

                                    <h4>Capacity</h4>
                                    {capacities.map(
                                        (capacity: string, index: number) => <div key={index}>{capacity}</div>)
                                    }

                                    <h4>Time Restrictions</h4>
                                    <p>
                                        {timeRestrictions}
                                    </p>

                                    <h4>Rental Fees</h4>
                                    <p>
                                        {rentalFees}
                                    </p>

                                    <h4>Wedding Cost</h4>
                                    <p>
                                        {weddingCost}
                                    </p>
                                    <h4>Catering</h4>
                                    <p>
                                        {catering}
                                    </p>

                                    <h4>Alcohol</h4>
                                    <p>
                                        {alcohol}
                                    </p>
                                </div>

                                <div
                                    className={'VenueDetails--tab' + (
                                        currentTab === 1 ? ' VenueDetails--tab__open' : '')}
                                >
                                    {amenities.map((amenitiesGroup) => (
                                        <div className="VenueDetails--amenities-group" key={amenitiesGroup.id}>
                                            <h4 className="VenueDetails--amenities-headline">{amenitiesGroup.name}</h4>
                                            <ul>
                                                {amenitiesGroup.children.map(amenity => (
                                                    <li key={amenity.id}>{amenity.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={'VenueDetails--tab' + (
                                        currentTab === 2 ? ' VenueDetails--tab__open' : '')}
                                >
                                    <iframe src="https://player.vimeo.com/video/200402913" width="640" height="360" />
                                </div>
                            </div>

                            <div className="mt-40" />
                            <div className="ta-center mb-15">
                                <Link to="/" className="VenueDetails--price-btn  ml-10 mr-10">
                                    PRICE THIS VENUE
                                </Link>

                                <Link to="/" className="VenueDetails--contact-btn">
                                    CONTACT VENUE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="VenueDetails--aside" >

                    <h3 className="VenueDetails--aside-headline">VENUE DETAILS</h3>

                    <div className="VenueDetails--aside-contacts">
                        <i className="fa fa-fw fa-map-marker" />
                        {address} {city}, {state} {postalCode}
                        <div>
                            <a href="#" className="VenueDetails--contact-link">
                                <i className="fa fa-fw fa-home" />
                                Website
                            </a>
                            <a href="#" className="VenueDetails--contact-link">
                                <i className="fa fa-fw fa-phone" />
                                Contact Info
                            </a>
                            <a href="#" className="VenueDetails--contact-link">
                                <i className="fa fa-fw fa-heart-o" />
                                Favorite
                            </a>
                        </div>
                    </div>

                    <div className="mt-15" />

                    <div className="VenueDetails--property">
                        <div className="VenueDetails--property-name">
                            Style:
                        </div>
                        <div className="VenueDetails--property-value">
                            {styles.map(style => <div key={style.id}>{style.name}</div>)}
                        </div>
                    </div>

                    <div className="VenueDetails--property">
                        <div className="VenueDetails--property-name">
                            Max Capacity:
                        </div>
                        <div className="VenueDetails--property-value">
                            {maxCapacity} guests
                        </div>
                    </div>
                    <div className="VenueDetails--property">
                        <div className="VenueDetails--property-name">
                            Ceremony:
                        </div>
                        <div className="VenueDetails--property-value">
                            {ceremony} guests
                        </div>
                    </div>
                    <div className="VenueDetails--property">
                        <div className="VenueDetails--property-name">
                            Reception:
                        </div>
                        <div className="VenueDetails--property-value">
                            {reception}
                        </div>
                    </div>
                    <div className="VenueDetails--property">
                        <div className="VenueDetails--property-name">
                            Catering Options:
                        </div>
                        <div className="VenueDetails--property-value">
                            {cateringOptions}
                        </div>
                    </div>
                    <div className="VenueDetails--property">
                        <div className="VenueDetails--property-name">
                            Alcohol Options:
                        </div>
                        <div className="VenueDetails--property-value">
                            {alcoholOptions}
                        </div>
                    </div>
                    <div className="VenueDetails--property">
                        <div className="VenueDetails--property-name">
                            Time Restrictions:
                        </div>
                        <div className="VenueDetails--property-value">
                            {timeRestricionOptions}
                        </div>
                    </div>

                    <Link to="/" className="VenueDetails--price-btn mb-10 mt-10">
                        PRICE THIS VENUE
                    </Link>

                    <Link to="/venue/12/contact/" className="VenueDetails--contact-btn">
                        CONTACT VENUE
                    </Link>
                    <div className="VenueDetails--map-wrapper">
                        <iframe
                            className="VenueDetails--map"
                            src={mapUrl}
                        />
                    </div>
                </div>
            </div>
            <div style={{display: 'none'}}>
                <ContactVenueModal isOpen={isContactModalOpen} name={name} id={12} />
            </div>
        </div>
    );
}

export default VenueDetails;