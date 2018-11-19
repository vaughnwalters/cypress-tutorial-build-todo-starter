describe('List items', () => {
  beforeEach(() => {
    cy.seedAndVisit()  
  })

  it('properly displays completed items', () => { 
    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Soylent')
      .find('.toggle')
      .should('be.checked')
  })

  it('Shows remaining todos in the footer', () => {
    cy.get('todo-count')
      .should('contain', 3)
  })

  it.only('Removes a todo', () => {
    cy.route({
      url: '/api/todos/1',
      method: 'DELETE',
      status: 200,
      response: {}
    })

    cy.get('.todo-list li')
      .first()
      .find('.destroy')
      // force.true means internal elements that makes sure cypress can interact with the element will be disabled for this command - in this case, element is invisible because of css class, but we are clicking it anyway
      .click({force: true})
  })
})

