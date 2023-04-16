import { ELEMENTS } from './elements'

class Shopping {

    addToCart() {

        cy.get(ELEMENTS.addToCartButton)
            .should('have.length.gt', 0)
            .each(($button) => {
                cy.wrap($button)
                    .should('be.visible')
                    .and('have.text', 'Add to cart')
                    .click()
            })
    }

    checkCart() {
        cy.get('.header_label').find('.shopping_cart_container').click();
        cy.url().should('include', '/cart.html')
        cy.get(ELEMENTS.pageTitle).should('have.text', 'Your Cart')
    }

    checkCartItemsAmout(expectedCount) {
        cy.get(ELEMENTS.cart_item)
            .should('have.length', expectedCount);
    }

    checkItemsLength() {
        cy.get('.inventory_list').within(() => {
            cy.get('.inventory_item').should('have.length.at.least', 6);
        });
    }

    checkItemsInfo() {
        cy.get('.inventory_list > .inventory_item').each(($item) => {
            cy.wrap($item).within(() => {
                cy.get('.inventory_item_name').should('be.visible')
                cy.get('.inventory_item_desc').should('be.visible')
                cy.get('.inventory_item_price').should('be.visible')
            })
        })
    }
}

export default new Shopping();