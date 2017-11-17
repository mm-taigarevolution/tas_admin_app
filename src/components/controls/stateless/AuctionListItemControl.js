import React from 'react';
import PropTypes from 'prop-types';
import {Media, Container, Row, Col, Badge } from 'reactstrap';

const containerStyle = {
  margin: '15px 0px',
  padding: '10px',
  border: '1px dotted gray',
  borderRadius: '5px',
  boxShadow: '3px 2px 2px lightgray'
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: 'gray',
  margin: '0px',
  padding: '0px'
};

const captionStyle = {
  margin: '4px 0px 0px 0px',
  fontWeight: 'normal',
  fontSize: '14px',
  color: 'gray'
};

const imgStyle = {
  width: '120px',
  height: '120px'
};

const bodyStyle = {
  padding: '0px 15px'
};

const smallTitleStyle = {
  fontSize: '14px',
  color: 'gray',
  margin: '0px',
  padding: '0px'
};

const remarkStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'gray',
  margin: '4px 0px 0px 0px',
  padding: '0px'
};

const timeRemainingEndingStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'red',
  margin: '4px 0px 0px 0px',
  padding: '0px'
};

const placeholderStyle = {
  height: '34px'
};

const AuctionListItemControl = ({auctionItem}) => {
  return class AuctionListItem extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let numberOfBids = auctionItem.bids.length;
      let currentPrice = auctionItem.currentPrice;
      let auctionItemImg = auctionItem.imageUrls.length > 0 ? auctionItem.imageUrls[0] : null;
      let active = new Date() < new Date(auctionItem.auctionEnd);

      return (
        <div style={containerStyle}>
          <Media id="auctionListItemCard">
            <Media left>
              <Media object style={imgStyle} src={auctionItemImg} alt="image" />
            </Media>
            <Media right body>
              <Container>
                <Row>
                  <Col className="text-left" xs="auto">
                    <p style={titleStyle}>{auctionItem.title}</p>
                    <p style={captionStyle}>{auctionItem.itemLocation}</p>
                  </Col>
                  <Col className="text-right">
                    {!active &&
                      <Badge color="secondary">Closed</Badge>
                    }
                  </Col>
                </Row>
                <Row style={placeholderStyle}>
                </Row>
                <Row>
                  <Col sm="6" className="text-left">
                    {active &&
                      <div>
                        {numberOfBids > 0 &&
                          <p style={smallTitleStyle}>{numberOfBids} bids</p>
                        }
                        {numberOfBids == 0 &&
                          <p style={smallTitleStyle}>Start price</p>
                        }
                      </div>
                    }
                    {!active &&
                      <p style={smallTitleStyle}>Final price</p>
                    }
                    <p style={remarkStyle}>{currentPrice} €</p>
                  </Col>
                  <Col className="text-right">
                    {active &&
                      <div>
                        <p style={smallTitleStyle}>Ends at</p>
                      </div>
                    }
                  </Col>
                </Row>
              </Container>
            </Media>
          </Media>
        </div>
      );
    }
  };
}

AuctionListItemControl.propTypes = {
  auctionItem: PropTypes.object.isRequired
};

export default AuctionListItemControl;
