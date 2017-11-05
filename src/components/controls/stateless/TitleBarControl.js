import React from 'react';
import PropTypes from 'prop-types';
import { Container,
         Row,
         Col,
         Button } from 'reactstrap';

const containerStyle = {
  margin: '0px',
  padding: '0px'
};

const titleStyle = {
  minWidth: '80%'
};

const TitleBarControl = ({isBusy, onLogoutRequired}) => {
   return (
      <Container style={containerStyle}>
        <Row>
          <Col xs="auto" style={titleStyle} className="text-left">
            <h3>Taiga Admin App</h3>
          </Col>
          <Col xs="2" className="text-right">
            <Button id="logoutButton"
                    color="secondary"
                    disabled={isBusy}
                    onClick={onLogoutRequired}>Logout</Button>
          </Col>
        </Row>
      </Container>
  );
};


TitleBarControl.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  onLogoutRequired: PropTypes.func.isRequired
};

export default TitleBarControl;
