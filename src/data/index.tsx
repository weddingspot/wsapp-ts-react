
import { VENUE_DETAILS } from '../fixtures/venue-details';
import { VENUES_LARGE, FILTERS } from '../fixtures';

export interface Loader {
    venueDetails: (venueId: number) => Promise<{}>;
    venuesList: () => Promise<{}>;
}

export const load = {
    venueDetails: (venueId: number): Promise<{}> => {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    resolve(VENUE_DETAILS);
                },
                2000
            );
        });
    },
    venuesList: (): Promise<{}> => {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    resolve({
                        venues: VENUES_LARGE,
                        filters: FILTERS,
                    });
                },
                2000
            );
        });
    }
};

export default load;