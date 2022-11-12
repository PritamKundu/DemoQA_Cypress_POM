import { moocommercePage } from "../../PageObjects/EcommercePage/moocommercePage"

before(() => {
    cy.fixture('testData').as('data')
})


// beforeEach(function () {
//     cy.fixture('testData').then((data) => {
//       this.data = data
//     })
//   })


describe('Sign In Checking', function(){

    before(function(){
        cy.visit("https://mooleker.moocommerce.no/")
        
    })

it('Verify Valid Sign In', function (){
    const moocoomerce = new moocommercePage()
    cy.wait(3000)
    moocoomerce.home().click()
    // const signIn = new SignInPage()
    // const length = this.data.Signin.length
    // for(var i=0; i<length; i++){
    //     signIn.email().type(this.data.Signin[i].email)
    //     signIn.passowrd().type(this.data.Signin[i].password)
    //     signIn.signIn().click()
    // }
})
})