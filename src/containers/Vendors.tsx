import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as types from '../types';
import { VendorListAction, loadVendorsList } from '../actions/vendors';

import Venues from '../components/admin/Venues';

export type Props = {
    vendors: types.VendorsListState,
    currentPage: number,
    loadVendors: (arg: {page?: number}) => void,
};

export type OwnProps = {
    currentPage: null | number;
};

const mapStateToProps = (state: types.StoreState, ownProps: OwnProps) => ({
    vendors: state.vendors,
    currentPage: ownProps.currentPage,
});

const mapDispatchToProps = (dispatch: Dispatch<VendorListAction>) => ({
    loadVendors: (arg: {page?: number} = {}) => {
        dispatch(loadVendorsList(arg));
    }
});

class VendorsContainer extends React.Component<Props, {}> {
    componentDidMount() {
        const { loadVendors, currentPage } = this.props;
        loadVendors({
            page: currentPage
        });
    }
    render() {
        const { vendors: {results, count}, currentPage } = this.props;
        return (
            <Venues
                vendors={results}
                count={count}
                currentPage={currentPage}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorsContainer);