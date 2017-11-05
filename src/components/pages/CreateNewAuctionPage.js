import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as adminActions from '../../actions/adminActions';
import * as auctionsActions from '../../actions/auctionsActions';
import {bindActionCreators} from 'redux';
import {ThreeBounce} from 'better-react-spinkit';
import {toastr} from 'react-redux-toastr';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-router-transition';
import PageTitleControl from '../controls/stateless/PageTitleControl';
import AuctionDetailsControl from '../controls/stateful/AuctionDetailsControl';

const containerStyle = {
  margin: '15px 0px',
  padding: '0px'
};

const spinnerStyle = {
 margin: '10px',
 display: 'flex',
 justifyContent: 'center'
};

class CreateNewAuctionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.OnCancelRequired = this.OnCancelRequired.bind(this);
    this.OnSaveRequired = this.OnSaveRequired.bind(this);
  }

  //
  // Lifecycle methods
  //
  componentDidMount() {
    if(!this.props.admin.loggedIn) {
      this.context.router.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
  }

  //
  // Event handlers from stateless components
  //
  OnCancelRequired() {
    this.context.router.history.goBack();
  }

  OnSaveRequired() {
    // TODO: add implementation
  }

  //
  // Rendering
  //
  render() {
    let isBusy = this.props.isBusy;
    let errorOccurred = this.props.errorOccurred;
    let isLoggedIn = this.props.admin.loggedIn;
    let pageTitle = "Create new";
    let auctionItemDraft = this.props.auctionItemDraft;

    return (
      <div>
        {isLoggedIn &&
          <div style={containerStyle}>
            <PageTitleControl isBusy={isBusy}
                              pageTitle={pageTitle}
                              useAddNewButton={false}/>
            {isBusy &&
              <div>
                <ThreeBounce color="gray"
                             style={spinnerStyle}/>
              </div>
            }
            {!isBusy &&
              <div style={containerStyle}>
                <Transition component="div"
                            enter={{opacity: 1, translateY: spring(0, {stiffness: 200, damping: 20})}}
                            leave={{opacity: 0, translateY: 800}}
                            runOnMount={true}>
                  <AuctionDetailsControl key={1}/>
                </Transition>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

//
// Prop types for the page
//
CreateNewAuctionPage.propTypes = {
  admin: PropTypes.object,
  auctionItemDraft: PropTypes.object,
  isBusy: PropTypes.bool,
  errorOccurred: PropTypes.bool,
  adminActions: PropTypes.object.isRequired,
  auctionsActions: PropTypes.object.isRequired
};

//
// Context types for the page
//
CreateNewAuctionPage.contextTypes = {
  router: PropTypes.object
};

//
// State mapping to props
// Called every time state changes in the store
// This will trigger componentWillReceiveProps for setting the props to component's state
//
function mapStateToProps(state) {
  return {
    admin: state.admin,
    auctionItemDraft: state.auctionItemDraft,
    isBusy: state.busy.isBusy,
    errorOccurred: state.errorOccurred
  };
}

//
// Action creators to props
//
function mapDispatchToProps(dispatch) {
  return {
    adminActions: bindActionCreators(adminActions, dispatch),
    auctionsActions: bindActionCreators(auctionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewAuctionPage);
