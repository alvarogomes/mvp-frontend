describe('Reports App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Can select: All Projects All Gateways', () => {
        cy.get('#menu-button-4').click();
        cy.get('#menu-list-4-menuitem-11').click();
        cy.get('#menu-button-6').click();
        cy.get('#menu-list-6-menuitem-14').click();
        cy.wait(1000);
        cy.contains('All Projects | All Gateways');
        cy.contains('Project 1');
        cy.contains('Project 2');
        cy.contains('$').should('be.visible');
        cy.contains('TOTAL:').should('be.visible');
    });

    it('Can select: All Projects One Gateway', () => {
        cy.get('#menu-button-4').click();
        cy.get('#menu-list-4-menuitem-11').click();
        cy.get('#menu-button-6').click();
        cy.get('#menu-list-6-menuitem-15').click();
        cy.wait(1000);
        cy.contains('All Projects | Gateway 1');
        cy.contains('$').should('be.visible');
        cy.contains('GATEWAY TOTAL').should('be.visible');
    });

    it('Can select: All Gateways One project', () => {
        cy.get('#menu-button-4').click();
        cy.get('#menu-list-4-menuitem-12').click();
        cy.get('#menu-button-6').click();
        cy.get('#menu-list-6-menuitem-14').click();
        cy.wait(1000);
        cy.contains('Project 1 | All Gateways');
        cy.contains('$').should('be.visible');
        cy.contains('PROJECT TOTAL').should('be.visible');
    });

    it('Can select: One Project One Gateway', () => {
        cy.get('#menu-button-4').click();
        cy.get('#menu-list-4-menuitem-12').click();
        cy.get('#menu-button-6').click();
        cy.get('#menu-list-6-menuitem-15').click();
        cy.wait(1000);
        cy.contains('Project 1 | Gateway 1');
        cy.contains('$').should('be.visible');
        cy.contains('TOTAL:').should('be.visible');
    });

    it('Can select: From date', () => {
        cy.get('#popover-trigger-8').click();
        cy.get('.react-calendar').should('be.visible');
    });

    it('Can select: To date', () => {
        cy.get('#popover-trigger-10').click();
        cy.get('.react-calendar').should('be.visible');
    });

    it('Shows no reports at start', () => {
        cy.contains('No reports');
    });
});
