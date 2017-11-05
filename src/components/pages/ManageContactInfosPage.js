import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as adminActions from '../../actions/adminActions';
import {bindActionCreators} from 'redux';
import {ThreeBounce} from 'better-react-spinkit';
import {toastr} from 'react-redux-toastr';

const containerStyle = {
  margin: '15px 0px',
  padding: '0px'
};

const spinnerStyle = {
 margin: '10px',
 display: 'flex',
 justifyContent: 'center'
};

class ManageContactInfosPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  //
  // Lifecycle methods
  //
  componentDidMount() {
    if(!this.props.admin.loggedIn) {
        this.context.router.history.push('/');
    }
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() {
  }

  //
  // Event handlers from stateless components
  //

  //
  // Rendering
  //
  render() {
    let isBusy = this.props.isBusy;
    let errorOccurred = this.props.errorOccurred;
    let isLoggedIn = this.props.admin.loggedIn;

    return (
      <div>
        {isLoggedIn &&
          <div style={containerStyle}>
            {isBusy &&
              <div>
                <ThreeBounce color="gray"
                             style={spinnerStyle}/>
              </div>
            }
            {!isBusy &&
              <div>Content here</div>
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
ManageContactInfosPage.propTypes = {
  admin: PropTypes.object,
  isBusy: PropTypes.bool,
  errorOccurred: PropTypes.bool,
  adminActions: PropTypes.object.isRequired
};

//
// Context types for the page
//
ManageContactInfosPage.contextTypes = {
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContactInfosPage);
