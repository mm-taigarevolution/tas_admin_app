import {Enum} from 'enumify';

export class MainOptions extends Enum {}
MainOptions.initEnum(['AUCTIONS',
                      'ITEM_LOCATIONS',
                      'DELIVERY_OPTIONS',
                      'PAYMENT_OPTIONS',
                      'CONTACT_INFOS',
                      'USERS']);
