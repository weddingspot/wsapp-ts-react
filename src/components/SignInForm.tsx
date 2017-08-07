import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
    isOpen: boolean;
}

export function SignInForm() {
    return (
        <form action="">
            <h3 className="SignInForm--headline">Sign in</h3>
            <a href="#" className="SignInForm--fb-button">
                <i className="fa fa-fw fa-facebook" /> Connect with Facebook
            </a>
            <div className="SignInForm--or-wrapper">
                <span className="SignInForm--or-line" />
                <span className="SignInForm--or">OR</span>
            </div>

            <input className="SignInForm--input" type="text" placeholder="Email" />
            <input className="SignInForm--input" type="password" placeholder="Password" />

            <button className="SignInForm--submit">Sign In</button>
            <p>
                <span><Link to="/signup/">Create</Link> a Free account</span>
                <span className="fl-r"><Link to="/signup/">Forgot password?</Link></span>
            </p>
        </form>
    );
}
export default SignInForm;