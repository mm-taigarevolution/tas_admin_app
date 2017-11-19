import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from '../../actions/adminActions';
import AuthenticationControl from '../controls/stateless/AuthenticationControl';
import {toastr} from 'react-redux-toastr';

class AuthenticationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginBusy: false,
      userName: '',
      password: '',
      loginEnabled: false
    };

    this.validateCredentials = this.validateCredentials.bind(this);
    this.onUserNameChanged = this.onUserNameChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onLoginRequired = this.onLoginRequired.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.loginBusy) {
      if(nextProps.errorOccurred) {
        this.setState({loginBusy: false});
      }
      else if(nextProps.admin.loggedIn) {
        let userName = nextProps.admin.firstName + ' ' + nextProps.admin.lastName;
        toastr.success('Welcome, ' + userName +'!');

        this.context.router.history.replace('/main');
        this.setState({loginBusy: false});
      }
    }
  }

  validateCredentials(userName, password) {
    return (userName.length >= 4 && password.length >= 4);
  }

  onUserNameChanged(e) {
    e.preventDefault();
    let valid = this.validateCredentials(e.target.value, this.state.password);
    this.setState({userName: e.target.value, loginEnabled: valid});
  }

  onPasswordChanged(e) {
    e.preventDefault();
    let valid = this.validateCredentials(this.state.userName, e.target.value);
    this.setState({password: e.target.value, loginEnabled: valid});
  }

  onLoginRequired(e) {
    e.preventDefault();
    this.setState({loginBusy: true});
    this.props.adminActions.login(this.state.userName, this.state.password);
  }

  render() {
    let isBusy = this.props.isBusy && this.state.loginBusy;
    let errorOccurred = this.props.errorOccurred;
    let loginEnabled = this.state.loginEnabled;

    return (
      <AuthenticationControl isBusy={isBusy}
                             errorOccurred={errorOccurred}
                             loginEnabled={loginEnabled}
                             onUserNameChanged = {this.onUserNameChanged}
                             onPasswordChanged = {this.onPasswordChanged}
                             onLoginRequired={this.onLoginRequired}/>
    );
  }
}

AuthenticationPage.propTypes = {
  loginBusy: PropTypes.bool,
  userName: PropTypes.string,
  password: PropTypes.string,
  loginEnabled: PropTypes.bool,
  admin: PropTypes.object,
  isBusy: PropTypes.bool,
  errorOccurred: PropTypes.bool,
  adminActions: PropTypes.object.isRequired
};

//
// Context types for the page
//
AuthenticationPage.contextTypes = {
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
    adminActions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationPage);
