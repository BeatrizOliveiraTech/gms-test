describe('US-012–Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')

    const randomEmail = `fabio_${Date.now()}@testes.com`;

    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araujo')
    cy.get('#signup-email').type(randomEmail)
    cy.get('#signup-phone').type('119832989832')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})

describe('US-009–Funcionalidade: Buscar filmes', () => {
  it('Deve preencher o campo de busca e acionar a pesquisa', () => {
    cy.visit('http://127.0.0.1:8080/')

    // Verifica se a seção de busca existe
    cy.get('#search-section').should('exist')

    // Digita o nome do filme
    cy.get('#search-input').type('Matrix')

    // Clica no botão de buscar
    cy.get('#search-button').click()

    // Opcional: depois do clique, você poderia validar algum comportamento
    // Exemplo (só se tiver algo visível mudando depois da busca)
  })
})

describe('US-015–Funcionalidade: Recomendações de filmes', () => {
  it('Deve exibir recomendações de filmes', () => {
    cy.visit('http://127.0.0.1:8080/')

    

    cy.get('#recommendations-section')
      .children()
      .should('have.length.greaterThan', 0)
  })
})