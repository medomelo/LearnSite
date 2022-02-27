const fortune = require("./fortune")
// @ponicode
describe("fortune.getFortune", () => {
    test("0", () => {
        let result = fortune.getFortune()
        expect(result).toMatchSnapshot()
    })
})
