describe('home page', () => { // describe block to group tests for home page

  beforeEach(() => {   // runs before each test to reset app state
    cy.visit('http://localhost:3000') // visits home page URL
  })

  it('passes', () => { // test case to verify page loaded 
    cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress') 
  })

  it.only("the features on the homepage are correct", () => { 
    // focused test to verify specific content

    cy.get('dt').eq(0).contains('4 Courses') // get first <dt> and check text
    cy.get('dt').eq(1).contains('25+ Lessons') // get second <dt>
    cy.get('dt').eq(2).contains('Free and Open Source') // get third <dt>
  })

})