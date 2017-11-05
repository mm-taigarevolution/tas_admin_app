import React from 'react';
import PropTypes from 'prop-types';
import { Container,
         Row,
         Card,
         CardBody,
         CardTitle,
         CardSubtitle,
         CardFooter,
         Button,
         Input } from 'reactstrap';
import {ThreeBounce} from 'better-react-spinkit';

const cardStyle = {
 maxWidth: '100%'
};

const containerStyle = {
  margin: '0px',
  padding: '0px'
};

const buttonStyle = {
 margin: '10px 0px',
 display: 'flex',
 justifyContent: 'center'
};

const spinnerStyle = {
 display: 'flex',
 justifyContent: 'center'
};

const warningStyle = {
 color: 'red',
 display: 'flex',
 justifyContent: 'center'
};

const rowStyle = {
  margin: '10px',
  display: 'flex',
  justifyContent: 'center'
};

const AuthenticationControl = ({isBusy, errorOccurred, loginEnabled, onUserNameChanged, onPasswordChanged, onLoginRequired}) => {
  let loginButtonDisabled = isBusy || !loginEnabled;

    return (
      <Card style={cardStyle}>
        <CardBody>
          <CardTitle>Authentication</CardTitle>
          <CardSubtitle>Please authenticate with your credentials. In case of problems, contact your super admin.</CardSubtitle>
        </CardBody>
        <CardBody>
          <Container>
            <Row style={rowStyle}>
              <Input id="userNameInput"
                     placeholder="Your username"
                     disabled={isBusy}
                     onChange={onUserNameChanged}/>
            </Row>
            <Row style={rowStyle}>
              <Input id="passwordInput"
                     placeholder="Your password"
                     disabled={isBusy}
                     onChange={onPasswordChanged}/>
            </Row>
            <Row style={rowStyle}>
              <Button id="loginButton"
                      color="primary"
                      style={buttonStyle}
                      disabled={loginButtonDisabled}
                      onClick={onLoginRequired}>Login</Button>
            </Row>
          </Container>
        </CardBody>
        <CardFooter>
          {isBusy &&
            <ThreeBounce color="gray"
                         style={spinnerStyle}/>
          }
          {!isBusy &&
            errorOccurred &&
            <p style={warningStyle}>Login failed. Please re-check your credentials.</p>
          }
        </CardFooter>
      </Card>
  );
};


AuthenticationControl.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  loginEnabled: PropTypes.bool.isRequired,
  onUserNameChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onLoginRequired: PropTypes.func.isRequired
};

export default AuthenticationControl;
