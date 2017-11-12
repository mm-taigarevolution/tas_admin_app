import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';
import {MainOptions} from '../../../common/enumerations';
import OptionCardControl from '../stateless/OptionCardControl';
import WithTapAnimated from '../stateful/TapAnimator';

const MainOptionsControl = ({onOptionSelected}) => {
  return new class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let AuctionsCtrl = WithTapAnimated(OptionCardControl({id: "manageAuctionsCard",
                                                            imgUrl: "../../../assets/main/auction.jpg",
                                                            title: "Auctions"}),
                                                            () => onOptionSelected(MainOptions.AUCTIONS));
      let ItemLocationsCtrl = WithTapAnimated(OptionCardControl({id: "manageItemLocationsCard",
                                                                 imgUrl: "../../../assets/main/locations.png",
                                                                 title: "Item locations"}),
                                                                 () => onOptionSelected(MainOptions.ITEM_LOCATIONS));
      let DeliveryOptionsCtrl = WithTapAnimated(OptionCardControl({id: "deliveryOptionsCard",
                                                                   imgUrl: "../../../assets/main/delivery.png",
                                                                   title: "Delivery options"}),
                                                                   () => onOptionSelected(MainOptions.DELIVERY_OPTIONS));
      let PaymentOptionsCtrl = WithTapAnimated(OptionCardControl({id: "managePaymentOptionsCard",
                                                                  imgUrl: "../../../assets/main/payment.png",
                                                                  title: "Payment options"}),
                                                                  () => onOptionSelected(MainOptions.PAYMENT_OPTIONS));
      let ContactInfosCtrl = WithTapAnimated(OptionCardControl({id: "manageContactInfosCard",
                                                                imgUrl: "../../../assets/main/contact_info.jfif",
                                                                title: "Contact infos"}),
                                                                () => onOptionSelected(MainOptions.CONTACT_INFOS));
      let UsersCtrl = WithTapAnimated(OptionCardControl({id: "manageUsersCard",
                                                         imgUrl: "../../../assets/main/users.png",
                                                         title: "Users"}),
                                                         () => onOptionSelected(MainOptions.USERS));
      return (
        <CardDeck>
          <AuctionsCtrl/>
          <ItemLocationsCtrl/>
          <DeliveryOptionsCtrl/>
          <PaymentOptionsCtrl/>
          <ContactInfosCtrl/>
          <UsersCtrl/>
        </CardDeck>
      );
    }
  };
}

MainOptionsControl.propTypes = {
  onOptionSelected: PropTypes.func.isRequired
};

export default MainOptionsControl;
