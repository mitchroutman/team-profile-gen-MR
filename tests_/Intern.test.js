const Intern = require("../src/Intern");

test("when I pass the fourth parameter on new Intern, I create an office number property with my new parameter", () => {
    const testVal =  new Intern();
    expect(testVal.school).toBe(school)
})
