
describe('Dynamic Table Handleing', function(){

        it('dynamic list', function(){


            cy.visit('webtables')
            cy.get('div[class="rt-tr-group"] div:nth-child(2)').each(($e,index,$list)) => {
                const text1 = $e.text()
                if(text1.includes("Vega"))
                {
                    cy.get('div[class="rt-tr-group"] div:nth-child(5)').eq(index).then(function(name)
                    
                    {
                        const colName = name.text()
                        expect(colName).to.equal("10000")
                    })
                }
    
            }
        })
    
    })
 
    