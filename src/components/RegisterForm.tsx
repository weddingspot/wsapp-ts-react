import * as React from 'react';
import { Link } from 'react-router-dom';

export function RegisterForm() {
    return (
        <form action="">
            <h3 className="SignInForm--headline">Find your perfect venue</h3>
            <h4 className="SignInForm--sub-headline">Search, price & compare thousands of venues.</h4>
            <a href="#" className="SignInForm--fb-button">
                <i className="fa fa-fw fa-facebook" /> Connect with Facebook
            </a>
            <div className="SignInForm--or-wrapper">
                <span className="SignInForm--or-line" />
                <span className="SignInForm--or">OR</span>
            </div>
            <div className="row">
                <div className="col-50">
                    <input className="SignInForm--input" type="text" placeholder="First Name" />
                </div>
                <div className="col-50">
                    <input className="SignInForm--input" type="text" placeholder="Last Name" />
                </div>
            </div>
            <input className="SignInForm--input" type="text" placeholder="Email" />
            <input className="SignInForm--input" type="password" placeholder="Password" />

            <button className="SignInForm--submit">Sign Up</button>
            <p className="clearfix">
                <span className="fl-l">
                    Do you represent a venue? <br />
                    <Link to="/signin/">Request access</Link>
                </span>
                <span className="fl-r">Already a member? <br /> <Link to="/signin/">Sign In</Link></span>
            </p>
        </form>
    );
}
export default RegisterForm;