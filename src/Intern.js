const Employee = require("../src/Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    getTitle() {
        return "Intern"
    }
}

module.exports = Intern;