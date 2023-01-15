class FreeRangeHome {
    // Visit the page
    navigateToHome() {
        cy.visit('https://www.freerangetesters.com/')
    }
    // Return element "Empeza a Aprender"
    startButton(){
        return cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2')
    }
    // Click on Startbutton
    clickStartButton(){
        this.startButton().click()
    }
}

export default FreeRangeHome