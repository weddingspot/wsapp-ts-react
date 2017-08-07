import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import WeddingVenues from '../components/WeddingVenues';
import { VenuesListAction, loadVenuesList } from '../actions';
import * as types from '../types';

export interface Props extends types.WeddingVenuesState {
    loadVenuesList: () => Promise<void>;
}
export interface State {

}

const mapStateToProps = ({venues: {filters, venues, selectedFilters, isLoading}}: types.StoreState) => ({
    filters,
    venues,
    selectedFilters,
    isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<VenuesListAction>) => ({
    loadVenuesList: () => dispatch(loadVenuesList()),
});

class VenuesListContainer extends React.Component<Props, State> {
    componentDidMount() {
        this.props.loadVenuesList();
    }
    render() {
        const { venues, filters, selectedFilters, isLoading } = this.props;

        return (
            <WeddingVenues filters={filters} venues={venues} selectedFilters={selectedFilters} isLoading={isLoading} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenuesListContainer);
