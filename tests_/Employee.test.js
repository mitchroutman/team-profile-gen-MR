const Employee = require("../src/Employee");

test("Can create a new object when you call new Employee", () => {
    const testVal =  new Employee();
    expect(typeof(testVal)).toBe("object")
})

test("when I pass the first parameter on new Employee, I create an id property with my new parameter", () => {
    const testVal =  new Employee(123);
    expect(testVal.id).toBe(123)
})

test("when I pass the second parameter on new Employee, I create an name property with my new parameter", () => {
    const testVal =  new Employee();
    expect(testVal.name).toBe(name)
})

test("when I pass the third parameter on new Employee, I create an email property with my new parameter", () => {
    const testVal =  new Employee();
    expect(testVal.email).toBe(email)
})

