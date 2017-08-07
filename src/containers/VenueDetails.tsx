import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { first } from '../utils/fp';

import VenueDetails from '../components/VenueDetails';
import { selectVenueDetailsImage, selectVenueDetailsTab, VenueDetailsAction, loadVenueDetails } from '../actions';
import * as types from '../types';

export interface Props {
    venue: types.VenueDetailsState;
    venueId: number;
    selectImage: (imageId: number) => void;
    selectTab: (tabNum: number) => void;
    loadVenueDetails: (venueId: number) => Promise<void>;
}

export interface OwnProps {
    venueId: number;
}

export interface State {

}

const mapStateToProps = ({venueDetails}: types.StoreState, ownProps: OwnProps) => ({
    venue: venueDetails,
    venueId: ownProps.venueId
});

const mapDispatchToProps = (dispatch: Dispatch<VenueDetailsAction>) => ({
    selectImage: (imageId: number) => dispatch(selectVenueDetailsImage(imageId)),
    selectTab: (tabNumber: number) => dispatch(selectVenueDetailsTab(tabNumber)),
    loadVenueDetails: (venueId: number) => dispatch(loadVenueDetails(venueId)),
});

class VenueDetailsContainer extends React.Component<Props, State> {
    componentDidMount() {
        this.props.loadVenueDetails(this.props.venueId);
    }
    render() {

        const { currentImageId, images, latitude, longtitude } = this.props.venue;

        let currentImage = {
            id: 0,
            credits: '',
            preview: '',
            original: '',
            thumbnail: '',
        };

        if (images.length) {
            currentImage = (currentImageId ?
                first(images.filter(({id}) => id === currentImageId)) :
                first(images)
            );
        }

        const mapUrl = 'https://maps.google.com/maps?q=' + {latitude} + ',' + {longtitude} + '&hl=es;z=14&output=embed';

        return (
            <VenueDetails
                {...this.props.venue}
                currentImage={currentImage}
                mapUrl={mapUrl}
                selectImage={this.props.selectImage}
                selectTab={this.props.selectTab}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueDetailsContainer);