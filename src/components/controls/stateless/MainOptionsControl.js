import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck,
         Card,
         CardImg,
         CardBody,
         CardTitle } from 'reactstrap';
import {MainOptions} from '../../../common/enumerations';

const cardStyle = {
 maxWidth: '30%'
};

const MainOptionsControl = ({onOptionSelected}) => {
  let auctionsImgUrl = "";
  let itemLocationsImgUrl = "";
  let deliveryOptionsImgUrl = "";
  let paymentOptionsImgUrl = "";
  let contactInfosImgUrl = "";
  let usersImgUrl = "";

  return (
    <CardDeck>
      <Card id="manageAuctionsCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.AUCTIONS)}>
        <CardImg top width="100%" src={auctionsImgUrl} alt="image" />
        <CardBody>
          <CardTitle>Auctions</CardTitle>
        </CardBody>
      </Card>
      <Card id="manageItemLocationsCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.ITEM_LOCATIONS)}>
        <CardImg top width="100%" src={itemLocationsImgUrl} alt="image" />
        <CardBody>
          <CardTitle>Item locations</CardTitle>
        </CardBody>
      </Card>
      <Card id="manageDeliveryOptionsCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.DELIVERY_OPTIONS)}>
        <CardImg top width="100%" src={deliveryOptionsImgUrl} alt="image" />
        <CardBody>
          <CardTitle>Delivery options</CardTitle>
        </CardBody>
      </Card>
      <Card id="managePaymentOptionsCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.PAYMENT_OPTIONS)}>
        <CardImg top width="100%" src={paymentOptionsImgUrl} alt="image" />
        <CardBody>
          <CardTitle>Payment options</CardTitle>
        </CardBody>
      </Card>
      <Card id="manageContactInfosCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.CONTACT_INFOS)}>
        <CardImg top width="100%" src={contactInfosImgUrl} alt="image" />
        <CardBody>
          <CardTitle>Contact infos</CardTitle>
        </CardBody>
      </Card>
      <Card id="manageUsersCard"
            style={cardStyle}
            onClick={() => onOptionSelected(MainOptions.USERS)}>
        <CardImg top width="100%" src={usersImgUrl} alt="image" />
        <CardBody>
          <CardTitle>Users</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

MainOptionsControl.propTypes = {
  onOptionSelected: PropTypes.func.isRequired
};

export default MainOptionsControl;
