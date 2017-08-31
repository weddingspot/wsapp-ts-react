import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import VenueImages from '../components/admin/VenueImages';
import { loadVendorImages, LoadVendorImages } from '../actions/';
import { VendorImagesList } from '../data';
import * as types from '../types';

export type Props = types.VendorImagesState & {
    loadVendorImages: (vendorId: number) => Promise<VendorImagesList>;
};

export interface OwnProps {
    venueId: number;
}

export interface State {

}

const mapStateToProps = (state: types.StoreState) => ({
    images: state.vendorImages,
});

const mapDispatchToProps = (dispatch: Dispatch<LoadVendorImages>) => ({
    loadVendorImages: (venueId: number) => dispatch(loadVendorImages(venueId))
});

class VenueImagesContainer extends React.Component<Props, State> {
    componentDidMount() {
        this.props.loadVendorImages(3390);
    }
    render() {
        return (
            <VenueImages images={this.props.images} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueImagesContainer);