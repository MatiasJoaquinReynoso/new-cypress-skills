
describe('JQuery and Cypress',() => {

    it('Example jquery operations 1', () => {
        const element = $('.css-selector')
        element.click();
    })
    it('Example jquery operations 2', () => {
        const element = $('.css-selector')
        if(element.length){
            doSomething()
        }
    })
})