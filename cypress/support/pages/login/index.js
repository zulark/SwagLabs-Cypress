import { ELEMENTS } from './elements'

class Login {
    accessUrl(url) {
        cy.visit(url)
    }
    catchError(expectedErrorMessage) {
        cy.get(ELEMENTS.errorMessage).should('be.visible').and('have.text', expectedErrorMessage)
    }
    makeLogin(username, password) {
        cy.get(ELEMENTS.username).type(username)
        cy.get(ELEMENTS.password).type(password)
        cy.get(ELEMENTS.loginButton).click()
        cy.url().should('include', 'inventory.html')
    }
    makeWrongLogin(username, password) {
        cy.get(ELEMENTS.username).type(username)
        cy.get(ELEMENTS.password).type(password)
        cy.get(ELEMENTS.loginButton).click()
        cy.url().should('not.include', 'inventory.html')
    }
    makeEmptyLogin() {
        cy.get(ELEMENTS.loginButton).click()
        cy.url().should('not.include', 'inventory.html')
    }

}

export default new Login();