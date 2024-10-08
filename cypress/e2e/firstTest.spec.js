/// <reference types="cypress" />

describe('1th test suite', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by  Tag name
        cy.get('input')
        // by Id 
        cy.get('#inputEmail1')
        // by class value
        cy.get('.input-full-width')
        // by Attribute  name
        cy.get('[fullwidth]')
        // by Attribute  and value 
        cy.get('[placeholder="Email"]')

        // by entire class value 
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // bt two attribute 
        cy.get('[placeholder="Email"][fullwidth]')
        // by tag. attribute, id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // by cypress test ID
        cy.get('[data-cy="imputEmail1"]')

    })
})

it(' 2nd test', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // Theory
    // get() - find elements on the page by locator globally
    // find() - find child elements by locator
    // contains () - find HTML text and by the text and locator

    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').contains('Sign in')

    // cypress chains and DOM
    cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()
})

it('Save subbject of the command', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')


    //1 Cypress Alias
    cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
    cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

    // 2 Cypress Then() methods 
    cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
        cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
        cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
    })
})

it.only('Extract text values', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // 1 method
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    //2 method
    cy.get('[for="exampleInputEmail1"]').then(label => {
        const labelText = label.text()
        expect(labelText).to.equal('Email address')
        cy.wrap(labelText).should('contain', 'Email address')

    })

    // 3 method
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
        expect(text).to.equal('Email address')
    })
    cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')

    //4  method
    cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
        expect(classValue).to.equal('label')

    })

    // 5 method Property 

    cy.get('#exampleInputEmail1').type('test@gmail.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@gmail.com').then(property => {
        expect(property).to.equal('test@gmail.com')
    })
})


