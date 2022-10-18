const { Google } = require("../PageObjects/Google.cy")

describe('My First Test Case', ()=>{
    before(() => {
        cy.visit("doodles")
    })

    it('Open Google Search Engine', ()=>{
        const object = new Google()
        object.Verify()
        object.Click()
    })
})

