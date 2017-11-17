/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AuthenticationPage from './pages/AuthenticationPage';
import MainPage from './pages/MainPage';
import ManageAuctionsPage from './pages/ManageAuctionsPage';
import ManageAuctionPage from './pages/ManageAuctionPage';
import ManageContactInfosPage from './pages/ManageContactInfosPage';
import ManageDeliveryOptionsPage from './pages/ManageDeliveryOptionsPage';
import ManageItemLocationsPage from './pages/ManageItemLocationsPage';
import ManagePaymentOptionsPage from './pages/ManagePaymentOptionsPage';
import ManageUsersPage from './pages/ManageUsersPage';
import NotFoundPage from './pages/NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity
  };
}

// child matches will...
const opacityTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: 0
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: 1
  },
};

class App extends React.Component {
  render() {
    return (
      <AnimatedSwitch atEnter={opacityTransition.atEnter}
                      atLeave={opacityTransition.atLeave}
                      atActive={opacityTransition.atActive}
                      mapStyles={mapStyles}
                      className="route-wrapper">
        <Route exact path="/" component={AuthenticationPage} />
        <Route exact path="/main" component={MainPage}/>
        <Route exact path="/auctions" component={ManageAuctionsPage}/>
        <Route exact path="/auctions/manage" component={ManageAuctionPage}/>
        <Route exact path="/contactInfos" component={ManageContactInfosPage}/>
        <Route exact path="/deliveryOptions" component={ManageDeliveryOptionsPage}/>
        <Route exact path="/itemLocations" component={ManageItemLocationsPage}/>
        <Route exact path="/paymentOptions" component={ManagePaymentOptionsPage}/>
        <Route exact path="/users" component={ManageUsersPage}/>
        <Route component={NotFoundPage}/>
      </AnimatedSwitch>
    );
  }
}

export default App;
