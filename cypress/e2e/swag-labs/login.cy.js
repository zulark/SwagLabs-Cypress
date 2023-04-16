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

  // it('Should not allow user to go to homepage and return error message', () => {
  //   Login.accessUrl('https://saucedemo.com/inventory.html', { failOnStatusCode: false })
  //   Login.catchError(`Epic sadface: You can only access '/inventory.html' when you are logged in.`);
  // })
  // Cenário dando erro 404 ao tentar mandar uma request pro endpoint

  it('Loga com dados bloqueados', () => {
    Login.accessUrl('https://saucedemo.com')
    Login.makeWrongLogin("locked_out_user", loginCredentials.password)
    Login.catchError('Epic sadface: Sorry, this user has been locked out.');
  });


  it('Login with valid data', () => {
    Login.accessUrl('https://saucedemo.com')
    Login.makeLogin(loginCredentials.username, loginCredentials.password)
  });

});
