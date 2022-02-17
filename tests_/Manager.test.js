const Manager = require("../src/Manager");

test("when I pass the fourth parameter on new Manager, I create an office number property with my new parameter", () => {
    const testVal =  new Manager();
    expect(testVal.officenumber).toBe(officenumber)
})
