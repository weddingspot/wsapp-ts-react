import * as React from 'react';
import { Link } from 'react-router-dom';

import { range } from '../../utils/fp';

import * as types from '../../types';

export interface Props {
    vendors: Array<types.Vendor>;
    currentPage: number;
    count: number;
}

export function Venues({vendors, count, currentPage}: Props) {
    const pagesCount: number = count / 20;

    let pagesRange = [];
    let start = 1;
    let end = currentPage + 10;

    if (pagesCount > 20) {
        if (currentPage <= 10) {
            start = 1;
        } else {
            start = currentPage - 10;
        }
    }
    pagesRange = range(start, end);

    return (
        <div className="AdminVenues">
            <h4 className="AdminVenues--headline">List of all registered venues.</h4>

            <ul className="AdminVenues--list">
                {vendors.map((vendor: types.Vendor) => (
                    <li key={vendor.id} >
                        <Link to={'/twsadmin/venues/' + vendor.id + '/'}>{vendor.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="Pagination mb-15">
                <a href="#" className="Pagination--prev">«</a>
                <a href="#" className="Pagination--num">Prev</a>
                {pagesRange.map((n: number) =>
                    <Link
                        key={n}
                        to={'/twsadmin/venues/?page=' + n}
                        className={'Pagination--num ' + (currentPage === n ? ' active' : '')}
                    >
                    {n}
                    </Link>
                )}
                <a href="#" className="Pagination--num">Next</a>
                <a href="#" className="Pagination--next">»</a>
            </div>
        </div>
    );
}

export default Venues;