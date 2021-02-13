/// <reference types="Cypress" />

describe('Test Suite', function() 
{

it('Test case',function() {

//Dropdown Test
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('select').select('option3').should('have.value','option3')

//suggestion Test
cy.get('#autocomplete').type('us')
cy.get('.ui-menu-item div').each(($element, index, $list) => {
    if($element.text()==="United States (USA)")
    {
        $element.click()
    }
})
//checking value of selection
cy.get('#autocomplete').should('have.value','United States (USA)')

//Mouse Hover Test
cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','#top')


}  )

}  )