const Employee =  require("./Employee");

class Engineer extends Employee {
    constructor(name) {
        super(name);

        this.github = this.github;
    }
    getGithub() {

    }
    getRole() {
        // overridden to return "Engineer"?
        return `Engineer`;
    }
}

module.exports = Engineer;