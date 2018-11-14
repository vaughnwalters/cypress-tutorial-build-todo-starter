describe("Input form", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it("focuses input on load", () => {
    cy.focused()
      .should('have.class', 'new-todo')

  })

  it('accepts input', () => {
    const typedText='Buy Milk'
    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText)
  }) 
  context('Form submission', () => {
    it.only('Adds a new todo on submit', () => {
      
      // use the following to stub an API response
      cy.server()
      cy.route('POST', '/api/todos', {
        name: 'Buy eggs', 
        id: 1,
        isComplete: false
      })
      
      cy.get('.new-todo')
        .type('Buy eggs')
        .type('{enter}')
      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', 'Buy Eggs')
    })
  })
})


