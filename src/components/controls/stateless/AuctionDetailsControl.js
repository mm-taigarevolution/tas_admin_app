import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment';
import Dropzone from 'react-dropzone'
import Gallery from 'react-grid-gallery';

const largeFieldStyle = {
  minHeight: 300
};

const mediumFieldStyle = {
  minHeight: 100
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end'
};

const buttonRowStyle = {
  margin: '10px 0px 0px 0px',
  padding: '20px 0px',
  borderTop: '1px dashed lightgray',
};

const AuctionDetailsControl = ({auctionItemDraft,
                                isBusy,
                                onTitleChanged,
                                onImageDropped,
                                onDescriptionChanged,
                                onStartPriceChanged,
                                onMinimumBidChanged,
                                onAuctionStartDateChanged,
                                onAuctionEndDateChanged,
                                onItemLocationChanged,
                                onContactInfoChanged,
                                onPaymentInfoChanged,
                                onDeliveryInfoChanged,
                                onCancelRequired,
                                onPreviewRequired}) => {
   // disable fields if editing existing item
   let editingDisabled = auctionItemDraft.id.length > 0;
   let minStartPrice = 0;
   let minBidStep = 1;
   let minStep = 1;
   let images = auctionItemDraft.images.map(image => {
     return {
       src: image.preview,
       thumbnail: image.preview,
       thumbnailWidth: 100,
       thumbnailHeight: 80,
       caption: ''
     };
   });
   return (
     <Form>
      <FormGroup row>
        <Label for="itemName" sm={3}>Name</Label>
        <Col sm={9}>
          <Input id="itemName"
                 type="textarea"
                 placeholder="Enter name..."
                 value={auctionItemDraft.title}
                 disabled={isBusy}
                 onChange={onTitleChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="imageDropZone" sm={3}>Image dropzone</Label>
        <Col sm={9}>
          <Dropzone id="imageDropZone"
                    accept="image/jpeg, image/png"
                    onDrop={onImageDropped}>
            <div style={{padding:'5px'}}>
              <p>Click here to select images for the auction. Drop also supported.</p>
              <p>Only *.jpeg and *.png images will be accepted.</p>
              <p>NOTE! First image will be the main image for auction.</p>
            </div>
          </Dropzone>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="imageList" sm={3}>Dropped images</Label>
        <Col sm={9}>
          <Gallery images={images}
                   enableImageSelection={false}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="auctionStartDate" sm={3}>Start date</Label>
        <Col sm={9}>
          <DatePicker id="auctionStartDate"
                      placeholder="Select..."
                      value={auctionItemDraft.auctionStart}
                      onChange={onAuctionStartDateChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="auctionEndDate" sm={3}>End date</Label>
        <Col sm={9}>
          <DatePicker id="auctionEndDate"
                      placeholder="Select..."
                      value={auctionItemDraft.auctionEnd}
                      onChange={onAuctionEndDateChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="startPrice" sm={3}>Start price</Label>
        <Col sm={9}>
          <InputGroup>
            <Input id="startPrice"
                   type="number"
                   disabled={editingDisabled}
                   min={minStartPrice}
                   step={minStep}
                   value={auctionItemDraft.startPrice}
                   onChange={onStartPriceChanged}/>
            <InputGroupAddon>€</InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="minimumBidStep" sm={3}>Minimum bid</Label>
        <Col sm={9}>
          <InputGroup>
            <Input id="minimumBidStep"
                   type="number"
                   disabled={editingDisabled}
                   min={minBidStep}
                   step={minStep}
                   value={auctionItemDraft.minimumBidStep}
                   onChange={onMinimumBidChanged}/>
            <InputGroupAddon>€</InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="itemDescription" sm={3}>Description</Label>
        <Col sm={9}>
          <Input id="itemDescription"
                 type="textarea"
                 style={largeFieldStyle}
                 placeholder="Enter description..."
                 disabled={isBusy}
                 value={auctionItemDraft.description}
                 onChange={onDescriptionChanged}/>

        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="itemLocation" sm={3}>Location</Label>
        <Col sm={9}>
          <Input id="itemLocation"
                 type="textarea"
                 placeholder="Enter item location..."
                 disabled={isBusy}
                 value={auctionItemDraft.itemLocation}
                 onChange={onItemLocationChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="contactInfo" sm={3}>Contact info</Label>
        <Col sm={9}>
          <Input id="contactInfo"
                 type="textarea"
                 style={mediumFieldStyle}
                 placeholder="Enter contact info..."
                 disabled={isBusy}
                 value={auctionItemDraft.contactInfo}
                 onChange={onContactInfoChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="paymentInfo" sm={3}>Payment info</Label>
        <Col sm={9}>
          <Input id="paymentInfo"
                 type="textarea"
                 style={mediumFieldStyle}
                 placeholder="Enter payment info..."
                 disabled={isBusy}
                 value={auctionItemDraft.paymentInfo}
                 onChange={onPaymentInfoChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="deliveryInfo" sm={3}>Delivery</Label>
        <Col sm={9}>
          <Input id="deliveryInfo"
                 type="textarea"
                 style={mediumFieldStyle}
                 placeholder="Enter delivery info..."
                 disabled={isBusy}
                 value={auctionItemDraft.deliveryInfo}
                 onChange={onDeliveryInfoChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row style={buttonRowStyle}>
        <Col sm={9}
             style={buttonContainerStyle}>
          <Button id="cancelButton"
                  color="secondary"
                  disabled={isBusy}
                  onClick={onCancelRequired}>Cancel</Button>
        </Col>
        <Col sm={3}
             style={buttonContainerStyle}>
          <Button id="previewButton"
                  color="primary"
                  disabled={isBusy}
                  onClick={onPreviewRequired}>Preview</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

//
// Prop types for the page
//
AuctionDetailsControl.propTypes = {
  auctionItemDraft: PropTypes.object.isRequired,
  isBusy: PropTypes.bool.isRequired,
  onTitleChanged: PropTypes.func.isRequired,
  onImageDropped: PropTypes.func.isRequired,
  onDescriptionChanged: PropTypes.func.isRequired,
  onStartPriceChanged: PropTypes.func.isRequired,
  onMinimumBidChanged: PropTypes.func.isRequired,
  onAuctionStartDateChanged: PropTypes.func.isRequired,
  onAuctionEndDateChanged: PropTypes.func.isRequired,
  onItemLocationChanged: PropTypes.func.isRequired,
  onContactInfoChanged: PropTypes.func.isRequired,
  onPaymentInfoChanged: PropTypes.func.isRequired,
  onDeliveryInfoChanged: PropTypes.func.isRequired,
  onCancelRequired: PropTypes.func.isRequired,
  onPreviewRequired: PropTypes.func.isRequired
};

export default AuctionDetailsControl;
