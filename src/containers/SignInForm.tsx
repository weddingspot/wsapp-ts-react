import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SignInForm from '../components/SignInForm';
import { submitLogin, AuthAction } from '../actions/auth';
import * as types from '../types';
import {
    SubmissionError,
    SubmissionErrorConstructor,
} from 'redux-form';

interface SigninError {
    [fieldName: string]: string | string[];
}

const SigninSubmissionError = SubmissionError as SubmissionErrorConstructor<SigninError>;

export interface Props extends types.WeddingVenuesState {
    login: (username: string, password: string) => Promise<{}>;
    isLoggedIn: boolean;
    loginFailError: string;
}

export interface State {

}

const mapStateToProps = ({}: types.StoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<AuthAction>) => ({
    login: (username: string, password: string) => dispatch(submitLogin(username, password)),
});

class SignInFormContainer extends React.Component<Props, State> {
    handleSubmit(data: {username: string, password: string}): Promise<{}> {
        return this.props.login(data.username, data.password).catch(error => {
            throw new SigninSubmissionError({
                '_error': error
            });
        });
    }
    render() {
        return (
            <SignInForm onSubmit={(data: {username: string, password: string}) => this.handleSubmit(data)} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormContainer);
