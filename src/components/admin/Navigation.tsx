import * as React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <div className="Navigation">
            <nav className="Navigation--nav">
                <ul>
                    <li><Link to="/twsadmin/venues/">Venues</Link></li>
                    <li><Link to="/twsadmin/users/">Users</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;