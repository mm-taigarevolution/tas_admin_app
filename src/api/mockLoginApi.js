import delay from '../common/delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const loggedInAdmin = {
    adminId: '0123456789',
    firstName: 'Caesar',
    lastName: 'Auct Ion',
    address: '$$$ Money Street',
    postalCode: '99999',
    city: 'Jyväskylä',
    country: 'Finland'
};

const loggedOutAdmin = {
    adminId: '',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    country: ''
};

class LoginApi {
  static login(userName, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(userName == "admin" &&
           password == "passwd") {
          resolve(loggedInAdmin);
        }
        else {
          reject(new Error('Incorrect credentials'));
        }
      }, delay.mockApiTimeout);
    });
  }

  static logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(loggedOutAdmin);
      }, delay.mockApiTimeout);
    });
  }
}

export default LoginApi;
