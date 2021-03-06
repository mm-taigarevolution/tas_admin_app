import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as auctionsActions from '../../actions/auctionsActions';
import * as auctionItemDraftActions from '../../actions/auctionItemDraftActions';
import {bindActionCreators} from 'redux';
import {ThreeBounce} from 'better-react-spinkit';
import {toastr} from 'react-redux-toastr';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-router-transition';
import PageTitleControl from '../controls/stateless/PageTitleControl';
import TappableAuctionItemControl from '../controls/stateless/TappableAuctionItemControl';

const containerStyle = {
  margin: '15px 0px',
  padding: '0px'
};

const spinnerStyle = {
 margin: '10px',
 display: 'flex',
 justifyContent: 'center'
};

class ManageAuctionsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.OnAddNewButtonClicked = this.OnAddNewButtonClicked.bind(this);
    this.OnEditItemRequired = this.OnEditItemRequired.bind(this);
  }

  //
  // Lifecycle methods
  //
  componentDidMount() {
    if(!this.props.admin.loggedIn) {
      this.context.router.history.push('/');
    }

    else {
      if(this.props.auctionItems.length == 0) {
        this.props.auctionsActions.getAuctionItems();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
  }

  //
  // Event handlers from stateless components
  //
  OnAddNewButtonClicked() {
    this.props.auctionItemDraftActions.putInternalAuctionItemDraft();

    let route = "/auctions/manage";
    this.context.router.history.push(route);
  }

  OnEditItemRequired(item) {
    this.props.auctionItemDraftActions.putInternalAuctionItemDraft(item);

    let route = "/auctions/manage";
    this.context.router.history.push(route);
  }

  //
  // Rendering
  //
  render() {
    let isBusy = this.props.isBusy;
    let errorOccurred = this.props.errorOccurred;
    let isLoggedIn = this.props.admin.loggedIn;
    let pageTitle = "Manage auctions";
    let buttonTitle = "Add new...";
    let items = this.props.auctionItems;

    return (
      <div>
        {isLoggedIn &&
          <div style={containerStyle}>
            <PageTitleControl isBusy={isBusy}
                              pageTitle={pageTitle}
                              useTitleButton={true}
                              buttonTitle={buttonTitle}
                              onButtonClicked = {this.OnAddNewButtonClicked}/>
            {isBusy &&
              <div>
                <ThreeBounce color="gray"
                             style={spinnerStyle}/>
              </div>
            }
            {!isBusy &&
              <div style={containerStyle}>
                {errorOccurred == false &&
                  <div>
                    {items.length == 0 &&
                      <div>
                        <p>No auctions yet.</p>
                      </div>
                    }
                    {items.length > 0 &&
                      <Transition component="div"
                                  enter={{opacity: 1, translateY: spring(0, {stiffness: 200, damping: 20})}}
                                  leave={{opacity: 0, translateY: 800}}
                                  runOnMount={true}>
                        {items.map(auctionItem => (
                          <div key={auctionItem.id}>
                            <TappableAuctionItemControl auctionItem={auctionItem}
                                                        onItemTapped={this.OnEditItemRequired}/>
                          </div>))
                        }
                      </Transition>
                    }
                  </div>
                }
                {errorOccurred == true &&
                  <div>
                    <p>Service is unavailable at the moment. Please try again later.</p>
                  </div>
                }
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
ManageAuctionsPage.propTypes = {
  admin: PropTypes.object,
  auctionItems: PropTypes.array,
  isBusy: PropTypes.bool,
  errorOccurred: PropTypes.bool,
  auctionsActions: PropTypes.object.isRequired,
  auctionItemDraftActions: PropTypes.object.isRequired
};

//
// Context types for the page
//
ManageAuctionsPage.contextTypes = {
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
    auctionItems: state.auctionItems,
    isBusy: state.busy.isBusy,
    errorOccurred: state.errorOccurred
  };
}

//
// Action creators to props
//
function mapDispatchToProps(dispatch) {
  return {
    auctionsActions: bindActionCreators(auctionsActions, dispatch),
    auctionItemDraftActions: bindActionCreators(auctionItemDraftActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuctionsPage);
