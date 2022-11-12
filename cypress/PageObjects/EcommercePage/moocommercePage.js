///<reference types="cypress-xpath"/>
export class moocommercePage{
    home(){
        //return cy.get('img[class="custom-logo moocommerce-logo-svg"]').first()
        return cy.xpath("(//a[normalize-space()='Hjem'])[1]")
    }
}
    
