import delay from '../common/delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const auctionItems = [
  {
    id: "1",
    imageUrls: ["http://kotisivukone.fi/files/astiataivas.tarjoaa.fi/Arabia/Maitokannut_soppaskoolit_kastikekannut/ae030.jpg", "https://scontent-dft4-1.cdninstagram.com/t51.2885-15/s480x480/e35/14676626_169921290137198_1808913596554412032_n.jpg"],
    title: "Arabia milk can",
    description: "Unused can. It's a pleasure to drink heavy cognac snaps with this!",
    startPrice: 0,
    bids: [],
    minimumBidStep: 5,
    auctionStart: "2017-10-12T12:03Z",
    auctionEnd: "2017-11-02T11:39Z",
    createdBy: "Caesar himself",
    created: "2017-10-12T11:03Z",
    updated: "2017-11-01T12:03Z",
    itemLocation: "Oulu",
    contactInfo: "Call +358633455434 and ask for more.",
    paymentInfo: "Credit and debit cards, PayPal, AliPay and Siirto-payments.",
    deliveryInfo: "By mail or pick-up from the address provided."
  },
  {
    id: "2",
    imageUrls: ["https://scontent-dft4-1.cdninstagram.com/t51.2885-15/s480x480/e35/14676626_169921290137198_1808913596554412032_n.jpg", "http://www.gameberry.net/kannet/1578.jpg", "http://kotisivukone.fi/files/astiataivas.tarjoaa.fi/Arabia/Maitokannut_soppaskoolit_kastikekannut/ae030.jpg"],
    title: "Caesar's coffee pot",
    description: "Unused coffee pot. It's a pleasure to cook kahlua with this!",
    startPrice: 0,
    bids: [{userId:"G543534534534t43", bidAmount: 10, bidTime:"Sun Oct 20 2017 19:00:43 GMT+0200 (Eastern Europe Standard Time)"}, {userId:"G543534534534t44", bidAmount: 20, bidTime:"Sun Oct 21 2017 19:00:43 GMT+0200 (Eastern Europe Standard Time)"}],
    minimumBidStep: 10,
    auctionStart: "2017-10-12T12:03Z",
    auctionEnd: "2017-11-07T19:40Z",
    createdBy: "Caesar's colleague",
    created: "2017-10-20T17:50Z",
    updated: "2017-11-01T17:50Z",
    itemLocation: "Jyväskylä",
    contactInfo: "Call +358633455434 and ask for more.",
    paymentInfo: "Credit and debit cards, PayPal, AliPay and Siirto-payments.",
    deliveryInfo: "By mail or pick-up from the address provided."
  },
  {
    id: "3",
    imageUrls: ["http://www.gameberry.net/kannet/1578.jpg", "https://scontent-dft4-1.cdninstagram.com/t51.2885-15/s480x480/e35/14676626_169921290137198_1808913596554412032_n.jpg"],
    title: "Donkey Kong console",
    description: "Classic console. In great condition.",
    startPrice: 50,
    bids: [{userId:"G543534534534t43", bidAmount: 100, bidTime:"Sun Oct 20 2017 19:00:43 GMT+0200 (Eastern Europe Standard Time)"}, {userId:"G543534534534t44", bidAmount: 150, bidTime:"Sun Oct 21 2017 19:00:43 GMT+0200 (Eastern Europe Standard Time)"}],
    minimumBidStep: 50,
    auctionStart: "2017-10-31T12:03Z",
    auctionEnd: "2017-11-26T17:50Z",
    createdBy: "Caesar's colleague",
    created: "2017-10-31T12:02Z",
    updated: "2017-10-31T12:05Z",
    itemLocation: "Savukoski, LAPLAND",
    contactInfo: "Call +358633455434 and ask for more.",
    paymentInfo: "Credit and debit cards, PayPal, AliPay and Siirto-payments.",
    deliveryInfo: "By mail or pick-up from the address provided."
  },
  {
    id: "4",
    imageUrls: ["http://www.suomenantiikki.fi/images/4591%20lasi%2014.jpg", "https://scontent-dft4-1.cdninstagram.com/t51.2885-15/s480x480/e35/14676626_169921290137198_1808913596554412032_n.jpg"],
    title: "Set of Iittala glasses",
    description: "Unused set of Iittala glasses. It's a pleasure to drink wind-light cognac snaps with these!",
    startPrice: 100,
    bids: [{userId:"G543534534534t43", bidAmount: 130, bidTime:"Sun Oct 20 2017 19:00:43 GMT+0200 (Eastern Europe Standard Time)"}, {userId:"G543534534534t44", bidAmount: 160, bidTime:"Sun Oct 21 2017 19:00:43 GMT+0200 (Eastern Europe Standard Time)"}],
    minimumBidStep: 30,
    auctionStart: "2017-10-12T12:03Z",
    auctionEnd: "2017-11-26T17:50Z",
    createdBy: "Caesar himself",
    created: "2017-10-12T12:03Z",
    updated: "2017-10-12T12:03Z",
    itemLocation: "Kuopio",
    contactInfo: "Call +358633455434 and ask for more.",
    paymentInfo: "Credit and debit cards, PayPal, AliPay and Siirto-payments.",
    deliveryInfo: "By mail or pick-up from the address provided."
  }
];

class AuctionsApi {
  static getAuctionItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(auctionItems);
      }, delay.mockApiTimeout);
    });
  }

  static getAuctionItemById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = auctionItems.filter(auctionItem => auctionItem.id == id);
        resolve(filtered[0]); // may throw exception but that's ok, thunk will catch it and handle as error
      }, delay.mockApiTimeout);
    });
  }
}

export default AuctionsApi;
