import React from 'react';
import PropTypes from 'prop-types';
import WithTapAnimated from '../stateful/TapAnimator';
import AuctionListItemControl from '../stateless/AuctionListItemControl';

const TappableAuctionItemControl = ({auctionItem, onItemTapped}) => {
  return new class extends React.Component {
    render() {
      let TappableItem = WithTapAnimated(AuctionListItemControl({auctionItem}), () => onItemTapped(auctionItem));
       return (
        <TappableItem/>
      );
    }
  };
}

TappableAuctionItemControl.propTypes = {
  auctionItem: PropTypes.object.isRequired,
  onItemTapped: PropTypes.func.isRequired
};

export default TappableAuctionItemControl;
