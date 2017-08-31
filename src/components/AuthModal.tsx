import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import SignInForm from '../containers/SignInForm';
import RegisterForm from './RegisterForm';

export interface Props {
    isOpen: boolean;
}

export function AuthModal() {
    return (
        <div className="AuthModal">
            <div className="AuthModal--body">
                <Link to="/" className="AuthModal--close-link">
                    <i className="fa fa-fw fa-times" />
                </Link>
                <Route path="/signin/" component={SignInForm} />
                <Route path="/signup/" component={RegisterForm} />
            </div>
        </div>
    );
}

export default AuthModal;