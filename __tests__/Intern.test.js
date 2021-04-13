const Intern = require("../lib/Intern");

test("creates an Intern", () => {
    const i = new Intern("Jen", "1", "jen@email.com", "UCBX");

    expect(i.getRole()).toBe("Intern");
});

test("gets school property", () => {
    const i = new Intern("Jen", "1", "jen@email.com", "UCBX");

    expect(i.school).toBe("UCBX");
});

test("gets school method", () => {
    const i = new Intern("Jen", "1", "jen@email.com", "UCBX");

    expect(i.getSchool()).toBe("UCBX");
});