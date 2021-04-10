class Employee {
    constructor(name = "") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if (!this.name) {
            return false;
        }
        return true;
    }
    getId() {
        if (!this.id) {
            return false;
        }
        return true;
    }
    getEmail() {
        if (!this.email) {
            return false;
        }
        return true;
    }
    getRole() {
        return Employee;
    }
}

module.exports = Employee;