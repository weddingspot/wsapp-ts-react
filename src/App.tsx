import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

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

import VenueDetails from './containers/VenueDetails';

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

        <Route path="/wedding-venues/" exact={true} component={WeddingVenuesPage} />

        <Route
            path="/venue/:id/"
            exact={true}
            render={(arg: RouteProps) => {
              return <VenueDetailsPage venueId={12} />;
            }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
