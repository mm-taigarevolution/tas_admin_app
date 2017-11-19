import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as auctionsActions from '../../actions/auctionsActions';
import * as auctionItemDraftActions from '../../actions/auctionItemDraftActions';
import AuctionDetailsPreviewControl from '../controls/stateless/AuctionDetailsPreviewControl';
import {ThreeBounce} from 'better-react-spinkit';
import PageTitleControl from '../controls/stateless/PageTitleControl';
import {toastr} from 'react-redux-toastr';

const spinnerStyle = {
 display: 'flex',
 justifyContent: 'center'
};

class AuctionDetailsPreviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isPublishingNew: false,
      isPublishingExisting: false
    }
    this.onModifyRequired = this.onModifyRequired.bind(this);
    this.onPublishRequired = this.onPublishRequired.bind(this);
  }

  componentDidMount() {
    if(!this.props.admin.loggedIn) {
      this.context.router.history.push('/');
    }
  }

  componentWillReceiveProps() {
    if(this.state.isPublishingNew ||
       this.state.isPublishingExisting) {
      if(this.state.isPublishingNew) {
        toastr.info('New item published', 'It will be public in a moment.');
      }
      else if(this.state.isPublishingExisting){
        toastr.info('Changes published', 'They will be public in a moment.');
      }

      this.setState({isPublishingNew: false, isPublishingExisting: false});

      // TODO: force history cleaning
      this.context.router.history.push('/main');
    }
  }

  componentWillUnmount() {
  }

  //
  // Event handlers from stateless components
  //
  onModifyRequired(e) {
    e.preventDefault();
    this.context.router.history.goBack();
  }

  onPublishRequired(e) {
    e.preventDefault();
    if(this.props.auctionItemDraft.id.length == 0) {
      this.setState({isPublishingNew: true, isPublishingExisting: false});
      this.props.auctionItemDraftActions.postAuctionItemDraft(this.props.auctionItemDraft, this.props.admin);
    }

    else {
      this.setState({isPublishingNew: false, isPublishingExisting: true});
      this.props.auctionItemDraftActions.putAuctionItemDraft(this.props.auctionItemDraft, this.props.admin);
    }
  }

  render() {
    let auctionItemDraft = this.props.auctionItemDraft;
    let isBusy = this.props.isBusy;
    let errorOccurred = this.props.errorOccurred;
    let pageTitle = "Preview changes";

    return (
      <div>
        <PageTitleControl isBusy={isBusy}
                          pageTitle={pageTitle}
                          useTitleButton={false}/>
        {isBusy &&
          <ThreeBounce color="gray"
                       style={spinnerStyle}/>
        }
        {errorOccurred == true &&
          <div>
            <p>Service is unavailable at the moment. Please try again later.</p>
          </div>
        }
        {errorOccurred == false &&
         !isBusy &&
           <AuctionDetailsPreviewControl auctionItemDraft={auctionItemDraft}
                                         isBusy={isBusy}
                                         onModifyRequired={this.onModifyRequired}
                                         onPublishRequired={this.onPublishRequired}/>
        }
      </div>
    );
  }
}

AuctionDetailsPreviewPage.propTypes = {
  admin: PropTypes.object.isRequired,
  auctionItemDraft: PropTypes.object.isRequired,
  isBusy: PropTypes.bool.isRequired,
  errorOccurred: PropTypes.bool.isRequired,
  auctionItemDraftActions: PropTypes.object.isRequired,
  auctionsActions: PropTypes.object.isRequired
};

//
// Context types for the page
//
AuctionDetailsPreviewPage.contextTypes = {
  router: PropTypes.object
};

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
    auctionItemDraftActions: bindActionCreators(auctionItemDraftActions, dispatch),
    auctionsActions: bindActionCreators(auctionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionDetailsPreviewPage);
