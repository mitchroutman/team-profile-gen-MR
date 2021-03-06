const Employee = require("../src/Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github
    }
    getGitHub() {
        return this.github;
    }
    getTitle() {
        return "Engineer"
    }
}

module.exports = Engineer;