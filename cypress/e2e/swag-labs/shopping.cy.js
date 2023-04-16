import Login from "../../support/pages/login";
import Shopping from "../../support/pages/inventory";

describe('Inventory Component', () => {
    let loginCredentials;

    before(() => {
        cy.fixture('credentials').then((data) => {
            loginCredentials = data;
        })
    })

    it(`Check inventory's amout of items`, () => {
        Login.accessUrl('https://saucedemo.com')
        Login.makeLogin(loginCredentials.username, loginCredentials.password)
        Shopping.checkItemsLength()
    });

    it('Check if items info are visible', () => {
        Login.accessUrl('https://saucedemo.com')
        Login.makeLogin(loginCredentials.username, loginCredentials.password)
        Shopping.checkItemsInfo()
    });

    it('Add all items to cart', () => {
        Login.accessUrl('https://saucedemo.com')
        Login.makeLogin(loginCredentials.username, loginCredentials.password)
        Shopping.addToCart()
    });



});
