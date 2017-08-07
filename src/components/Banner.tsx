import * as React from 'react';

export function Banner() {
    return (
        <div className="Banner">
            <div className="Banner--search">
                <h2>Find Your Perfect Venue</h2>
                <h4>Browse and price out thousands of venues.</h4>

                <div className="Banner--search-input-wrapper">
                    <input
                        type="text"
                        className="Banner--search-input"
                        placeholder="Search by venue, location or style"
                    />
                    <a href="#" className="Banner--search-btn">Find Venues</a>
                </div>
            </div>
        </div>
    );
}

export default Banner;