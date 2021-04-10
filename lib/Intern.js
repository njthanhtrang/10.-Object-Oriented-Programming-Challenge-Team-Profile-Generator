const Employee =  require("./Employee");

class Intern extends Employee {
    constructor(name) {
        super(name);

        this.school = school;
    }

    getRole() {
        // overridden to return "Intern"?
        return `Intern`;
    }
}

module.exports = Intern;