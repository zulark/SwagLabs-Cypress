import Login from "../../support/pages/login";

describe('Login Component', () => {
  let loginCredentials;

  before(() => {
    cy.fixture('credentials').then((data) => {
      loginCredentials = data;
    })
  })

  it('Try to login with empty data', () => {
    Login.accessUrl('https://saucedemo.com')
    Login.makeEmptyLogin();
    Login.catchError('Epic sadface: Username is required')
  });

  it('Try to login with blocked data', () => {
    Login.accessUrl('https://saucedemo.com')
    Login.makeWrongLogin("locked_out_user", loginCredentials.password)
    Login.catchError('Epic sadface: Sorry, this user has been locked out.');
  });

  it('Login with valid data', () => {
    Login.accessUrl('https://saucedemo.com')
    Login.makeLogin(loginCredentials.username, loginCredentials.password)
  });

});
