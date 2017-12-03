import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as auctionItemDraftActions from '../../actions/auctionItemDraftActions';
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
      auctionItemDraft: {id:'', images: []}
    };

    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onImageDropped = this.onImageDropped.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
    this.onStartPriceChanged = this.onStartPriceChanged.bind(this);
    this.onMinimumBidChanged = this.onMinimumBidChanged.bind(this);
    this.onAuctionStartDateChanged = this.onAuctionStartDateChanged.bind(this);
    this.onAuctionEndDateChanged = this.onAuctionEndDateChanged.bind(this);
    this.onItemLocationChanged = this.onItemLocationChanged.bind(this);
    this.onContactInfoChanged = this.onContactInfoChanged.bind(this);
    this.onPaymentInfoChanged = this.onPaymentInfoChanged.bind(this);
    this.onDeliveryInfoChanged = this.onDeliveryInfoChanged.bind(this);
    this.onCancelRequired = this.onCancelRequired.bind(this);
    this.onPreviewRequired = this.onPreviewRequired.bind(this);
    this.onEndAuctionClicked = this.onEndAuctionClicked.bind(this);
  }

  //
  // Lifecycle methods
  //
  componentDidMount() {
    if(!this.props.admin.loggedIn) {
      this.context.router.history.push('/');
    }
    else {
      // create a local copy of draft
      let draft = Object.assign({}, this.props.auctionItemDraft);
      this.setState({auctionItemDraft: draft })
    }
  }

  //
  // Event handlers from stateless components
  //
  onEndAuctionClicked(e) {
    e.preventDefault();
    // TODO: add implementation
  }

  onTitleChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.title = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onImageDropped(accepted, rejected) {
    let draft = Object.assign({}, this.state.auctionItemDraft);

    if(accepted.length > 0) {
      let images = Object.assign([], draft.images);
      accepted.map(function(item) {
        // TODO: check that image does not exist in the array
        // TODO: this will change when auto upload will be taken into use
        images.push(Object.assign({}, item));
      });
      draft.images = images;
      this.setState({auctionItemDraft: draft });
    }
  }

  onDescriptionChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.description = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onStartPriceChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.startPrice = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onMinimumBidChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.minimumBidStep = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onAuctionStartDateChanged(e) {
    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.auctionStart = e;
    this.setState({auctionItemDraft: draft });
  }

  onAuctionEndDateChanged(e) {
    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.auctionEnd = e;
    this.setState({auctionItemDraft: draft });
  }

  onItemLocationChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.itemLocation = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onContactInfoChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.contactInfo = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onPaymentInfoChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.paymentInfo = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onDeliveryInfoChanged(e) {
    e.preventDefault();

    let draft = Object.assign({}, this.state.auctionItemDraft);
    draft.deliveryInfo = e.target.value;
    this.setState({auctionItemDraft: draft });
  }

  onCancelRequired(e) {
    e.preventDefault();
    this.context.router.history.goBack();
  }

  onPreviewRequired(e) {
    e.preventDefault();
    this.props.auctionItemDraftActions.putInternalAuctionItemDraft(this.state.auctionItemDraft);

    let route = "/auctions/preview";
    this.context.router.history.push(route);
  }

  //
  // Rendering
  //
  render() {
    let isBusy = this.props.isBusy;
    let errorOccurred = this.props.errorOccurred;
    let isLoggedIn = this.props.admin.loggedIn;
    let auctionItemDraft = this.state.auctionItemDraft;
    let pageTitle = auctionItemDraft.id.length == 0 ? "Create auction" : "Edit auction";
    let useTitleButton = auctionItemDraft.id.length == 0 ? false : true;
    let buttonTitle = "End auction";

    return (
      <div>
        {isLoggedIn &&
          <div style={containerStyle}>
            <PageTitleControl isBusy={isBusy}
                              pageTitle={pageTitle}
                              useTitleButton={useTitleButton}
                              buttonTitle={buttonTitle}
                              onButtonClicked = {this.onEndAuctionClicked}/>
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
                                           onTitleChanged={this.onTitleChanged}
                                           onImageDropped={this.onImageDropped}
                                           onDescriptionChanged={this.onDescriptionChanged}
                                           onStartPriceChanged={this.onStartPriceChanged}
                                           onMinimumBidChanged={this.onMinimumBidChanged}
                                           onAuctionStartDateChanged={this.onAuctionStartDateChanged}
                                           onAuctionEndDateChanged={this.onAuctionEndDateChanged}
                                           onItemLocationChanged={this.onItemLocationChanged}
                                           onContactInfoChanged={this.onContactInfoChanged}
                                           onPaymentInfoChanged={this.onPaymentInfoChanged}
                                           onDeliveryInfoChanged={this.onDeliveryInfoChanged}
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
  auctionItemDraftActions: PropTypes.object.isRequired
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
    auctionItemDraftActions: bindActionCreators(auctionItemDraftActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuctionPage);
