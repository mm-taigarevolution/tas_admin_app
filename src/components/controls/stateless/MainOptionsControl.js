import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck,
         Card,
         CardImgOverlay,
         CardImg,
         CardBody,
         CardTitle } from 'reactstrap';
import {MainOptions} from '../../../common/enumerations';

const cardStyle = {
 width: '200px',
 height: '200px',
 padding: '10px 30px 50px 30px'
};

const overlayStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end'
};

const imgStyle = {
  maxHeight: '100%',
  maxWidth: '100%'
};

const MainOptionsControl = ({onOptionSelected}) => {
  let auctionsImgUrl = '../../../assets/main/auction.jpg';
  let itemLocationsImgUrl = "../../../assets/main/locations.png";
  let deliveryOptionsImgUrl = "../../../assets/main/delivery.png";
  let paymentOptionsImgUrl = "../../../assets/main/payment.png";
  let contactInfosImgUrl = "../../../assets/main/contact_info.jfif";
  let usersImgUrl = '../../../assets/main/users.png';

  return (
    <CardDeck>
      <Card id="manageAuctionsCard"
            onClick={() => onOptionSelected(MainOptions.AUCTIONS)}
            style={cardStyle}>
        <CardImg style={imgStyle} src={auctionsImgUrl} alt="image" />
        <CardImgOverlay style={overlayStyle}>
          <div style={{backgroundColor: 'black', padding: '10px', opacity: '0.6', borderRadius: '15px'}}>
            <h4 style={{color: 'white'}}>Auctions</h4>
          </div>
        </CardImgOverlay>
      </Card>
      <Card id="manageItemLocationsCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.ITEM_LOCATIONS)}>
        <CardImg style={imgStyle} src={itemLocationsImgUrl} alt="image" />
        <CardImgOverlay style={overlayStyle}>
          <div style={{backgroundColor: 'black', padding: '10px', opacity: '0.6', borderRadius: '15px'}}>
            <h4 style={{color: 'white'}}>Locations</h4>
          </div>
        </CardImgOverlay>
      </Card>
      <Card id="manageDeliveryOptionsCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.DELIVERY_OPTIONS)}>
        <CardImg style={imgStyle} src={deliveryOptionsImgUrl} alt="image" />
        <CardImgOverlay style={overlayStyle}>
          <div style={{backgroundColor: 'black', padding: '10px', opacity: '0.6', borderRadius: '15px'}}>
            <h4 style={{color: 'white'}}>Delivery</h4>
          </div>
        </CardImgOverlay>
      </Card>
      <Card id="managePaymentOptionsCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.PAYMENT_OPTIONS)}>
        <CardImg style={imgStyle} src={paymentOptionsImgUrl} alt="image" />
        <CardImgOverlay style={overlayStyle}>
          <div style={{backgroundColor: 'black', padding: '10px', opacity: '0.6', borderRadius: '15px'}}>
            <h4 style={{color: 'white'}}>Payments</h4>
          </div>
        </CardImgOverlay>
      </Card>
      <Card id="manageContactInfosCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.CONTACT_INFOS)}>
        <CardImg style={imgStyle} src={contactInfosImgUrl} alt="image" />
        <CardImgOverlay style={overlayStyle}>
          <div style={{backgroundColor: 'black', padding: '10px', opacity: '0.6', borderRadius: '15px'}}>
            <h4 style={{color: 'white'}}>Contact</h4>
          </div>
        </CardImgOverlay>
      </Card>
      <Card id="manageUsersCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.USERS)}>
        <CardImg style={imgStyle} src={usersImgUrl} alt="image" />
        <CardImgOverlay style={overlayStyle}>
          <div style={{backgroundColor: 'black', padding: '10px', opacity: '0.6', borderRadius: '15px'}}>
            <h4 style={{color: 'white'}}>Users</h4>
          </div>
        </CardImgOverlay>
      </Card>
    </CardDeck>
  );
};

MainOptionsControl.propTypes = {
  onOptionSelected: PropTypes.func.isRequired
};

export default MainOptionsControl;
