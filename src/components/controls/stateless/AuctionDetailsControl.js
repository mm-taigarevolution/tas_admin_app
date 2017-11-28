import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import ImageFileSelector from "react-image-select-component";
import DatePicker from 'react-datepicker';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

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
                                onImageSelected,
                                onInvalidImageSelected,
                                onImageRemoved,
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
   let startDate = moment(auctionItemDraft.auctionStart).startOf('day');
   let endDate = moment(auctionItemDraft.auctionEnd).startOf('day');
   let startDateEditDisabled = startDate < moment().startOf('day');

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
        <Label for="imageFileSelector" sm={3}>Images</Label>
        <Col sm={9}>
          <ImageFileSelector id="imageFileSelector"
                             onSelect={onImageSelected}
                             onInvalidImage={onInvalidImageSelected}
                             onRemoveImage={onImageRemoved}/>
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
        <Label for="startPrice" sm={6}>Start price</Label>
        <Col sm={6}>
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
        <Label for="minimumBidStep" sm={6}>Minimum bid</Label>
        <Col sm={6}>
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
        <Label for="auctionStartDate" sm={3}>Start date</Label>
        <Col sm={9}>
          <DatePicker id="auctionStartDate"
                      todayButton={"Today"}
                      disabled={startDateEditDisabled}
                      minDate={moment().startOf('day')}
                      maxDate={endDate}
                      selected={startDate}
                      onChange={onAuctionStartDateChanged}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="auctionEndDate" sm={3}>End date</Label>
        <Col sm={9}>
          <DatePicker id="auctionEndDate"
                      minDate={startDate.startOf('day').add(1, "days")}
                      selected={endDate}
                      onChange={onAuctionEndDateChanged}/>
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
  onImageSelected: PropTypes.func.isRequired,
  onInvalidImageSelected: PropTypes.func.isRequired,
  onImageRemoved: PropTypes.func.isRequired,
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
