const Intern = require("../lib/Intern.js");

jest.mock('../lib/Employee.js');

test("create a intern object", ()  => {
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern();
    expect(intern.getName()).toEqual(expect.any(String));
});

test("gets intern's id", () => {
    const intern = new Intern();
    expect(intern.getId()).toEqual(expect.any(String));
});

test("gets intern's email", () => {
    const intern = new Intern();
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("gets intern's role as object", () => {
    const intern = new Intern();

    expect(intern.name).toBe("John Smith");
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});