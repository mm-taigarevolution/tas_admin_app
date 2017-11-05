import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import ImageFileSelector from "react-image-select-component";

const inputRowStyle = {
  margin: '10px 0px',
  padding: '0px'
};

const buttonStyle = {
  margin: '0px 10px',
  textAlign: 'right'
};

const buttonRowStyle = {
  margin: '20px 0px 0px 0px',
  display: 'flex',
  justifyContent: 'center'
};


class AuctionDetailsControl extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onImageSelected = this.onImageSelected.bind(this);
    this.onInvalidImageSelected = this.onInvalidImageSelected.bind(this);
    this.onImageRemoved = this.onImageRemoved.bind(this);
    this.onCancelClicked = this.onCancelClicked.bind(this);
    this.onPreviewClicked = this.onPreviewClicked.bind(this);
  }

  //
  // Lifecycle methods
  //
  componentDidMount() {
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

  onCancelClicked() {
    // TODO: add implementation
  }

  onPreviewClicked() {
    // TODO: add implementation
  }

  //
  // Rendering
  //
  render() {
    let isBusy = this.props.isBusy;

    return (
      <Container>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Item name"/>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <ImageFileSelector id="imageFileSelector"
                             onSelect={this.onImageSelected}
                             onRemoveImage={this.onImageRemoved}
                             onInvalidImage={this.onInvalidImageSelected}/>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Item description"/>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Start price"
                   type="number"/>
            <InputGroupAddon>€</InputGroupAddon>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Minimum bid step"
                   type="number"/>
            <InputGroupAddon>€</InputGroupAddon>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Minimum bid step"
                   type="number"/>
            <InputGroupAddon>€</InputGroupAddon>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Item location"/>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Contact info"/>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Payment info"/>
          </InputGroup>
        </Row>
        <Row style={inputRowStyle}>
          <InputGroup>
            <Input placeholder="Delivery info"/>
          </InputGroup>
        </Row>
        <Row style={buttonRowStyle}>
          <Button id="cancelButton"
                  style={buttonStyle}
                  color="secondary"
                  disabled={isBusy}
                  onClick={this.onCancelClicked}>Cancel</Button>
          <Button id="previewButton"
                  style={buttonStyle}
                  color="primary"
                  onClick={this.onPreviewClicked}>Preview</Button>
        </Row>
      </Container>
    );
  }
}

//
// Prop types for the page
//
AuctionDetailsControl.propTypes = {
  auctionItemDraft: PropTypes.object,
  isBusy: PropTypes.bool,
  errorOccurred: PropTypes.bool
};

//
// Context types for the page
//
AuctionDetailsControl.contextTypes = {
  router: PropTypes.object
};

//
// State mapping to props
// Called every time state changes in the store
// This will trigger componentWillReceiveProps for setting the props to component's state
//
function mapStateToProps(state) {
  return {
    auctionItemDraft: state.auctionItemDraft,
    isBusy: state.busy.isBusy,
    errorOccurred: state.errorOccurred
  };
}

export default connect(mapStateToProps)(AuctionDetailsControl);
