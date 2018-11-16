const todos = [
  {
    "id": 1,
    "name": "Buy Soylent",
    "isComplete": false
  },
  {
    "id": 2,
    "name": "Drink Soylent",
    "isComplete": false
  },
  {
    "id": 3,
    "name": "Buy more Soylent",
    "isComplete": false
  },
  {
    "id": 4,
    "name": "Make French Toast",
    "isComplete": false
  }
]

describe('App initialization', () => {
  it.only('Loads todos on page load', () => {
    cy.server()
    cy.route('GET', '/api/todos', todos )
    cy.visit('/')

    cy.get('.todo-list li')
      .should('have.length', 4)
  })
})
