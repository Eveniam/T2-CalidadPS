describe('Examen T2', () => {
    beforeEach('Ingrese usuario', () => {
        cy.visit(Cypress.env('Pagina_Localhost'))
        cy.get('#agregarBiblioteca').click()
        cy.get('#Usuario').type('admin')
        cy.get('#Contrasenia').type('admin')
        cy.get('#boton_inicio').click()

    })
    it('Agregar a la biblioteca', () => {
        cy.visit(Cypress.env('Pagina_Localhost'))
        cy.get('#HOME').click()
        cy.get('#Biblioteca').click()
        cy.visit(Cypress.env('Pagina_Localhost') + '/Biblioteca')
        cy.location('pathname').should('eq', '/Biblioteca')

    })
    it('Seleccionar leyendo en la Biblioteca', () => {
        cy.visit(Cypress.env('Pagina_Localhost') + '/Biblioteca')
        cy.get('#LeyendoBiblioteca').click()
    })
    it('Selecionar terminado en la Biblioteca', () => {
        cy.visit(Cypress.env('Pagina_Localhost') + '/Biblioteca')
        cy.get('#TerminadoBiblioteca').click()
    })
})
