export default {
  auctionItems: [],
  auctionItemDraft: {
    id: '',
    images: [],
    title: '',
    description: '',
    startPrice: 0,
    currentPrice: 0,
    bids: [],
    minimumBidStep: 0,
    auctionStart: '',
    auctionEnd: '',
    createdBy: '',
    created: '',
    updated: '',
    updatedBy: '',
    itemLocation: '',
    contactInfo: '',
    paymentInfo: '',
    deliveryInfo: '',
    active: false,
    new: false,
    recentlyUpdated: false
  },
  admin: {
    adminId: '',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
    loggedIn: false
  },
  busy: {
    isBusy: false,
    numberOfBusyOperations: 0
  },
  errorOccurred: false
};
