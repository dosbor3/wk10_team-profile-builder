const Manager = require("../lib/Manager.js");


jest.mock('../lib/Employee.js');

test("create a manager object", ()  => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("gets manager's name", () => {
    const manager = new Manager();
    expect(manager.getName()).toEqual(expect.any(String));
});

test("gets manager's id", () => {
    const manager = new Manager();
    expect(manager.getId()).toEqual(expect.any(String));
});

test("gets manager's email", () => {
    const manager = new Manager();
    expect(manager.getEmail()).toEqual(expect.any(String));
});

test("gets manager's role as object", () => {
    const manager = new Manager();

    expect(manager.name).toBe("John Smith");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});