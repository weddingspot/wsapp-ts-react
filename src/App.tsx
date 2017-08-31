import * as React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

import Header from './containers/Header';
import Banner from './components/Banner';
import Awards from './components/Awards';
import HowItWorks from './components/HowItWorks';
import Feautured from './components/Feautured';
import LocationsGrid from './components/LocationsGrid';
import WeddingRegions from './components/WeddingRegions';
import Footer from './components/Footer';

import WeddingVenues from './containers/WeddingVenues';

import AuthModal from './components/AuthModal';
import Three from './components/Three';

import VenueDetails from './containers/VenueDetails';
import Navigation from './components/admin/Navigation';
import Venues from './containers/Vendors';
import AdminVenueDetails from './containers/AdminVenueDetails';

// import VenueImages from './containers/VenueImages';

function Homepage() {
  return (
      <div>
        <Banner />
        <Awards />
        <HowItWorks />
        <Feautured />
        <LocationsGrid />
        <WeddingRegions />

        <Route path="/signin/" component={AuthModal} />
        <Route path="/signup/" component={AuthModal} />

      </div>
  );
}

function WeddingVenuesPage() {
  return (
    <WeddingVenues />
  );
}

function VenueDetailsPage({venueId}: {venueId: number}) {
  return (
      <VenueDetails venueId={venueId} />
  );
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App" >
        <Header />

        <Route path="/" exact={true} component={Homepage} />
        <Route path="/signup" exact={true} component={Homepage} />
        <Route path="/signin" exact={true} component={Homepage} />
        <Route path="/three" exact={true} component={Three} />

        <Route path="/wedding-venues/" exact={true} component={WeddingVenuesPage} />

        <Route
            path="/venue/:id/"
            exact={true}
            render={(arg: RouteProps) => {
              return <VenueDetailsPage venueId={12} />;
            }}
        />

        <Route
            path="/twsadmin/"
            component={() => (
                <div className="Admin">
                  <div className="row">
                    <div className="col-15">
                      <Navigation />
                    </div>
                    <div className="col-85">
                        <Route
                            path="/twsadmin/venues/"
                            exact={true}
                            render={(route: RouteProps) => {
                                if (route.location) {
                                    const params = new URLSearchParams(route.location.search);
                                    const page: string | null = params.get('page');
                                    const currentPage: number = !!page ? parseInt(page, 10) : 1;
                                    return <Venues currentPage={currentPage} />;
                                }
                                return <Venues currentPage={1} />;
                            }}
                        />
                        <Route
                            path="/twsadmin/venues/:id/"
                            exact={true}
                            render={({match: {params: {id}}}: RouteComponentProps<{id: number}>) => {
                                return <AdminVenueDetails venueId={id} />;
                            }}
                        />
                    </div>
                  </div>
                </div>
            )}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
