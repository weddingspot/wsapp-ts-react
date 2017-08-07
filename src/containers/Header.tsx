import Header from '../components/Header';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as types from '../types';
import * as actions from '../actions';

const mapStateToProps = ({header: {isLoggedIn, isLocationsOpen}}: types.StoreState) => ({
    isLoggedIn,
    isLocationsOpen
});

const mapDispatchToProps = (dispatch: Dispatch<actions.ToggleHeaderLocations>) => ({
    toggleLocations: (isOpen: boolean) => dispatch(actions.toggleHeaderLocations(isOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);