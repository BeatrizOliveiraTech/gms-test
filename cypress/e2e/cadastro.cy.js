/// <reference types="cypress"/>
describe('US-012–Funcionalidade: Cadastro de membros', () => {
  
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
          cy.screenshot()
      });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro( 'fabio' , 'Araujo', email, '8596352145','Teste@12345'  )
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

it('Deve validar mensagem de erro com o campo nome inválido', () => {
  cy.preencherCadastro( 'Fabio20' , 'Araujo', 'fabio@teste.com', '8596352145','Teste@12345' )
  cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
 });
})

  



  


describe('US-009–Funcionalidade: Buscar filmes', () => {
  it('Deve preencher o campo de busca e acionar a pesquisa', () => {
    cy.visit('/')

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
    cy.visit('/')

    

    cy.get('#recommendations-section')
      .children()
      .should('have.length.greaterThan', 0)
  })
})