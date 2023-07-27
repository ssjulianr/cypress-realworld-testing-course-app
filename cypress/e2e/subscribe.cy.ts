describe("Newsletter Subscribe Form", () => {
    // Test suite for the newsletter subscribe form
    
    beforeEach(() => { 
      // Reset app state before each test
      cy.visit("http://localhost:3000") 
    })
  
    it("allows users to subscribe to the email list", () => {
      // Test successful subscription
      
      cy.getByData("email-input").type("tom@aol.com") // Type email
      cy.getByData("submit-button").click()  // Submit form
      cy.getByData("success-message").should("exist").contains("tom@aol.com") // Assert success message
    })
  
    it("does NOT allow an invalid email address", () => {
      // Test invalid email
      
      cy.getByData("email-input").type("tom") // Type invalid email
      cy.getByData("submit-button").click() // Submit form
      cy.getByData("success-message").should("not.exist") // Assert no success message
    })
  
    it("does NOT allow already subscribed email addresses", () => {
      // Test duplicate email
  
      cy.getByData("email-input").type("john@example.com") // Existing email
      cy.getByData("submit-button").click() // Submit form
      cy.getByData("server-error-message")  
        .should("exist")
        .contains("already exists. Please use a different email address.") // Assert error message
    })
  })