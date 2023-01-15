import FreeRangeHome from "../../Pages/freeRangeHome"
const home = new FreeRangeHome

describe('Example using POM for test Free Range Testers WEB',() => {
    beforeEach(() => {
        home.navigateToHome()
    })
    it('validate exist and click "Empeza a Aprender" button', () => {
        home.startButton().should('exist')
        home.startButton().click()
    })
})