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
import AuctionDetailsControl from '../controls/stateless/AuctionDetailsControl';

const containerStyle = {
  margin: '15px 0px',
  padding: '0px'
};

const spinnerStyle = {
 margin: '10px',
 display: 'flex',
 justifyContent: 'center'
};

class ManageAuctionPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      auctionItemDraft: {id:''}
    };

    this.onImageSelected = this.onImageSelected.bind(this);
    this.onInvalidImageSelected = this.onInvalidImageSelected.bind(this);
    this.onImageRemoved = this.onImageRemoved.bind(this);
    this.onCancelRequired = this.onCancelRequired.bind(this);
    this.onPreviewRequired = this.onPreviewRequired.bind(this);
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
  onImageSelected() {
    // TODO: add implementation
  }

  onInvalidImageSelected() {
    // TODO: add implementation
  }

  onImageRemoved() {
    // TODO: add implementation
  }

  onCancelRequired() {
    this.context.router.history.goBack();
  }

  onPreviewRequired() {
    // TODO: add implementation
  }

  //
  // Rendering
  //
  render() {
    let isBusy = this.props.isBusy;
    let errorOccurred = this.props.errorOccurred;
    let isLoggedIn = this.props.admin.loggedIn;
    let auctionItemDraft = this.props.auctionItemDraft;
    let pageTitle = auctionItemDraft.id.length == 0 ? "Create auction" : "Edit auction";
    
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
                  <div key={auctionItemDraft.id}>
                    <AuctionDetailsControl auctionItemDraft={auctionItemDraft}
                                           isBusy={isBusy}
                                           onImageSelected={this.onImageSelected}
                                           onInvalidImageSelected={this.onInvalidImageSelected}
                                           onImageRemoved={this.onImageRemoved}
                                           onCancelRequired={this.onCancelRequired}
                                           onPreviewRequired={this.onPreviewRequired}/>
                  </div>
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
ManageAuctionPage.propTypes = {
  admin: PropTypes.object.isRequired,
  auctionItemDraft: PropTypes.object.isRequired,
  isBusy: PropTypes.bool.isRequired,
  errorOccurred: PropTypes.bool.isRequired,
  adminActions: PropTypes.object.isRequired,
  auctionsActions: PropTypes.object.isRequired
};

//
// Context types for the page
//
ManageAuctionPage.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuctionPage);
