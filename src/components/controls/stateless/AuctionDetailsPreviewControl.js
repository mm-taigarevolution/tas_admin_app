import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, UncontrolledCarousel } from 'reactstrap';

const chapterStyle = {
  margin: '10px 0px 0px 0px',
  padding: '10px',
  border: '1px dotted lightgray',
  width: '100%',
  borderRadius: '5px',
  boxShadow: '1px 1px 1px lightgray'
};

const chapterTitleStyle = {
  margin: '5px 0px 0px 0px',
  width: '100%'
};

const chapterBodyStyle = {
  margin: '10px 0px 0px 0px',
  width: '100%'
};

const priceStyle = {
  margin: '5px 5px 10px 10px',
  fontWeight: 'bold',
  fontSize: '32px',
  color: 'orange'
};

const cardStyle = {
  margin: '0px',
  padding: '0px'
};

const contentRowStyle = {
  margin: '10px 0px 0px 0px'
};

const buttonRowStyle = {
  margin: '10px 0px 0px 0px',
  padding: '20px 0px',
  borderTop: '1px dashed lightgray',
  width: '100%'
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end'
};

const AuctionDetailsPreviewControl = ({auctionItemDraft, isBusy, onModifyRequired, onPublishRequired}) => {
  let autoPlay = false;

  let carouselItems = auctionItemDraft.imageUrls.map(imageUrl => {
    return {
      src: imageUrl,
      caption: ''
    };
  });

  return (
    <Card style={cardStyle}>
      <CardBody>
        <Row>
          <Col className="text-left">
            <CardTitle>{auctionItemDraft.title}</CardTitle>
            <CardSubtitle>{auctionItemDraft.itemLocation}</CardSubtitle>
          </Col>
          <Col className="text-right">
            <CardTitle>Start price: {auctionItemDraft.startPrice} €</CardTitle>
            <CardSubtitle>Minimum bid: {auctionItemDraft.minimumBidStep} €</CardSubtitle>
          </Col>
        </Row>
        <Row style={contentRowStyle}>
          <UncontrolledCarousel items={carouselItems}
                                ride={autoPlay}/>
          <div style={chapterStyle}>
            <CardSubtitle style={chapterTitleStyle}>Description</CardSubtitle>
            <CardText style={chapterBodyStyle}>{auctionItemDraft.description}</CardText>
          </div>
          <div style={chapterStyle}>
            <CardSubtitle style={chapterTitleStyle}>Delivery info</CardSubtitle>
            <CardText style={chapterBodyStyle}>{auctionItemDraft.deliveryInfo}</CardText>
          </div>
          <div style={chapterStyle}>
            <CardSubtitle style={chapterTitleStyle}>Payment info</CardSubtitle>
            <CardText style={chapterBodyStyle}>{auctionItemDraft.paymentInfo}</CardText>
          </div>
          <div style={chapterStyle}>
            <CardSubtitle style={chapterTitleStyle}>Contact info</CardSubtitle>
            <CardText style={chapterBodyStyle}>{auctionItemDraft.contactInfo}</CardText>
          </div>
        </Row>
        <Row style={buttonRowStyle}>
          <Col sm={9}
               style={buttonContainerStyle}>
            <Button id="modifyButton"
                    color="secondary"
                    disabled={isBusy}
                    onClick={onModifyRequired}>Modify</Button>
          </Col>
          <Col sm={3}
               style={buttonContainerStyle}>
            <Button id="modifyButton"
                    color="primary"
                    disabled={isBusy}
                    onClick={onPublishRequired}>Publish</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

AuctionDetailsPreviewControl.propTypes = {
  auctionItemDraft: PropTypes.object.isRequired,
  isBusy: PropTypes.bool.isRequired,
  onModifyRequired: PropTypes.func.isRequired,
  onPublishRequired: PropTypes.func.isRequired
};

export default AuctionDetailsPreviewControl;
