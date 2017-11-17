import React from 'react';
import PropTypes from 'prop-types';
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

const AuctionDetailsControl = ({auctionItemDraft, isBusy, onImageSelected, onInvalidImageSelected, onImageRemoved, onCancelRequired, onPreviewRequired}) => {
   return (
     <Container>
       <Row style={inputRowStyle}>
         <InputGroup>
           <Input placeholder="Item name"
                  value={auctionItemDraft.title}/>
         </InputGroup>
       </Row>
       <Row style={inputRowStyle}>
         <ImageFileSelector id="imageFileSelector"
                            onSelect={onImageSelected}
                            onInvalidImage={onInvalidImageSelected}
                            onRemoveImage={onImageRemoved}/>
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
                 onClick={onCancelRequired}>Cancel</Button>
         <Button id="previewButton"
                 style={buttonStyle}
                 color="primary"
                 disabled={isBusy}
                 onClick={onPreviewRequired}>Preview</Button>
       </Row>
    </Container>
  );
}

//
// Prop types for the page
//
AuctionDetailsControl.propTypes = {
  auctionItemDraft: PropTypes.object.isRequired,
  isBusy: PropTypes.bool.isRequired,
  onImageSelected: PropTypes.func.isRequired,
  onInvalidImageSelected: PropTypes.func.isRequired,
  onImageRemoved: PropTypes.func.isRequired,
  onCancelRequired: PropTypes.func.isRequired,
  onPreviewRequired: PropTypes.func.isRequired
};

export default AuctionDetailsControl;
