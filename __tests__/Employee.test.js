const Employee = require("../lib/Employee");

test("creates an employee", () => {
    const e = new Employee("Jen", "1", "jen@email.com");

    expect(e.name).toBe("Jen");
    expect(e.id).toBe("1");
    expect(e.email).toBe("jen@email.com");

    expect(e.getName()).toBe("Jen");
    expect(e.getId()).toBe("1");
    expect(e.getEmail()).toBe("jen@email.com");
    expect(e.getRole()).toBe("Employee");
});
