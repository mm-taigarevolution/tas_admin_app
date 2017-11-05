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

const borderStyle = {
  margin: '10px 0px',
  border: '1px dashed lightgray',
  width: '100%'
};

const PageTitleControl = ({isBusy, pageTitle, useAddNewButton, buttonTitle, onButtonClicked}) => {
   return (
    <Container style={containerStyle}>
      <Row>
        <Col xs="9" className="text-left">
          <h3>{pageTitle}</h3>
        </Col>
        {useAddNewButton &&
          <Col xs="2" className="text-right">
            <Button id="actionButton"
                    color="primary"
                    disabled={isBusy}
                    onClick={onButtonClicked}>{buttonTitle}</Button>
          </Col>
        }
      </Row>
      <Row>
        <Col xs="12">
          <div style={borderStyle}/>
        </Col>
      </Row>
    </Container>
  );
};

PageTitleControl.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  pageTitle: PropTypes.string.isRequired,
  useAddNewButton: PropTypes.bool.isRequired,
  buttonTitle: PropTypes.string,
  onButtonClicked: PropTypes.func
};

export default PageTitleControl;
