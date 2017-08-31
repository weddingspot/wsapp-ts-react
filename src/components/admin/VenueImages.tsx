import * as React from 'react';
import * as types from '../../types';
import { Loader } from '../Loader';

export interface Props {
    images: Array<types.VendorImage>;
}

export function VenueImages({images}: Props) {
    return (
        <div className="VenueImages">
            {!images.length && <Loader />}
            <div className="VenueImages--container">
                <h3 className="VenueImages--headline">Venue Images</h3>
                <div className="VenueImages--wrapper">
                {images.map(({id, main_image, order, portrait_image}: types.VendorImage) => (
                    <div key={id} className="VenueImages--image">
                        <span className="VenueImages--order">{order}</span>
                        <div className="VenueImages--preview" >
                            <img
                                src={'http://local.wedding-spot.com:9000/static/' + (portrait_image || main_image)}
                                alt=""
                            />
                        </div>
                        <div className="VenueImages--info">
                            <ul>
                                <li><strong>Orientation: </strong> portrait</li>
                                <li><strong>Provided by: </strong> venue</li>
                                <li><strong>Status: </strong> approved</li>
                                <li><strong>Source: </strong> approved</li>
                                <li><strong>Credit: </strong> none</li>
                            </ul>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default VenueImages;