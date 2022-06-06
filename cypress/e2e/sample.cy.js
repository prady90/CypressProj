
import pageObjects from '../e2e/pageObjects.cy'

describe('My first FW Test',()=>{

it('print log',()=>{
    
    cy.visit(pageObjects.navigationURLs.googleHomePageURL)
    cy.log('visit completed')
    cy.get(pageObjects.signOnIframe.signOnPopUp).then(function($signOniFrame){
        const signOniFrameContent = $signOniFrame.contents().find(pageObjects.signOnIframe.signOnPopUp_NoThanksBtn)     
        cy.wrap(signOniFrameContent).click()
        cy.wait(1000);
            // identified the signon pop up and clicked on it as well
    })


  //Basic setup where elements and actions are written together.  
 /*   
        cy.visit('https://www.google.com')
        cy.get('iframe[role="presentation"]').then(function($signOniFrame){
        const signOniFrameContent = $signOniFrame.contents().find('button.M6CB1c.rr4y5c')      
        cy.wrap(signOniFrameContent).click()
            // identified the signon pop up and clicked on it as well
    })
    cy.end()
*/
    cy.end()
})



})