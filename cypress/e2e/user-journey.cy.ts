describe("User Journey", () => {

    it("a user can find a course on the home page and complete the courses lessons", () => {
      
      // Test navigating through a course
      
      cy.visit("http://localhost:3000") 
  
      cy.getByData("course-0").find("a").contains("Get started").click() // Find course and start
  
      cy.location("pathname").should("equal", "/testing-your-first-application") // Check course page
  
      cy.getByData("next-lesson-button").click() // Go to first lesson
      
      cy.location("pathname").should("eq","/testing-your-first-application/app-install-and-overview")
  
      // Continue clicking next lesson and checking URLs
  
      cy.getByData("challenge-answer-0").click() 
      cy.getByData("next-lesson-button").should("exist").click()
  
      // ...other lessons
  
      cy.location("pathname").should("equal", "/") // Ends back on home page
    })
  
  })