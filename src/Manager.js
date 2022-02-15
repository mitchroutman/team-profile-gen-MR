const Employee = require("../src/Employee");

class Manager extends Employee {
    constructor(id, name, email, officenumber) {
        super(id, name, email);
        this.officenumber = officenumber
    }
    getOfficeNumber() {
        return this.officenumber;
    }
    getTitle() {
        return "Manager"
    }
}

module.exports = Manager;