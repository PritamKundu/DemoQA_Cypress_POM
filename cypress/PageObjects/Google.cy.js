export class Google{

    Verify(){
       cy.xpath("//div[text()='Interactive']").contains("Interactive")
       cy.title().should('eq', 'Google Doodles')
    }

    Click(){
        cy.xpath("//div[text()='Interactive']").click()
    }
}