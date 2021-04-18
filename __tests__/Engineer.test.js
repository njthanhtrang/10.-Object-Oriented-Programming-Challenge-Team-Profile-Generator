const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an Engineer", () => {
    const e = new Engineer("Jen", "1", "jen@email.com", "njthanhtrang");

    expect(e.getRole()).toBe("Engineer");
});

test("github property", () => {
    const e = new Engineer("Jen", "1", "jen@email.com", "njthanhtrang");

    expect(e.github).toBe("njthanhtrang");
});

test("github method", () => {
    const e = new Engineer("Jen", "1", "jen@email.com", "njthanhtrang");

    expect(e.getGithub()).toBe("<a href=\"https://github.com/njthanhtrang\" target=\"_blank\" rel=\"noopener noreferrer\">njthanhtrang</a>");
});
