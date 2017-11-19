import React from 'react';
import PropTypes from 'prop-types';
import { Form,
         FormGroup,
         Col,
         Button } from 'reactstrap';

const formStyle = {
 margin: '5px 0px 0px 0px',
 display: 'flex',
 justifyContent: 'space-around'
};

const titleContainerStyle = {
  margin: '5px 0px 0px 0px',
  display: 'flex',
  justifyContent: 'flex-start'
};

const buttonContainerStyle = {
 margin: '5px 0px',
 padding: '0px',
 display: 'flex',
 justifyContent: 'flex-end'
};

const borderStyle = {
  margin: '10px 0px',
  borderBottom: '1px dashed lightgray',
  width: '100%'
};

const PageTitleControl = ({isBusy, pageTitle, useTitleButton, buttonTitle, onButtonClicked}) => {
   return (
    <Form style={formStyle}>
      <FormGroup row style={borderStyle}>
        <Col style={titleContainerStyle}>
          <h3>{pageTitle}</h3>
        </Col>
        {useTitleButton &&
          <Col sm={3}
              style={buttonContainerStyle}>
            <Button id="actionButton"
                    color="primary"
                    disabled={isBusy}
                    onClick={onButtonClicked}>{buttonTitle}</Button>
          </Col>
        }
      </FormGroup>
    </Form>
  );
};

PageTitleControl.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  pageTitle: PropTypes.string.isRequired,
  useTitleButton: PropTypes.bool.isRequired,
  buttonTitle: PropTypes.string,
  onButtonClicked: PropTypes.func
};

export default PageTitleControl;
