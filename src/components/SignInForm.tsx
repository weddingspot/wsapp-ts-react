import * as React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, SubmitHandler, Field, WrappedFieldProps } from 'redux-form';

import Loader from './Loader';

export interface Props {
    handleSubmit: SubmitHandler<FormData>;
    error: string;
    submitting: boolean;
}

const validate = (values: {username?: string, password?: string}) => {
    const errors: {
      username?: string,
      password?: string,
    } = {};

    if (!values.username) {
        errors.username = 'This field is required.';
    }

    if (!values.password) {
        errors.password = 'This field is required.';
    }

    return errors;
};

declare type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & WrappedFieldProps;

function TextInput({input, meta: {touched, error}}: FieldProps) {
    return (
        <div>
            {touched && error && <span className="Error">{error}</span>}
            <input
                {...input}
                className={'TextInput w-100 mb-15' + (touched && error ? ' TextInput--error' : '')}
                type="text"
                placeholder="Email"
            />
        </div>
    );
}

function PasswordInput({input, meta: {touched, error}}: FieldProps) {
    return (
        <div>
            {touched && error && <span className="Error">{error}</span>}
            <input
                {...input}
                className={'TextInput w-100 mb-15' + (touched && error ? ' TextInput--error' : '')}
                type="Password"
                placeholder="Password"
            />
        </div>
    );
}

export function SignInForm({handleSubmit, error, submitting}: Props) {
    return (
        <div className="SignInForm">
            {submitting && <Loader />}
            <form action="" onSubmit={handleSubmit} >
                <h3 className="SignInForm--headline">Sign in</h3>
                <a href="#" className="SignInForm--fb-button">
                    <i className="fa fa-fw fa-facebook" /> Connect with Facebook
                </a>
                <div className="SignInForm--or-wrapper">
                    <span className="SignInForm--or-line" />
                    <span className="SignInForm--or">OR</span>
                </div>
                <Field
                    component={TextInput}
                    name="username"
                />
                <Field
                    component={PasswordInput}
                    name="password"
                />
                {error && <div className="Error Error--block mb-10">{error}</div>}
                <button className="SignInForm--submit">Sign In</button>
                <p>
                    <span><Link to="/signup/">Create</Link> a Free account</span>
                    <span className="fl-r"><Link to="/signup/">Forgot password?</Link></span>
                </p>
            </form>
        </div>

    );
}

interface SigninFormData extends FormData {
    username: string;
    password: string;
}

export default reduxForm<SigninFormData>({
    form: 'signin',
    validate,
})(SignInForm);