const Engineer = require("../lib/Engineer.js");

jest.mock('../lib/Employee.js');

test("create a engineer object", ()  => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
    const engineer = new Engineer();
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets engineer's id", () => {
    const engineer = new Engineer();
    expect(engineer.getId()).toEqual(expect.any(String));
});

test("gets engineer's email", () => {
    const engineer = new Engineer();
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("gets engineer's role as object", () => {
    const engineer = new Engineer();

    expect(engineer.name).toBe("John Smith");
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});