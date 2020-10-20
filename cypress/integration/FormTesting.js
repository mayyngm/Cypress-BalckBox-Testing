describe('Open Site', () => {
    it('test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Mayang Muria')
        cy.get('[type="text"][placeholder="Email"]')
            .type('mayangmr4@gmail.com')
        cy.contains('Remember me').first().click()
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('mayangmr4@gmail.com')
        cy.get('#inputPassword2').type('123')
        cy.contains('Option 1').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('mayangmr4@gmail.com')
        cy.get('#exampleInputPassword1').type('123')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Anyeong')
        cy.get('[placeholder="Subject"]').type('Yorobun')
        cy.get('[placeholder="Message"]').type('Anyeong Yorobun')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Mayang')
        cy.get('#inputLastName').type('Muria')
        cy.get('#inputEmail').type('mayangmr4@gmail.com')
        cy.contains('Website').type('https://github.com/mayyngm')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('mayangmr4@gmail.com')
        cy.get('#inputPassword3').type('123')
        cy.get('.custom-checkbox').last().click()
    });
})