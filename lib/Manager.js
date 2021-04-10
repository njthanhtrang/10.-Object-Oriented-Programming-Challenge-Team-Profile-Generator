const Employee =  require("./Employee");

class Manager extends Employee {
    constructor(name) {
        super(name);

        this.officeNumber = this.officeNumber;
    }

    getRole() {
        // overridden to return "Manager"?
        return `Manager`;
    }

}


module.exports = Manager;